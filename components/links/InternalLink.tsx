import { Link } from "@mui/joy";
import { ReactNode } from "react";

type LinkProps = {
    center?: boolean;
}

type Props = {
    center?: boolean;
    children: ReactNode;
    url: string;
}

const InternalLink = (props: Props) => (
    <Link
        alignSelf={props.center ? 'center' : 'inherit'}
        fontWeight={600}
        href={props.url}
        underline="hover"
        sx={{
            color: '#222'
        }}
    >
        { props.children }
    </Link>
)

export const ContactLink = (props: LinkProps) => (
    <InternalLink
        url="/contact"
        { ...props }
    >
        Contact Us
    </InternalLink>
);

export const ExchangeLink = (props: LinkProps) => (
    <InternalLink
        url="/exchange"
        { ...props }
    >
            Buy DAO Tokens
    </InternalLink>
);

export const MetamaskLink = (props: LinkProps) => (
    <InternalLink
        url="/metamask"
        { ...props }
    >
        Install Metamask
    </InternalLink>
)

export const RapidLottoLink = (props: LinkProps) => (
    <InternalLink
        url="/rapidlotto"
        { ...props }
    >
        Play Rapid Lotto
    </InternalLink>
);
