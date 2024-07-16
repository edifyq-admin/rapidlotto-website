import { Box, Card, Stack, Typography } from "@mui/joy"
import { colorMap } from "../../utils/lookup"
import { CentreText } from "../texts/CentreTextComonent"
import { SmallNumberComponent } from "./NumberComponent"
import { Ticket } from "../../containers/LottoContainer"

type Props = {
    lottoTickets: Ticket[],
    playerTickets: Ticket[]
}

export const EntriesComponent = (props: Props) => {
    return (
        <Box
        margin={'16px auto'}
        maxWidth={'800px'}
    >
            <Card
                sx={{
                    backgroundColor: colorMap.light
                }}
            >
                <Card
                    color="neutral"
                    variant="soft"
                    sx={{
                        maxHeight: '500px',
                        overflow: 'auto',
                        padding: '0 2rem'
                    }}
                >
                    <CentreText>Your Entries</CentreText>
                    {props.playerTickets.map((ticket, index) => (
                        <Stack
                            alignContent={'stretch'}
                            direction={'row'}
                            justifyContent={'center'}
                            key={`${ticket.address}_${index}`}
                            margin={'8px 0'}
                        >
                            <Typography
                                fontSize={'18px'}
                                fontWeight={600}
                                margin={'auto 0'}
                            ># {(index + 1).toLocaleString()}. </Typography>
                            {ticket.picks.map(pick => (
                                <SmallNumberComponent
                                    backgroundColor="orange"
                                    click={() => {}}
                                    color="white"
                                    key={pick}
                                    pick={pick}
                                />
                            ))}
                        </Stack>
                    ))}
                </Card>

                <Card
                    color="neutral"
                    variant="soft"
                    sx={{
                        maxHeight: '500px',
                        overflow: 'auto',
                        padding: '0 2rem'
                    }}
                >
                    <CentreText>Lotto Entries</CentreText>
                    {props.lottoTickets.map((ticket, index) => (
                        <Stack
                            alignContent={'stretch'}
                            direction={'row'}
                            justifyContent={'center'}
                            key={`${ticket.address}_${index}`}
                            margin={'8px 0'}
                        >
                            <Typography
                                fontSize={'18px'}
                                fontWeight={600}
                                margin={'auto 0'}
                            ># {(index + 1).toLocaleString()}. </Typography>
                            {ticket.picks.map(pick => (
                                <SmallNumberComponent
                                    backgroundColor="darkgray"
                                    click={() => {}}
                                    color="white"
                                    key={pick}
                                    pick={pick}
                                />
                            ))}
                        </Stack>
                    ))}
                </Card>
            </Card>
        </Box>
    )
}