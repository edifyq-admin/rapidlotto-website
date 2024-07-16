import { Stack, Textarea, Typography } from "@mui/joy"
import { useEffect, useState } from "react";

type Props = {
    change: (value: string) => void;
    label: string;
    value: string;
}

export const TextComponent = (props: Props) => {
    const [ value, setValue ] = useState<string>('');

    useEffect(() => {
        setValue(props.value);
    }, [ props.value ]);

    return (
        <Stack direction={'column'} gap={1}>
            <Typography>{ props.label }</Typography>
            <Textarea
                onChange={(event) => props.change(event.target.value)}
                minRows={6}
                value={value}
            />
        </Stack>
    )
}
