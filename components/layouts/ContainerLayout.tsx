'use client';

import { Box, Button, Sheet, Typography } from "@mui/joy";
import { ReactNode, useEffect, useState } from "react";
import { useAppSelector } from "../../lib/store";
import { useWeb3Modal } from "@web3modal/ethers/react";
import { colorMap } from "../../utils/lookup";

type Props = {
    accent?: boolean;
    children: ReactNode;
    color: 'container' | 'default' | 'info' | 'header' | 'light';
}

const ConnectWallet = () => {
    const { open } = useWeb3Modal();

    return (
        <Box
            marginTop={'24px'}
            textAlign={'center'}
        >
            <Button
                onClick={() => open()}
                size="lg"
                sx={{
                    backgroundColor: colorMap['default'],
                    color: colorMap['dark'],
                    width: '300px',
                    ":hover": {
                        backgroundColor: colorMap['dark'],
                        color: colorMap['default']
                    }
                }}
            >Connect Wallet</Button>
        </Box>
    )
}

const InstallWallet = () => (
    <Box
        margin={'16px auto'}
        maxWidth={'800px'}
    >
        <Typography
            fontSize={'18px'}
            textAlign={'justify'}
            sx={{
                color: '#efefef'
            }}
        >To play RapidLotto or participate in our DAO, you need to install MetaMask or a similar Web3 wallet. This installation will fully immerse you in the Web3 ecosystem, allowing you to experience the next iteration of the internet. With a crypto wallet, you can authenticate and authorize yourself online without the need for personal information, ensuring that your data remains private and secure. Embrace the future of the web by safeguarding your personal information and taking control of your digital identity through your wallet.</Typography>
        <Box
            marginTop={'24px'}
            textAlign={'center'}
        >
            <Button
                component="a"
                href="/metamask"
                size="lg"
                sx={{
                    backgroundColor: colorMap['default'],
                    color: colorMap['dark'],
                    width: '300px',
                    ":hover": {
                        backgroundColor: colorMap['dark'],
                        color: colorMap['default']
                    }
                }}
            >Install MetaMask</Button>
        </Box>
    </Box>
)

export const ContainerLayout = (props: Props) => {
    const address = useAppSelector(state => state.web3.address);
    const connected = useAppSelector(state => state.web3.connected);
    const installed = useAppSelector(state => state.web3.installed);

    const [ isConnected, setIsConnected ] = useState<boolean>(false);
    const [ walletInstalled, setWalletInstalled ] = useState<boolean>();

    useEffect(() => {
        setWalletInstalled(connected ? connected : installed);
        setIsConnected(connected);
    }, [ connected, installed ]);

    return (
        <Sheet
            suppressHydrationWarning={true}
            sx={{
                backgroundColor: colorMap[props.color],
                color: props.accent ? '#fff' : '#000',
                padding: '16px'
            }}
        >
            {walletInstalled === false && <InstallWallet />}

            {isConnected && props.children}
        </Sheet>
    )
}
