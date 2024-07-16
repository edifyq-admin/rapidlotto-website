'use client';

import { Avatar, Link, Stack, Typography } from "@mui/joy"
import { PartsLayout } from "../layouts/PartsLayout"
import { ContactUsBlockLink, ExchangeBlockLink, MetamaskBlockLink, RapidLottoBlockLink } from "../links/BlockLink";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { ContactLink, ExchangeLink, MetamaskLink, RapidLottoLink } from "../links/InternalLink";
import { GamingTokenEtherScan, VendorEtherScan } from "../links/ExternalLink";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { useAppDispatch, useAppSelector } from "../../lib/store";
import { setAddress, setConnected, setNetwork, setWalletBalance } from "../../lib/features/web3Slices";
import { BrowserProvider, ethers } from "ethers";
import Image from "next/image";
import { lookup } from "../../utils/lookup";

type Props = {
    installed: boolean;
    loading: boolean;
    wallet: ReactNode;
}

const backgroundAccent = '#364675';
const backgroundColor = '#c8d3e3';
const textAccent = '#fff';
const textColor = '#111';

const WalletIcons = ({network}: {network: number}) => {

    if (network  === lookup.SEPOLIA_ID) {
        return (
            <Avatar
                color="primary"
                variant="solid"
                sx={{
                    height: '24px',
                    width: '24px'
                }}
            >
                S
            </Avatar>
        )
    }
    return (
        <Image
            alt="Ethereum logo"
            height={24}
            src={'/icons/ethereum_logo_icon.png'}
            width={24}
        />
    )
}

export const HeaderComponent = (props: Props) => {
    const pathname = usePathname();

    const dispatch = useAppDispatch();

    const walletBalance = useAppSelector(state => state.web3.walletBalance);

    const { open } = useWeb3Modal();
    const { address, chainId, isConnected } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    const [ installed, setInstalled ] = useState<boolean>(false);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ show, setShow ] = useState<boolean>(false);
    
    useEffect(() => {
        setInstalled(props.installed);
    }, [ props.installed ]);

    useEffect(() => {
        setLoading(props.loading);
    }, [ props.loading ]);

    useEffect(() => {
        dispatch(setAddress(address));
    }, [ address ]);

    useEffect(() => {
        dispatch(setConnected(isConnected));
    }, [ isConnected ]);

    useEffect(() => {
        dispatch(setNetwork(chainId));
    }, [ chainId ]);

    useEffect(() => {
        const getBalance = async() => {
            const provider = new BrowserProvider(walletProvider);
            const balance = await provider.getBalance(address);
            dispatch(setWalletBalance(+ethers.formatEther(balance)));
        }

        if(address && chainId) {
            getBalance();
        }
    }, [ address, chainId ]);

    return (
        <PartsLayout color="header">
            <Stack direction={'row'} gap={8} justifyContent={'space-between'}>
                <Stack direction={'row'}>
                    <MenuRoundedIcon
                        onClick={() => setShow(!show)}
                        sx={{ cursor: 'pointer', display: {xs: 'block', md: 'none'}, marginRight: '6px', marginTop: '12px'}}
                    />
                    <Link
                        fontSize={'32px'}
                        fontWeight={900}
                        href='/'
                        underline="none"
                        sx={{
                            color: '#222'
                        }}
                    >
                        EDIFYQ
                    </Link>
                </Stack>
                <Stack
                    direction={'row'}
                    display={{ xs: 'inherit', md: 'none'}}
                >
                    {address && (
                        <Stack>
                            <Stack
                                direction={'row'}
                                gap={1}
                            >
                                <WalletIcons network={chainId} />
                                <Typography fontWeight={600}>{ address.substring(0, 6) } ... { address.substring(address.length - 6)}</Typography>
                            </Stack>
                            <Typography alignSelf={'end'} fontSize={'12px'} fontWeight={600}>Balance: { walletBalance.toFixed(6) } {chainId === lookup.ETHEREUM_ID ? `${lookup.ETHEREUM_CURRENCY}` : `${lookup.SEPOLIA_CURRENCY}`}</Typography>
                        </Stack>
                    )}
                </Stack>
                <Stack
                    direction={'row'}
                    display={{ xs: 'none', md: 'inherit'}}
                >
                    <RapidLottoBlockLink
                        backgroundAccent={backgroundAccent}
                        backgroundColor={backgroundColor}
                        textAccent={textAccent}
                        textColor={textColor}
                    />
                    <ExchangeBlockLink
                        backgroundAccent={backgroundAccent}
                        backgroundColor={backgroundColor}
                        textAccent={textAccent}
                        textColor={textColor}
                    />
                    <ContactUsBlockLink
                        backgroundAccent={'#efefef'}
                        backgroundColor={backgroundColor}
                        textAccent={textColor}
                        textColor={textColor}
                    />
                    <MetamaskBlockLink
                        address={ address }
                        backgroundAccent={'#efefef'}
                        backgroundColor={backgroundColor}
                        click={() => open()}
                        connected={ isConnected }
                        installed={installed}
                        loading={loading}
                        network={ chainId }
                        textAccent={textColor}
                        textColor={textColor}
                    />
                </Stack>
            </Stack>
            {show && <Stack gap={2} margin={'18px 4px'}>
                <Stack gap={1}>
                    {!installed && <MetamaskLink />}
                    {pathname !== '/rapidlotto' && <RapidLottoLink />}
                    {pathname !== '/exchange' && <ExchangeLink />}
                    {pathname !== '/contact' && <ContactLink />}
                </Stack>
                <Stack gap={1}>
                    <GamingTokenEtherScan />
                    <VendorEtherScan />
                </Stack>
            </Stack>}
        </PartsLayout>
    )
}
