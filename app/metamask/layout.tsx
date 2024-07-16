import { Metadata } from "next";
import { ReactNode } from "react";

const description = "This guide walks you through the official installation process, ensuring a safe and secure setup for your MetaMask wallet.";
const title = "MetaMask setup | Edifyq";

export const metadata: Metadata = {
    title, description,
    keywords: [
        'MetaMask', 'Crypto Wallet', 'Ethereum Wallet', 'Browser Extension', 'Chrome Extension', 'Firefox Extension', 'Web3 Wallet', 'Digital Asset Wallet', 'Blockchain Wallet', 'Seed Phrase Recovery', 'Secure Login'
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
      url: 'https://edifyq.com/help'
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
