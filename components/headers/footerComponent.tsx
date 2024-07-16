import { Box, Stack, Typography } from "@mui/joy"
import { PartsLayout } from "../layouts/PartsLayout"
import { GamingTokenEtherScan, VendorEtherScan } from "../links/ExternalLink"
import { ContactLink, ExchangeLink, RapidLottoLink } from "../links/InternalLink"

const Spacer = () => <Typography display={{ xs: 'none', md: 'block'}}>|</Typography>;

export const FooterComponent = () => {
    return (
        <PartsLayout color="default">
            <Stack gap={4} marginBottom={'160px'} marginTop={'16px'}>
                <Stack>
                    <Box textAlign={'center'}>
                        <GamingTokenEtherScan />
                        <br />
                        <VendorEtherScan />
                    </Box>
                </Stack>
                <Stack direction={{ xs: 'column', md: 'row'}} gap={{ xs: 4, md: 8}} justifyContent={'center'} textAlign={'center'}>
                    <RapidLottoLink center />
                    <Spacer />
                    <ExchangeLink center />
                    <Spacer />
                    <ContactLink center />
                </Stack>
                <Typography alignSelf={'center'}>Edifyq @2024</Typography>
            </Stack>
        </PartsLayout>
    )
}
