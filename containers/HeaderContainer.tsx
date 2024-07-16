'use client';

import { Box } from "@mui/joy"
import { useAppDispatch, useAppSelector } from "../lib/store"
import { HeaderComponent } from "../components/headers/headerComponent"
import { useWalletInfo } from "@web3modal/ethers/react";
import { useEffect } from "react";
import { setInstalled, setLoading } from "../lib/features/web3Slices";

const Wallet = () => {
    const installed = useAppSelector(state => state.web3.installed);

    return (
        <Box/>
    )
}

export const HeaderContainer = () => {
    const dispatch = useAppDispatch();

    const installed = useAppSelector(state => state.web3.installed);
    const loading = useAppSelector(state => state.web3.loading);

    const { walletInfo } = useWalletInfo();

    useEffect(() => {

        const getInstalled = async() => {
            await dispatch(setLoading(false));
            await dispatch(setInstalled(!walletInfo));
        }

        getInstalled();
    }, []);

    return (
        <HeaderComponent
            installed={installed}
            loading={loading}
            wallet={<Wallet />} />
    )
}
