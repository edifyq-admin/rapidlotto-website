import { Card, Input, Typography } from "@mui/joy"
import { useEffect, useState } from "react"
import { emailRegex } from "../../utils/validations";

type Props = {
    change: (value: string) => void;
    email: string;
}

export const EmailComponent = (props: Props) => {

    const [ email, setEmail ] = useState<string>('');
    const [ error, setError ] = useState<boolean>(false);

    useEffect(() => {
        setEmail(props.email);
    }, [ props.email ]);

    const handleValidation = () => {
        if (email === '') {
            setError(false);
            return;
        }
        if (!email.match(emailRegex)) {
            setError(true);
            return;
        }
        setError(false);
        props.change(email);
    }

    return (
        <Card color="neutral" variant="outlined">
            <Typography fontSize={'12px'}>Your email</Typography>
            <Input
                onBlur={handleValidation}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email address"
                size="lg"
                variant="plain"
                value={email}
            />
            {error && <Typography color="danger" fontSize={'12px'} fontWeight={700}>Please enter a valid email address</Typography>}
            <Typography color="warning" fontSize={'12px'}>The email address is optional and we only use it to notify you of upcoming votes. It is not associated with your account.</Typography>
        </Card>
    )
}
