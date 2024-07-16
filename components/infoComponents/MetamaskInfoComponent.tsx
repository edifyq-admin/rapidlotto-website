import { List, ListDivider, ListItem, Stack, Typography } from "@mui/joy";
import { PartsLayout } from "../layouts/PartsLayout";
import { MediumBoldFont } from "../texts/MediumBoldFont";

export const MetamaskInfoComponent = () => (
    <PartsLayout color="default">
        <Stack
                gap={4}
                margin={'auto'}
                maxWidth={'1200px'}
        >
            <List marker="disc" sx={{ marginTop: '24px'}}>
                <ListItem>
                    <Stack>
                        <MediumBoldFont>Go to the offical MetaMask website</MediumBoldFont>
                        <Typography>Instead of searching the web, type this address exactly in your browser: <a href="https://metamask.io" target="_blank"><b>metamask.io</b></a></Typography>
                    </Stack>
                </ListItem>
                <ListItem>
                    <Stack>
                        <MediumBoldFont>Click "Download Now"</MediumBoldFont>
                        <Typography>You'll see buttons for different browsers. Choose the one you use (e.g., Chrome, Firefox).</Typography>
                    </Stack>
                </ListItem>
                <ListItem>
                    <Stack>
                        <MediumBoldFont>Follow the on-screen instructions</MediumBoldFont>
                        <Typography>This will involve adding MetaMask as an extension to your browser. It's a similar process for all browsers.</Typography>
                    </Stack>
                </ListItem>
                <ListDivider sx={{ margin: '24px 0'}} />
                <ListItem>
                    <Stack>
                        <MediumBoldFont>Welcome screen</MediumBoldFont>
                        <Typography>Click "Get Started."</Typography>
                    </Stack>
                </ListItem>
                <ListItem>
                    <Stack>
                        <MediumBoldFont>Create a new wallet</MediumBoldFont>
                        <Typography>Choose "Create a Wallet."</Typography>
                    </Stack>
                </ListItem>
                <ListItem>
                    <Stack>
                        <MediumBoldFont>Password creation</MediumBoldFont>
                        <Typography>Create a strong password and write it down somewhere secure. Never share this password with anyone!</Typography>
                    </Stack>
                </ListItem>
                <ListItem>
                    <Stack>
                        <MediumBoldFont>Seed phrase</MediumBoldFont>
                        <Typography>You'll be shown a series of words. This is your secret recovery phrase. Write it down carefully and store it in a safe place offline. If you lose your password, you can recover your wallet using this phrase.</Typography>
                    </Stack>
                </ListItem>
                <ListDivider sx={{ margin: '24px 0'}} />
                <ListItem>
                    <Stack>
                        <MediumBoldFont>Open MetaMask</MediumBoldFont>
                        <Typography>Click on the MetaMask icon in your browser toolbar (usually looks like a fox).</Typography>
                    </Stack>
                </ListItem>
                <ListItem>
                    <Stack>
                        <MediumBoldFont>Click the network dropdown</MediumBoldFont>
                        <Typography>By default, it might say "Mainnet" or "Ethereum Mainnet." This is the main Ethereum network, which uses real cryptocurrency. We don't want that for Sepolia.</Typography>
                    </Stack>
                </ListItem>
                <ListItem>
                    <MediumBoldFont>Select "Settings"</MediumBoldFont>
                </ListItem>
                <ListItem>
                    <MediumBoldFont>Choose Networks</MediumBoldFont>
                </ListItem>
                <ListItem>
                    <MediumBoldFont>Click "Add Network"</MediumBoldFont>
                </ListItem>
                <ListItem>
                    <Stack>
                        <MediumBoldFont>Filling network details</MediumBoldFont>
                        <Typography>Here's the tricky bit. You'll need to enter some information for Sepolia.</Typography>
                        <List marker="circle">
                            <ListItem><b>Network Name:</b> Sepolia</ListItem>
                            <ListItem><b>New RPC Url:</b> https://sepolia.infura.io/v3</ListItem>
                            <ListItem><b>Chain ID:</b> 11155111</ListItem>
                            <ListItem><b>Sumbol:</b> SepoliaETH (You can leave this)</ListItem>
                            <ListItem><b>Block explorer URL:</b> https://sepolia.etherscan.io</ListItem>
                        </List>
                    </Stack>
                </ListItem>
                <ListItem>
                    <Stack>
                        <MediumBoldFont>Save the network</MediumBoldFont>
                        <Typography>Click "Save" at the bottom.</Typography>
                    </Stack>
                </ListItem>
            </List>
        </Stack>
    </PartsLayout>
)