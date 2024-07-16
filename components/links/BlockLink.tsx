'use client';

import { Avatar, Box, Button, CircularProgress, Link, Stack, Typography } from "@mui/joy";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useAppSelector } from "../../lib/store";
import { lookup } from "../../utils/lookup";
import Image from "next/image";

type BlockButtonProps = {
    backgroundAccent: string;
    backgroundColor: string;
    children: ReactNode;
    click: () => void;
    textAccent: string;
    textColor: string;
    url: string;
}

type LinkProps = {
    backgroundAccent: string;
    backgroundColor: string;
    textAccent: string;
    textColor: string;
}

type MetamaskProps = {
    address: string;
    backgroundAccent: string;
    backgroundColor: string;
    click: () => void;
    connected: boolean;
    installed: boolean;
    loading: boolean;
    network: number;
    textAccent: string;
    textColor: string;
}

type Props = {
    backgroundAccent: string;
    backgroundColor: string;
    children: ReactNode;
    textAccent: string;
    textColor: string;
    url: string;
}

const Layout = (props: Props) => {
    const pathname = usePathname();
    return (
        <Box
            bgcolor={pathname === props.url ? props.backgroundAccent : props.backgroundColor}
            minWidth={'300px'}
            margin={'-16px 0'}
            textAlign={'center'}
        >
            { props.children }
        </Box>
    )
}

const BlockButton = (props: BlockButtonProps) => {
    const pathname = usePathname();
    return (
        <Layout { ...props }>
            <Button
                color="warning"
                fullWidth
                onClick={props.click}
                size="lg"
                sx={{
                    marginTop: '16px'
                }}
            >{ props.children }</Button>
        </Layout>
    )
}

const BlockLink = (props: Props) => {
    const pathname = usePathname();
    return (
        <Layout { ...props}>
            <Link
                alignSelf={'center'}
                fontSize={'24px'}
                href={ props.url }
                paddingTop={'20px'}
                underline="none"
                sx={{
                    color: pathname === props.url ? props.textAccent : props.textColor
                }}
            >
                { props.children }
            </Link>
    </Layout>
)}

export const ContactUsBlockLink = (props: LinkProps) => (
    <BlockLink
        url="/contact"
        { ...props }
    >
        Contact Us
    </BlockLink>
)

export const ExchangeBlockLink = (props: LinkProps) => (
    <BlockLink
        url="/exchange"
        { ...props }
    >
        Buy DAO Token
    </BlockLink>
)

const InstallMetamask = (props: MetamaskProps) => {
    const pathname = usePathname();

    return (
        <Box
            bgcolor={pathname === '/metamask' ? props.backgroundAccent : props.backgroundColor}
            minWidth={'300px'}
            // margin={'-16px 0'}
            marginBottom={'-16px'}
            textAlign={'center'}
        >
            <BlockLink
                url="/metamask"
                { ...props }
            >Install MetaMask</BlockLink>
        </Box>
    )
}

const LoadingIndicator = () => (
    <Box
        minWidth={'300px'}
        margin={'-16px 0'}
        textAlign={'center'}
    >
        <CircularProgress color="warning" sx={{ marginTop: '16px'}} />
    </Box>
)

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

export const MetamaskBlockLink = (props: MetamaskProps) => {
    const pathname = usePathname();

    const installed = useAppSelector(state => state.web3.installed);
    const walletBalance = useAppSelector(state => state.web3.walletBalance);

    const [ installedWallet, setInstalledWallet ] = useState<boolean>();

    useEffect(() => {
        setInstalledWallet(props.connected ? props.connected : installed);
    }, [ props.connected, installed ]);

    if (props.loading) {
        return <LoadingIndicator />
    }

    if (installedWallet === false) {
        return <InstallMetamask { ...props } />
    }

    if (!props.connected) {
        return <BlockButton url="" { ...props }>Connect Wallet</BlockButton>;
    }

    return (
        <>
            {props.address && (
                <Stack>
                    <Stack
                        direction={'row'}
                        gap={1}
                    >
                        <WalletIcons network={props.network} />
                        <Typography fontWeight={600}>{ props.address.substring(0, 6) } ... { props.address.substring(props.address.length - 6)}</Typography>
                    </Stack>
                    <Typography alignSelf={'end'} fontSize={'12px'} fontWeight={600}>Balance: { walletBalance.toFixed(6) } {props.network === lookup.ETHEREUM_ID ? `${lookup.ETHEREUM_CURRENCY}` : `${lookup.SEPOLIA_CURRENCY}`}</Typography>
                </Stack>
            )}
        </>
)
}

export const RapidLottoBlockLink = (props: LinkProps) => (
    <BlockLink
        url="/rapidlotto"
        { ...props }
    >
        Play Rapid Lotto
    </BlockLink>
)
