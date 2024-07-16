import { Typography } from "@mui/joy";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    color?: 'danger' | 'neutral' | 'success'
}

export const ExtraLargeBoldFont = ({ children, color }: Props) => (
    <Typography color={color || 'neutral'} level="title-lg" sx={{ fontSize: '48px'}} >
        { children }
    </Typography>
);
