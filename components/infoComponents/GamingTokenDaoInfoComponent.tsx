import { Box, List, ListItem, Sheet, Stack, Typography } from "@mui/joy"
import { PartsLayout } from "../layouts/PartsLayout"
import { ExtraLargeBoldFont } from "../texts/ExtraLargeBoldFont"
import { MediumBoldFont } from "../texts/MediumBoldFont"

export const GamingTokenDaoInfoComponent = () => {
    return (
        <PartsLayout color="info">
            <Stack
                gap={4}
                margin={'auto'}
                maxWidth={'1200px'}
            >
                <Box margin={'8px'} textAlign={'center'}>
                    <ExtraLargeBoldFont>RapidLotto DAO</ExtraLargeBoldFont>
                </Box>
                <Stack gap={2}>
                    <Typography>The RapidLotto DAO token serves as the cornerstone of our project. This limited-supply (1,000,000 tokens) investment vehicle will fuel the completion and launch of RapidLotto, along with establishing the legal entities needed to operate a global lottery system. But that's just the beginning. The funds raised will also go towards:</Typography>
                    <List marker="disc">
                        <ListItem><b>Multi-Chain Deployment:</b> RapidLotto won't be confined to Ethereum. We plan to deploy it across every blockchain that supports smart contracts, fostering wider accessibility and a more inclusive ecosystem.</ListItem>
                        <ListItem><b>Bridging the Gaps:</b> The next phase of our vision involves building a multi-chain bridge, enabling seamless and swift token transfers across different blockchains, not just Ethereum-based ones.</ListItem>
                    </List>
                </Stack>
                <Stack gap={2}>
                    <MediumBoldFont>Investing in Your Future</MediumBoldFont>
                    <Typography>DAO token holders are more than just investors; they're active participants in RapidLotto's success. Here's how your involvement shapes the future:</Typography>
                    <List marker="disc">
                        <ListItem><b>Profit Sharing:</b> DAO token holders will share in the monthly profits of RapidLotto. A portion will be reinvested for continued growth, while the remainder will be distributed amongst token holders. You'll have a say in the percentage allocated for reinvestment (between 10% and 60%) through monthly voting.</ListItem>
                        <ListItem><b>Collective Decision-Making:</b> Your vote also determines the direction of further investments. You'll have the power to decide which existing investments to continue and which to discontinue, ensuring optimal returns for the entire community.</ListItem>
                        <ListItem><b>Enhanced Influence:</b> Holders with 10,000 or more tokens gain the privilege of proposing new voting options, shaping the future of RapidLotto beyond profit-sharing. They'll also benefit from additional, non-lottery related profits.</ListItem>
                    </List>
                </Stack>
                <Stack gap={2}>
                    <Typography>We're committed to fostering a highly engaged DAO community. Over the next two months, we'll unveil further details about the DAO structure and its governance mechanisms. Our goal is to leverage the power of collective intelligence to establish Edifyq as a leading contributor to the blockchain landscape.</Typography>
                    <Typography>We believe blockchain technology has the potential to empower communities and create a fairer system of resource distribution. RapidLotto is our first step on this path, and we invite you to join us in building a brighter blockchain future, together.</Typography>
                </Stack>
            </Stack>
        </PartsLayout>
    )
}
