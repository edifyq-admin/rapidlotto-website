import { Box, Button } from "@mui/joy";
import { useSwitchNetwork } from "@web3modal/ethers/react";
import { colorMap, lookup } from "../../utils/lookup";

const { switchNetwork } = useSwitchNetwork();

export const MainnetSwitch = () => {
    return (
        <Box
            margin={'24px 0'}
            textAlign={'center'}
        >
            <Button
                onClick={() => switchNetwork(lookup.ETHEREUM_ID)}
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
            >Switch to Mainnet</Button>
        </Box>
    )
}

export const SepoliaSwitch = () => {
    return (
        <Box
            margin={'24px 0'}
            textAlign={'center'}
        >
            <Button
                onClick={() => switchNetwork(lookup.SEPOLIA_ID)}
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
            >Switch to Sepolia</Button>
        </Box>
    )
}
