import { Stack, Typography } from "@mui/joy"
import { PartsLayout } from "../layouts/PartsLayout"
import Image from "next/image"

export const RapidlottoInfoComponent = () => {
    return (
        <PartsLayout color="info">
            <Stack
                gap={4}
                margin={'auto'}
                maxWidth={'1200px'}
            >
            <Stack gap={2}>
                <Typography>RapidLotto is a dynamic lottery game limited to 1,500 tickets per round, ensuring swift payouts and encouraging more participation with frequent winnings.</Typography>
                <Image src={`/images/lottosales.png`} alt="Image that depicts the income distribution of ticket sales" height={340} width={560} />
                <Typography>Hosted on the blockchain, RapidLotto leverages smart contracts to minimize administrative costs, allowing us to allocate a greater portion of ticket sales to the prize pool. Specifically, 75% of each ticket's price goes directly into the lotto pool for participants.</Typography>
                <Typography>Our vision includes integrating numerous RapidLotto plugins across websites to foster the adoption of cryptocurrencies. RapidLotto utilizes DAI, highlighting the benefits of using a stablecoin for blockchain transactions. As part of our commitment to partners, we will share 10% of the ticket cost with webmasters.</Typography>
                <Typography>The remaining 15% of ticket sales will cover administrative fees, with the resulting profits being distributed among DAO token holders.</Typography>
            </Stack>

            </Stack>
        </PartsLayout>
    )
}
