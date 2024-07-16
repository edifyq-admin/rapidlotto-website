import { Box, Button, Card, Input, Stack, Typography } from "@mui/joy"
import { useEffect, useState } from "react";
import { EthExchangeComponent } from "./EthExchangeComponent";
import { EgtExchangeComponent } from "./EgtExchangeComponent";
import { EmailComponent } from "../comms/EmailComponent";

type ReturnProps = {
    value: number,
    email: string
}

type ExhangeComponentProps = {
    availableTokens: number;
    egtBalance: number;
    email: string;
    ethExchange: number;
    rate: number;
    submit: (egtBalance: number, email: string) => void;
}

const lightColor = '#fefefe';

const formatCurrency = (value: string) => {
    return formatDecimalNumber(value);
}

const formatDecimalNumber = (value: string) => {
    if (value.indexOf('.') < 0) {
        return (+value).toLocaleString();
    }
    if (value.endsWith('.')) {
        return `${(+value).toLocaleString()}.`;
    }
    const val = value.split('.');
    return [(+val[0]).toLocaleString(), val[1]].join('.');
}

export const ExchangeComponent = (props: ExhangeComponentProps) => {

    const [ availableTokens, setAvailableTokens ] = useState<number>(0);
    const [ clearEmail, setClearEmail ] = useState<string>('');
    const [ egtBalance, setEgtBalance ] = useState<number>(0);
    const [ egtToBuy, setEgtToBuy ] = useState<number>(0);
    const [ egtValue, setEgtValue ] = useState<number>(0);
    const [ email, setEmail ] = useState<string>('');
    const [ ethValue, setEthValue ] = useState<number>(0);
    const [ exchangeRate, setExchangeRate ] = useState<number>(0);
    const [ rate, setRate ] = useState<number>(0);

    useEffect(() => {
        setAvailableTokens(props.availableTokens);
        setEgtBalance(props.egtBalance);
        setExchangeRate(props.ethExchange);
        setRate(props.rate);
    }, [ props ]);

    useEffect(() => {
        setClearEmail(props.email);
    }, [ props.email ]);

    const handleBuy = () => {
        props.submit(egtToBuy, email);
    }

    const handleEgtChange = (value: number) => {
        const eth = value * rate;
        setEthValue(eth);
        setEgtToBuy(value);
    }

    const handleEthChange = (value: number) => {
        setEgtValue(Math.floor(value * (1 / rate)));
        setEgtToBuy(Math.floor(value * (1 / rate)));
    }

    return (
        <Box
            margin={'16px auto'}
            maxWidth={'800px'}
            suppressHydrationWarning={true}
        >
            <Card
                sx={{
                    backgroundColor: lightColor
                }}
            >
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography>Buys</Typography>
                    <Typography>Your $EGT: { egtBalance.toLocaleString() }</Typography>
                </Stack>
                <EthExchangeComponent
                    change={handleEthChange}
                    rate={exchangeRate}
                    value={ethValue}
                />
                <EgtExchangeComponent
                    change={handleEgtChange}
                    tokens={availableTokens}
                    value={egtValue}
                />
                <EmailComponent
                    change={(value: string) => setEmail(value)}
                    email={clearEmail}
                />
                <Button
                    color="success"
                    disabled={ethValue <= 0}
                    onClick={handleBuy}
                    size="lg"
                    variant="solid"
                >
                    Buy $ETG
                </Button>
                <Stack
                    direction={'row'}
                    fontWeight={700}
                    justifyContent={'space-between'}
                    sx={{
                        color: '#a0a0a0'
                    }}
                >
                    <Typography fontSize={'14px'}>1 $ETG = { rate } ETH ($ {(rate * exchangeRate).toFixed(2)})</Typography>
                    {/* <Stack direction={'row'} gap={1}>
                        <LocalGasStationOutlinedIcon sx={{
                            fontSize: '20px'
                        }} />
                        <Typography fontSize={'14px'}>{ gasPrice.toFixed(2)}</Typography>
                    </Stack> */}
                </Stack>
            </Card>
        </Box>
    )
}
