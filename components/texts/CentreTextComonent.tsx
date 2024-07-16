import { Typography } from "@mui/joy";
import { ReactNode } from "react";

export const CentreText = ({ children }: { children: ReactNode }) => (
    <Typography fontSize={'18px'} fontWeight={500} textAlign={'center'}>{children}</Typography>
)
