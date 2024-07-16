import { Stack, Typography } from "@mui/joy"
import { PartsLayout } from "../components/layouts/PartsLayout"
import { InputComponent } from "../components/forms/InputComponent"
import { useState } from "react"
import { TextComponent } from "../components/forms/TextComponent"
import { LargeButtonComponent } from "../components/forms/LargeButtonComponent"

export const ContactContainer = () => {
    const [ email, setEmail ] = useState<string>('');
    const [ message, setMessage ] = useState<string>('');
    const [ name, setName ] = useState<string>('');
    const [ success, setSuccess ] = useState<boolean>(false);
    const [ subject, setSubject ] = useState<string>('');

    const handleClear = () => {
        setEmail('');
        setMessage('');
        setName('');
        setSubject('');
    }

    const handleSubmit = async() => {
        await fetch('https://api.edifyq.com/contact', {
            method: 'POST',
            body: JSON.stringify({ email, name, subject, message }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        handleClear();
        setSuccess(true);
    }

    return (
        <PartsLayout color="default">
            <Stack gap={4} margin={'auto'} maxWidth={'800px'}>
                <Typography level="h2"  paddingTop={'12px'} textAlign={"center"}>Please use the form to contact us.</Typography>
                {success && <Typography color="success" level="h4"  textAlign={"center"}>Your message has been sent, we will get in touch with you as soon as possible.</Typography>}
                <InputComponent
                    change={(value: string) => setName(value)}
                    label="Name:"
                    value={ name }
                />
                <InputComponent
                    change={(value: string) => setEmail(value)}
                    label="Email:"
                    value={email}
                />
                <InputComponent
                    change={(value: string) => setSubject(value)}
                    label="Subject:"
                    value={subject}
                />
                <TextComponent
                    change={(value: string) => setMessage(value)}
                    label="Message:"
                    value={message}
                />
                <Stack direction={'row'} gap={8} marginBottom={'36px'}>
                    <LargeButtonComponent
                        click={handleClear}
                        color="warning"
                    >
                        Clear
                    </LargeButtonComponent>
                    <LargeButtonComponent
                        click={handleSubmit}
                        color="success"
                    >
                        Submit
                    </LargeButtonComponent>
                </Stack>
            </Stack>
        </PartsLayout>
    )
}
