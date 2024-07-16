import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import { Link, Typography } from "@mui/joy"
import { ReactNode } from "react"
import { lookup } from '../../utils/lookup';

type Props = {
    children: ReactNode;
    color?: 'inherit' | 'white';
    url: string;
};

const ExternalLink = (props: Props) => {
    return (
        <Link
            href={props.url}
            target="_blank"
            sx={{
                color: props.color || 'inherit'
            }}
        >
            { props.children }
            <LaunchOutlinedIcon sx={{ height: '18px', marginLeft: '4px'}} />
        </Link>
    )
}

export const FaucetGoogleCloud = () => (
    <ExternalLink
        color='white'
        url='https://cloud.google.com/application/web3/faucet/ethereum/sepolia'
    >
        <Typography>Google Cloud Sepolia Faucet</Typography>
    </ExternalLink>
)

export const FaucetQuicknode = () => (
    <ExternalLink
        color='white'
        url='https://faucet.quicknode.com/ethereum/sepolia'
    >
        <Typography>Quicknode Sepolia Faucet</Typography>
    </ExternalLink>
)

export const GamingTokenEtherScan = () => {
    return (
        <ExternalLink
            url={`https://etherscan.io/address/${lookup.ETG_ADDRESS}`}
        >
            <Typography fontSize={'18px'} fontWeight={800}>Track $EGT on Etherscan</Typography>
        </ExternalLink>
    )
}

export const VendorEtherScan = () => {
    return (
        <ExternalLink
            url={`https://etherscan.io/address/${lookup.VENDOR_ADDRESS}`}
        >
            <Typography fontSize={'18px'} fontWeight={800}>Track Vendor Contract on Etherscan</Typography>
        </ExternalLink>
    )
}
