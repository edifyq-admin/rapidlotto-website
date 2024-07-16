import React, { ReactNode } from 'react';
import StoreProvider from './StoreProvider';
import { Web3Modal } from '../lib/web3modal';
import { Metadata } from 'next';

const description = 'RapidLotto is a fast-paced lottery game built on the Ethereum blockchain. It offers frequent draws, high excitement, and provably fair gameplay through the use of smart contracts and a decentralized oracle network.';
const title = 'RapidLotto | Edifyq';

export const metadata: Metadata = {
  title, description,
  keywords: [
    'Blockchain lottery game', 'Ethereum blockchain', 'Fast-paced lottery game', '1500 tickets', 'Frequent draws', 'Distributed infrastructure', 'Secure and scalable', 'Transparent and fair', 'Fairer Game', 'Lucrative payouts (75% to winners)', 'Smart contract control', 'Immutable smart contract', 'Verifiable randomness', 'Distributed oracle network', 'Decentralized oracle network', 'Sustainable Funding Model', 'Referral incentives (10% of sales)', 'DAO-controlled admin fees (15% of sales)', 'DAO treasury', 'DAO tokenholder rewards', 'Profit-sharing mechanism'
  ],
  icons: {
    apple: '/images/egt_small_logo.png',
    icon: '/images/egt_small_logo.png',
    shortcut: '/images/egt_small_logo.png'
  },
  openGraph: {
    description, title,
    images: {
        alt: title,
        height: 560,
        width: 777,
        url: 'https://edifyq.com/images/rapid_lotto.png'
    },
    siteName: title,
    type: 'website',
    url: 'https://edifyq.com/'
  },
  twitter: {
    title, description, 
    card: 'summary_large_image',
    creator: '@cryptorapidlotto',
    images: {
        url: 'https://edifyq.com/images/rapid_lotto.png'
    }
  }
};

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="en">
            <body style={{ margin: 0 }}>
                <StoreProvider>
                    <Web3Modal>
                        { children }
                    </Web3Modal>
                </StoreProvider>
            </body>
        </html>
    )
}
