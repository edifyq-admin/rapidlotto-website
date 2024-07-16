import { env } from "process"

export const colorMap = {
    container: '#364675',
    default: '#efefef',
    info: '#b7cbde',
    header: '#c8d3e3',
    light: '#fefefe',
    dark: '#323232'
}

export const lookup = {
    AGGREGATOR_ADDRESS: process.env.NEXT_PUBLIC_AGGREGATOR_ADDRESS,
    ETG_ADDRESS: process.env.NEXT_PUBLIC_EGT_ADDRESS,
    ETH_DOLLAR_RATE: process.env.NEXT_PUBLIC_ETH_DOLLAR_RATE,
    ETHEREUM_CURRENCY: 'Eth',
    ETHEREUM_ID: +process.env.NEXT_PUBLIC_ETHEREUM_ID,
    LOTTO_ADDRESS: process.env.NEXT_PUBLIC_LOTTO_ADDRESS,
    SEPOLIA_CURRENCY: 'Sepolia Eth',
    SEPOLIA_ID: +process.env.NEXT_PUBLIC_SEPOLIA_ID,
    VENDOR_ADDRESS: process.env.NEXT_PUBLIC_VENDOR_ADDRESS,
    WEBMASTER: process.env.NEXT_PUBLIC_WEBMASTER
}
