import { Button } from "@mui/joy"
import { ReactNode } from "react"

type Props = {
    children: ReactNode;
    click: () => void;
    color?: 'danger' | 'primary' | 'success' | 'warning';
}

export const LargeButtonComponent = (props: Props) => {
    return (
        <Button
            color={props.color || 'primary'}
            fullWidth
            onClick={props.click}
            size="lg"
        >
            { props.children }
        </Button>
    )
}
