import { Button, Card, Input, Stack, Typography } from "@mui/joy"
import Image from "next/image"
import { useEffect, useState } from "react";
import { numberRegex } from "../../utils/validations";

type Props = {
    change: (value: number) => void;
    tokens: number;
    value: number;
}

export const EgtExchangeComponent = (props: Props) => {

    const [ egtValue, setEgtValue ] = useState<string>('0');
    const [ sendUpdates, setSendUpdates ] = useState<boolean>(false);
    const [ tokens, setTokens ] = useState<number>(0);

    useEffect(() => {
        setTokens(props.tokens);
        if (!sendUpdates) {
            setEgtValue(props.value.toLocaleString());
        }
    }, [ props ]);

    const handleBlur = () => {
        if (egtValue === '') {
            setEgtValue('0');
        }
        setSendUpdates(false);
    }

    const handleChange = (event) => {
        const value: string = event.target.value.split(',').join('');
        if (value.match(numberRegex) === null) {
            return;
        }
        setEgtValue((+value).toLocaleString());
        if (sendUpdates) {
            props.change(+value);
        }
    }

    const handleFocus = () => {
        if (egtValue === '0') {
            setEgtValue('');
        }
        setSendUpdates(true);
    }

    return (
        <Card color="neutral" variant="outlined">
        <Typography fontSize={'12px'}>You receive</Typography>
        <Input
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            size="lg"
            startDecorator={<Button color="neutral" variant="plain" startDecorator={<Image alt="Ethereum logo" height={24} src={'/icons/egt_small_logo.png'} width={24} />}>$EGT</Button>}
            variant="plain"
            value={egtValue}
            sx={{
                '& input': { textAlign: 'right' }
            }}
        />
        <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography fontSize={'12px'}>Edifyq Gaming Token</Typography>
            <Typography fontSize={'12px'}>Available Tokens: { tokens.toLocaleString() }</Typography>
        </Stack>
    </Card>

    )
}
