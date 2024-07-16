'use client';

import { ContainerLayout } from "../components/layouts/ContainerLayout"
import { SepoliaSwitch } from "../components/buttons/MainnetSwitchButton"
import { useAppSelector } from "../lib/store";
import { lookup } from "../utils/lookup";
import { LottoComponent } from "../components/lotto/LottoComponent";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { useEffect, useState } from "react";

import rapidLottoAbi from '../abi/rapidLottoAbi.json';
import { BrowserProvider, Contract, formatUnits } from "ethers";
import { Backdrop } from "@mui/material";
import { CircularProgress, Stack } from "@mui/joy";
import { EntriesComponent } from "../components/lotto/EntriesComponent";
import { FaucetGoogleCloud, FaucetQuicknode } from "../components/links/ExternalLink";

export type Ticket = {
    address: string;
    picks: number[];
}

export const LottoContainer = () => {
    const { address } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    const network = useAppSelector(state => state.web3.network);

    const [ currentAddress, setCurrentAddress ] = useState<string>('');
    const [ currentJackpot, setCurrentJackpot ] = useState<number>(0);
    const [ currentTicketsSold, setCurrentTicketsSold ] = useState<number>(0);
    const [ currentTotalTickets, setCurrentTotalTickets ] = useState<number>(0);
    const [ networkId, setNetworkId ] = useState<number>(0);
    const [ previousPicks, setPreviousPicks ] = useState<number[]>([]);
    const [ previousPrize, setPreviousPrize ] = useState<number>();
    const [ previousWinners, setPreviousWinners ] = useState<number>();
    const [ showOverlay, setShowOverlay ] = useState<boolean>(true);
    const [ tokenBalance, setTokenBalance ] = useState<number>(0);

    const [ lottoTickets, setLottoTickets ] = useState<Ticket[]>([]);
    const [ playerTickets, setPlayerTickets ] = useState<Ticket[]>([]);

    useEffect(() => {
        if (walletProvider && network === lookup.SEPOLIA_ID) {
            getPreviousResult();
            getCurrentPool();
        }
        setShowOverlay(false);
    }, [ network, walletProvider ]);

    useEffect(() => {
        setCurrentAddress(address);
    }, [ address ]);

    useEffect(() => {
        setNetworkId(network);
    }, [ network ]);

    const buyTicket = async(picks: number[]) => {
        setShowOverlay(true);
        const ethersProvider = new BrowserProvider(walletProvider);
        const signer = await ethersProvider.getSigner();
        const contract = new Contract(lookup.LOTTO_ADDRESS, rapidLottoAbi, signer);
        await contract.buyTicket(lookup.WEBMASTER, picks);
        setShowOverlay(false);
    }

    const buyTokens = async() => {
        if (walletProvider) {
            setShowOverlay(true);
            const ethersProvider = new BrowserProvider(walletProvider);
            const signer = await ethersProvider.getSigner();
            const contract = new Contract(lookup.LOTTO_ADDRESS, rapidLottoAbi, signer);
            try {
                await contract.deposit();
            } catch {
                setShowOverlay(false);
            }
            getCurrentPool();
            setShowOverlay(false);
        }
    }

    const getCurrentPool = async() => {
        if (walletProvider) {
            setShowOverlay(true);
            const ethersProvider = new BrowserProvider(walletProvider);
            const contract = new Contract(lookup.LOTTO_ADDRESS, rapidLottoAbi, ethersProvider);
            const entries = await contract.getEntries();
            const tickets = entries.map(item => {
                const [ address, ticket ] = item;
                const picks = ticket.map(pick => Number(pick));
                return ({ address, picks });
            });
            const filterAddress = currentAddress.length > 2 ? currentAddress : address;
            setLottoTickets(tickets.filter(item => item.address !== filterAddress));
            setPlayerTickets(tickets.filter(item => item.address === filterAddress));
            setCurrentJackpot(+(formatUnits(await contract.getPoolValue(), 2)));
            setCurrentTicketsSold(entries.length);
            setCurrentTotalTickets(+(formatUnits(await contract.getMaxTickets(), 0)));
            setTokenBalance(+(formatUnits(await contract.getBalance(address), 2)));
            setShowOverlay(false);

            contract.on('Sale', async() => {
                console.log('sale made');
                getCurrentPool();
            });
        }
    }

    const getPreviousResult = async() => {
        if (walletProvider) {
            const ethersProvider = new BrowserProvider(walletProvider);
            const contract = new Contract(lookup.LOTTO_ADDRESS, rapidLottoAbi, ethersProvider);
            if (contract) {
                const [ winners, lotto, prize ] = await contract.getPreviousResult();
                setPreviousPicks(lotto.map((item: bigint) => +item.toString()));
                setPreviousPrize(Number(formatUnits(prize, 2)))
                setPreviousWinners(winners.length);
                const entries = await contract.getEntries();    
            }
        }
    }

    return (
        <>
            <Backdrop
                open={showOverlay}
                sx={{
                    zIndex: 1000
                }}
            >
                <CircularProgress
                    color="neutral"
                    size="lg"
                    value={25}
                    variant="plain"
                />
            </Backdrop>
            <ContainerLayout color="container">
                {networkId === lookup.ETHEREUM_ID && <SepoliaSwitch />}
                {networkId === lookup.SEPOLIA_ID && (
                    <>
                        <LottoComponent
                            buyTokens={buyTokens}
                            clear={showOverlay}
                            currentJackpot={currentJackpot}
                            currentTicketsSold={currentTicketsSold}
                            currentTotalTickets={currentTotalTickets}
                            previousPicks={previousPicks}
                            previousPrize={previousPrize}
                            previousWinners={previousWinners}
                            submit={buyTicket}
                            tokenBalance={tokenBalance}
                        />
                        <Stack
                            margin={'16px auto'}
                            maxWidth={'800px'}
                        >
                            <FaucetQuicknode />
                            <FaucetGoogleCloud />
                        </Stack>
                        <EntriesComponent
                            lottoTickets={lottoTickets}
                            playerTickets={playerTickets}
                        />
                    </>
                )}
            </ContainerLayout>
        </>
    )
}
