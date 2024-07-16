import { Input, Stack, Typography } from "@mui/joy"
import { useEffect, useState } from "react"

type Props = {
    change: (value: string) => void;
    label: string;
    value: string;
}

export const InputComponent = (props: Props) => {
    const [ value, setValue ] = useState<string>(props.value);

    useEffect(() => {
        setValue(props.value);
    }, [ props.value ]);

    return (
        <Stack direction={{ xs: 'column', md: 'row'}} gap={{ xs: 1, md: 4}}>
            <Typography margin={'auto 0'}>{ props.label }</Typography>
            <Input
                onChange={(event) => props.change(event.target.value)}
                fullWidth
                value={value}
            />
        </Stack>
    )
}