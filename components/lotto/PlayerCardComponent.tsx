import { Box, Button, Card, Stack, Typography } from "@mui/joy"
import { useEffect, useState } from "react";
import { PickComponent } from "./PickComponent";

type CardNumbers = {
    pick: number;
    selected: boolean;
}

type PlayerProps = {
    buyTokens: () => void;
    clear: boolean;
    submit: (picks: number[]) => void;
    tokenBalance: number;
}

const setSelected = (picks: number[]) => {
    return [ ...Array(15).keys()].map(item => ({ pick: item + 1, selected: picks.indexOf(item + 1) > -1}));
}

export const PlayerCardComponent = (props: PlayerProps) => {

    const [ disabled, setDisabled ] = useState<boolean>(false);
    const [ numbers, setNumbers ] = useState<CardNumbers[]>([]);
    const [ tokenBalance, setTokenBalance ] = useState<number>(10);

    useEffect(() => {
        setNumbers(setSelected([]));
    }, []);

    useEffect(() => {
        if (props.clear === true) {
            setDisabled(false);
            setNumbers(setSelected([]));
        } 
    }, [ props.clear ]);

    useEffect(() => {
        setTokenBalance(props.tokenBalance);
    }, [ props.tokenBalance ])

    const handleClick = (value: number) => {
        const array = JSON.parse(JSON.stringify(numbers));
        if (disabled && array[value].selected === true) {
            array[value].selected = false;
        } else if (!disabled) {
            array[value].selected = !array[value].selected;
        }
        setNumbers(array);
        setDisabled(array.filter((item: CardNumbers) => item.selected).length > 4);
    }

    const handleSubmit = () => {
        const array = JSON.parse(JSON.stringify(numbers));
        props.submit(array.filter((item: CardNumbers) => item.selected).map((item: CardNumbers) => item.pick));
    }

    return (
        <Card color="neutral" variant="soft">
            <Stack gap={4}>
                <Typography fontSize={'20px'} fontWeight={600} textAlign={'center'}>Balance: {tokenBalance.toLocaleString()} tokens</Typography>
                {tokenBalance < 1 && (<Stack direction={'row'} justifyContent={"space-around"}>
                    <Button
                        color="success"
                        disabled={tokenBalance >= 1}
                        size="lg"
                        onClick={props.buyTokens}
                    >Get 10 tokens</Button>
                </Stack>)}
                <Box margin={'auto'}>
                    <Stack gap={2}>
                        <Stack direction={'row'} gap={2}>
                            {[ ...Array(5).keys()].map(index => <PickComponent key={index} { ...numbers[index]} click={handleClick} disabled={disabled} />)}
                        </Stack>
                        <Stack direction={'row'} gap={2}>
                            {[ ...Array(5).keys()].map(index => <PickComponent key={index + 5} { ...numbers[index + 5]} click={handleClick} disabled={disabled} />)}
                        </Stack>
                        <Stack direction={'row'} gap={2}>
                            {[ ...Array(5).keys()].map(index => <PickComponent key={index + 10} { ...numbers[index + 10]} click={handleClick} disabled={disabled} />)}
                        </Stack>
                    </Stack>
                </Box>
                <Button
                    color="success"
                    disabled={!disabled}
                    onClick={handleSubmit}
                    size="lg"
                >
                    Buy ticket
                </Button>
            </Stack>
        </Card>
    )
}
