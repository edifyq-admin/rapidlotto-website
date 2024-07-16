import { Metadata } from "next";
import { ReactNode } from "react";

const description = "Please do not hesitate to call us if you need more information about our products, or in fact if you want more information on crypto currencies and blockchains.";
const title = "Contact Page | Edifyq";

export const metadata: Metadata = {
    title, description,
    keywords: [
        'MetaMask', 'Crypto Wallet', 'Ethereum Wallet', 'Browser Extension', 'Chrome Extension', 'Firefox Extension', 'Web3 Wallet', 'Digital Asset Wallet', 'Blockchain Wallet', 'Seed Phrase Recovery', 'Secure Login',
        'Blockchain lottery game', 'Ethereum blockchain', 'Fast-paced lottery game', '1500 tickets', 'Frequent draws', 'Distributed infrastructure', 'Secure and scalable', 'Transparent and fair', 'Fairer Game', 'Lucrative payouts (75% to winners)', 'Smart contract control', 'Immutable smart contract', 'Verifiable randomness', 'Distributed oracle network', 'Decentralized oracle network', 'Sustainable Funding Model', 'Referral incentives (10% of sales)', 'DAO-controlled admin fees (15% of sales)', 'DAO treasury', 'DAO tokenholder rewards', 'Profit-sharing mechanism',
        'RapidLotto DAO Token', 'Limited-Supply Token (1,000,000)', 'Blockchain Lottery System', 'Multi-Chain Deployment', 'Smart Contract Tokens', 'Multi-Chain Bridge', 'DAO Profit Sharing', 'Monthly Profit Sharing Vote', 'Collective Decision-Making by DAO', 'Investment Decisions by DAO Token Holders', 'Engaged DAO Community', 'Blockchain Technology & Communities'
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
      url: 'https://edifyq.com/contact'
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

export default function ContactLayout({children}: {children: ReactNode}) {
    return (
        <>{ children }</>
    )
}
