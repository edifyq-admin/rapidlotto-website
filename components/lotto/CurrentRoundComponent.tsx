import { Card, Stack, Typography } from "@mui/joy"
import { CentreText } from "../texts/CentreTextComonent"

type Props = {
    jackpot: number;
    ticketsSold: number;
    totalTickets: number;
}

export const CurrentRoundComponent = (props: Props) => {
    return (
        <Card color="neutral" variant="soft">
            <Stack>
                <CentreText>Jackpot</CentreText>
                <Typography fontSize={'24px'} fontWeight={600} textAlign={'center'}>{ props.jackpot.toLocaleString()} tokens</Typography>
            </Stack>
            <Stack>
                <CentreText>Tickets Sold</CentreText>
                <Typography fontSize={'20px'} fontWeight={600} textAlign={'center'}>{props.ticketsSold.toLocaleString()} / { props.totalTickets.toLocaleString()}</Typography>
            </Stack>
        </Card>
    )
}