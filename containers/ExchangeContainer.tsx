'use client';

import { ContainerLayout } from "../components/layouts/ContainerLayout"
import { useAppSelector } from "../lib/store";
import { lookup } from "../utils/lookup";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { ExchangeComponent } from "../components/exchange/ExchangeComponent";
import { useEffect, useState } from "react";
import { BrowserProvider, Contract, ethers } from "ethers";
import { MainnetSwitch } from "../components/buttons/MainnetSwitchButton";

import aggregatorAbi from '../abi/aggregatorAbi.json';
import egtAbi from '../abi/edifyqGamingTokenAbi.json';
import vendorAbi from '../abi/vendorAbi.json';

import { calculateRate } from "../utils/calculate";

export const ExchangeContainer = () => {
    const { address } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    const network = useAppSelector(state => state.web3.network);

    const [ availableTokens, setAvailableTokens ] = useState<number>(0);
    const [ email, setEmail ] = useState<string>('');
    const [ egtBalance, setEgtBalance ] = useState<number>(0);
    const [ ethExchange, setEthExchange ] = useState<number>(0);
    const [ networkId, setNetworkId ] = useState<number>(0);
    const [ rate, setRate ] = useState<number>(0);

    useEffect(() => {
        if (walletProvider && network === lookup.ETHEREUM_ID) {
            loadValues();
            updateRate();
        }
    }, [ address, walletProvider ]);

    useEffect(() => {
        setNetworkId(network);
    }, [ network ]);

    const handleSubmit = async(egtValue: number, email: string) => {
        if (walletProvider && network === lookup.ETHEREUM_ID) {
            const ethersProvider = new BrowserProvider(walletProvider);
            const signer = await ethersProvider.getSigner();
            const contract = new Contract(lookup.VENDOR_ADDRESS, vendorAbi, signer);
            const value = Math.ceil((rate * (egtValue + 1) * 10000)) / 10000;
            await contract.buyTokens({ value: ethers.parseEther(`${value.toFixed(4)}`)});

            if (email.length > 0) {
                setEmail(email);
                await fetch('https://api.edifyq.com/email', {
                    method: 'POST',
                    body: JSON.stringify({ email }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setEmail('');
            }

            loadValues();
        }
    }

    const loadValues = async() => {
        if (walletProvider && network === lookup.ETHEREUM_ID) {
            const ethersProvider = new BrowserProvider(walletProvider);
            const egtContract = new Contract(lookup.ETG_ADDRESS, egtAbi, ethersProvider);
            setEgtBalance(+(await egtContract.balanceOf(address)).toString());
            setAvailableTokens(+(await egtContract.balanceOf(lookup.VENDOR_ADDRESS)).toString());

            const vendorContract = new Contract(lookup.VENDOR_ADDRESS, vendorAbi, ethersProvider);
            setRate(calculateRate(await vendorContract.tokensPerEth()));
        }
    }

    const updateRate = async() => {
        if (walletProvider && network === lookup.ETHEREUM_ID) {
            const ethersProvider = new BrowserProvider(walletProvider);
            const aggregatorContract = new Contract(lookup.AGGREGATOR_ADDRESS, aggregatorAbi, ethersProvider);
            const decimals = +(await aggregatorContract.decimals()).toString();
            const price = await aggregatorContract.latestRoundData();
            const ratePrice = price[1];
            setEthExchange(+(ethers.formatUnits(ratePrice, decimals)));
            setTimeout(() => updateRate(), 60000);
        }
    }

    return (
        <ContainerLayout
            color="container"
        >
            {networkId === lookup.SEPOLIA_ID && <MainnetSwitch />}
            {networkId === lookup.ETHEREUM_ID && (
                <ExchangeComponent
                    availableTokens={availableTokens}
                    egtBalance={egtBalance}
                    email={email}
                    ethExchange={ethExchange}
                    rate={rate}
                    submit={handleSubmit}
                />
            )}
        </ContainerLayout>
    )
}
