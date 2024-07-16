import { ReactNode } from "react";

import '@fontsource/inter';
import { Stack } from "@mui/joy";
import { FooterComponent } from "../components/headers/footerComponent";
import { HeaderContainer } from "../containers/HeaderContainer";

export default function Template({children}: {children: ReactNode}) {
    return (
        <Stack color={'blue'}>
            <HeaderContainer />
            { children }
            <FooterComponent />
        </Stack>
    )
}
