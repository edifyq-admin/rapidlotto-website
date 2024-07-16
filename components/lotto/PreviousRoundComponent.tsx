import { Card, Stack, Typography } from "@mui/joy"
import { SmallNumberComponent } from "./NumberComponent"
import { ReactNode } from "react";
import { CentreText } from "../texts/CentreTextComonent";

type Props = {
    picks: number[];
    prize: number;
    winners: number;
}

export const PreviousRoundComponent = (props: Props) => {
    return (
        <Card color="neutral" variant="soft">
            <CentreText>Previous Round</CentreText>
            <Stack
                alignContent={'stretch'}
                direction={'row'}
                justifyContent={'center'}
                margin={'8px 0'}
            >
                {props.picks.map(pick => (
                    <SmallNumberComponent
                        backgroundColor="green"
                        click={() => {}}
                        color="white"
                        key={pick}
                        pick={pick}
                    />
                ))}
            </Stack>
            <CentreText>{props.winners} player{props.winners > 1 ? 's shared': ' won'} </CentreText>
            <Typography fontSize={'20px'} fontWeight={600} textAlign={'center'}>{props.prize ? props.prize.toLocaleString() : '0.00' } tokens</Typography>
        </Card>
    )
}
