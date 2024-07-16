import { Typography } from "@mui/joy";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    color?: 'neutral' | 'success' | 'warning'
}
export const MediumBoldFont = ({ children, color }: Props) => (
    <Typography
        color={color || 'neutral'}
        level="body-md"
        sx={{
            fontWeight: 700
        }}
    >
        { children }        
    </Typography>
);
