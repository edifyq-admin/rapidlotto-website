import { Metadata } from "next";
import { ReactNode } from "react";

const description = "Become a core member of the RapidLotto DAO! Invest in our limited-supply token ($RAPID) to fuel global lottery innovation, multi-chain expansion, and profit sharing. Shape the future & earn monthly rewards!";
const title = "Edifyq Gaming Token";

export const metadata: Metadata = {
  title, description,
  keywords: [
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
