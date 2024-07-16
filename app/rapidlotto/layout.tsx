import { Metadata } from "next";
import { ReactNode } from "react";

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
    url: 'https://edifyq.com/rapidlotto'
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

export default function PageLayout({children}: {children: ReactNode}) {
    return (
        <>{ children }</>
    )
}
