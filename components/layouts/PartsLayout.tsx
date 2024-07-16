import { Sheet } from "@mui/joy"
import { ReactNode } from "react"

type Props = {
    accent?: boolean;
    children: ReactNode;
    color: 'container' | 'default' | 'info' | 'header' | 'light';
}

const colorMap = {
    container: '#364675',
    default: '#efefef',
    info: '#b7cbde59',
    header: '#c8d3e3',
    light: '#fff'
}

export const PartsLayout = (props: Props) => {
    return (
        <Sheet
            sx={{
                backgroundColor: colorMap[props.color],
                color: props.accent ? '#fff' : '#000',
                padding: '16px'
            }}
        >
            {props.children}
        </Sheet>
    )
}
