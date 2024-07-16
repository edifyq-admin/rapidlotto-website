'use client';

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import { ReactNode } from "react";

const projectId = 'PYogLqD_AUKIcYWfrN1_BFSDaDEwy50I';

const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
}
  
const sepolia = {
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io/',
    rpcUrl: 'https://rpc.sepolia.org'
}

const metadata = {
    name: 'Game master UI',
    description: 'Monitoring RapidLotto game',
    url: 'https://edifyq.com',
    icons: [ 'https://edifyq.com/favicon.png' ]
}

const ethersConfig = defaultConfig({
    metadata
});

createWeb3Modal({
    ethersConfig,
    chains: [ mainnet, sepolia ],
    projectId
});

export const Web3Modal = ({ children }: { children: ReactNode}) => {
    return children;
}