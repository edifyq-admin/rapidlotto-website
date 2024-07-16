import { Button, Card, Input, Stack, Typography } from "@mui/joy"
import Image from "next/image";
import { useEffect, useState } from "react"
import { formatCurrency, formatDecimalNumber } from "../../utils/format";
import { decimalNumberRegex } from "../../utils/validations";

type Props = {
    change: (value: number) => void;
    rate: number;
    value: number;
}

export const EthExchangeComponent = (props: Props) => {

    const [ dollarValue, setDollarValue ] = useState<string>('0.00');
    const [ ethValue, setEthValue ] = useState<string>('0');
    const [ rate, setRate ] = useState<number>(0);
    const [ sendUpdate, setSendUpdate ] = useState<boolean>(false);

    useEffect(() => {
        if (!sendUpdate) {
            setEthValue(formatDecimalNumber(`${props.value}`));
            setDollarValue(formatCurrency((props.value * props.rate).toString()));
        }
        setRate(props.rate)
    }, [ props ]);

    const handleBlur = () => {
        if (ethValue === '') {
            setEthValue('0');
        }
        setSendUpdate(false);
    }

    const handleChange = (event) => {
        const value: string = event.target.value.split(',').join('');
        if (value.match(decimalNumberRegex) === null) {
            return;
        }
        setEthValue(formatDecimalNumber(value));
        setDollarValue(formatCurrency((+value * rate).toString()));
        if (sendUpdate) {
            props.change(+value);
        }
    }

    const handleFocus = () => {
        if (ethValue === '0') {
            setEthValue('');
        }
        setSendUpdate(true);
    }

    return (
        <Card color="neutral" variant="soft">
            <Typography fontSize={'12px'}>You pay</Typography>
            <Input
                onFocus={handleFocus}
                onChange={handleChange}
                onBlur={handleBlur}
                size="lg"
                startDecorator={<Button color="neutral" variant="soft" startDecorator={<Image alt="Ethereum logo" height={24} src={'/icons/ethereum_logo_icon.png'} width={24} />}>ETH</Button>}
                variant="soft"
                value={ethValue}
                sx={{
                    '& input': { textAlign: 'right' }
                }}
            />
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography fontSize={'12px'}>1 Eth = ~$ { formatCurrency(rate.toString()) }</Typography>
                <Typography fontSize={'12px'}>~$ { dollarValue }</Typography>
            </Stack>
        </Card>
    )
}