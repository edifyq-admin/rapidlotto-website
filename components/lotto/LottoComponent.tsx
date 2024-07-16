import { Box, Card, Typography } from "@mui/joy"
import { PreviousRoundComponent } from "./PreviousRoundComponent";
import { CurrentRoundComponent } from "./CurrentRoundComponent";
import { PlayerCardComponent } from "./PlayerCardComponent";
import { colorMap } from "../../utils/lookup";

type Props = {
    buyTokens: () => void;
    clear: boolean;
    currentJackpot: number;
    currentTicketsSold: number;
    currentTotalTickets: number;
    previousPicks: number[];
    previousPrize: number;
    previousWinners: number;
    submit: (picks: number[]) => void;
    tokenBalance: number;
}

export const LottoComponent = (props: Props) => {

    return (
        <Box
            margin={'16px auto'}
            maxWidth={'800px'}
            suppressHydrationWarning={true}
        >
            <Card
                sx={{
                    backgroundColor: colorMap.light
                }}
            >
                <Typography fontSize={'24px'} fontWeight={700} textAlign={'center'}>Rapid Lotto</Typography>
                <PreviousRoundComponent
                    picks={props.previousPicks}
                    prize={props.previousPrize}
                    winners={props.previousWinners}
                />
                <CurrentRoundComponent
                    jackpot={props.currentJackpot}
                    ticketsSold={props.currentTicketsSold}
                    totalTickets={props.currentTotalTickets}
                />
                <PlayerCardComponent
                    buyTokens={props.buyTokens}
                    clear={props.clear}
                    submit={props.submit}
                    tokenBalance={props.tokenBalance}
                />
            </Card>
        </Box>
    )
}