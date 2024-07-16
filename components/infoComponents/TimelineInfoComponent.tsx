import { Box, Stack, Typography } from "@mui/joy"
import { PartsLayout } from "../layouts/PartsLayout"
import { ReactNode } from "react";

export type DateProps = {
    day: string;
    month: string;
    year: string;
}

type TimelineArticleProps = {
    articleColor: string;
    backgroundColor: string;
    color: string;
    content: string;
    date: DateProps;
    heading: string;
    left: boolean;
}

type TimelineDateProps = {
    backgroundColor: string;
    color: string;
    date: DateProps;
}

type TimelineDescriptionProps = {
    articleColor: string;
    content: string
}

type TimelineHeadingProps = {
    articleColor: string;
    heading: string;
    left: boolean;
};

type TimelineProps = {
    backgroundColor: string;
    children: ReactNode;
    timelineColor: string;
};

const data = [
    {
        articleColor: '#2ecc71',
        date: {
            day: '20',
            month: 'May',
            year: '2024'
        },
        content: '<b>RapidLotto is now live on the Sepolia network,</b> a public test environment for blockchain enthusiasts. This means anyone can participate in trying out RapidLotto and experiencing its innovative lottery system.<br/><br/><a href="/rapidLotto" class="link-decoration">Click here to play</a>',
        heading: 'RapidLotto on Sepolia',
    }, {
        articleColor: '#2ecc71',
        date: {
            day: '28',
            month: 'July',
            year: '2024'
        },
        content: '<b>The DAO token will be deployed on the Ethereum network on the 5th of June.</b> Once the token is deployed, it will be available for purchase directly on our website. This will be your chance to become a part of the RapidLotto community and shape its future.',
        heading: 'Deploying the DAO token',
    }, {
        articleColor: '#25303b',
        date: {
            day: '26',
            month: 'July',
            year: '2024'
        },
        content: '<b>Presale complete</b> We will complete your pre-sale and deploy an exchange for the trading of the Edifyq Gaming Token. This will help token holders that does not want to be part of the DAO to sell their tokens for Eth.',
        heading: 'Complete token presale',
    }, {
        articleColor: '#e67e22',
        date: {
            day: '29',
            month: 'Aug',
            year: '2024'
        },
        content: '<b>We will establish a new gaming entity in a jurisdiction known for its favorable tax treatment of the gaming and cryptocurrency industries.</b> This move will provide us with a reduced tax burden and streamlined crypto regulatory framework. We are currently evaluating various jurisdictions to determine the optimal location for our new subsidiary.',
        heading: 'Register gaming concern',
    }, {
        articleColor: '#e74c3c',
        date: {
            day: '29',
            month: 'Sept',
            year: '2024'
        },
        content: '<b>The game controller that picks the winners will be deployed to an Oracle.</b> This will be done to put the game controller in the public domain where any player or non-player can audit the game to make sure that the game is free from any influence.',
        heading: 'Deploy controller to Oracle',
    }, {
        articleColor: '#e74c3c',
        date: {
            day: '19',
            month: 'Oct',
            year: '2024'
        },
        content: 'The DAO launch signifies the culmination of our legal groundwork. The offshore entity, will hold the private keys controlling the DAO\'s and the RapidLotto smart contract. <b>Following the launch, our platform will facilitate secondary market trading for the DAO token.</b> This means token holders will gain the ability to sell their tokens to other interested participants, fostering a liquid market for the DAO token.',
        heading: 'Launch the DAO',
    }, {
        articleColor: '#e74c3c',
        date: {
            day: '26',
            month: 'Oct',
            year: '2024'
        },
        content: 'The official launch of RapidLotto is scheduled for October 2024. This marks the beginning of game operations, allowing users to participate in RapidLotto\'s lottery system. Payouts will be distributed after 1,500 tickets are sold according to the established game rules. To prioritize price stability and reduce transaction volatility, we intend to utilize an established stablecoin as the primary currency for RapidLotto.',
        heading: 'Launch RapidLotto to the Mainnet',
    }
];

const Article = ({ children }: { children: ReactNode }) => (
    <Box
      margin={'0 0 20px 0'}
      position={'relative'}
      width={'100%'}
      sx={{
        '&:after': {
          clear: 'both',
          content: '""',
          display: 'block'
        }
      }}
    >
      { children }
    </Box>
);

const BlockEntry = ({ children, left }: { children: ReactNode, left: boolean }) => (
    <Box
      borderRadius={'6px'}
      margin={'5px 0 0 0'}
      width={{ xs: '40%', md: '43%'}}
      sx={{
        float: left ? 'left' : 'right'
      }}
    >
      { children }
    </Box>
);

const MediumFont = ({ children, color }: { children: ReactNode, color: string }) => (
    <Typography
        component={'span'}
        fontSize={'18px'}
        sx={{ color: color }}
    >
        { children }
    </Typography>
);

const SmallFont = ({ children, color }: { children: ReactNode, color: string }) => (
    <Typography
        component={'span'}
        fontSize={'10px'}
        sx={{ color: color}}
    >
        { children }
    </Typography>
);

const TimelineArticle = (props: TimelineArticleProps) => (
    <Article>
        <BlockEntry { ...props }>
            <TimelineDate { ...props } />
            <TimelineHeading { ...props } />
            <TimelineDescription { ...props } />
        </BlockEntry>
    </Article>
);

const TimelineDescription = (props: TimelineDescriptionProps) => {
    
    return (
        <Box
            bgcolor={'#fff'}
            border={`2px solid ${props.articleColor}`}
            borderRadius={'0 0 6px 6px'}
            component={'div'}
            dangerouslySetInnerHTML={{ __html: props.content}}
            fontSize={'14px'}
            margin={0}
            padding={'15px'}
            sx={{
                color: '#656565',
            }}
        />
)};

const TimelineDate = (props: TimelineDateProps) => (
    <Box
      component={'span'}
    >
        <Box
            bgcolor={props.backgroundColor}
            border={`2px solid ${props.color}`}
            borderRadius={'100%'}
            boxShadow={`0 0 0 7px ${props.backgroundColor}`}
            display={'block'}
            fontWeight={'900'}
            height={'80px'}
            left={'50%'}
            margin={'0 0 0 -36px'}
            padding={'7px 0'}
            position={'absolute'}
            textAlign={'center'}
            textTransform={'uppercase'}
            top={0}
            width={'70px'}
        >
            <SmallFont color={props.color}>&nbsp;</SmallFont>
            <MediumFont color={props.color}>{props.date.month}</MediumFont>
            <SmallFont color={props.color}>{props.date.year}</SmallFont>
        </Box>
    </Box>
)

const TimelineHeading = (props: TimelineHeadingProps) => (
    <>
        {props.left && <TitleLeft { ...props }>{props.heading}</TitleLeft>}
        {!props.left && <TitleRight { ...props }>{props.heading}</TitleRight>}
    </>
)

const TimelineLayout = (props: TimelineProps) => (
    <Box
      bgcolor={props.backgroundColor}
      fontFamily={'Helvetica, sans-serif'}
      margin={'20px auto'}
      position={'relative'}
      width={'80%'}
      sx={{
        '&:before': {
          background: props.timelineColor,
          content: '""',
          display: 'block',
          height: '100%',
          left: '50%',
          margin: '0 0 0 -2px',
          position: 'absolute',
          top: 0,
          width: '4px'
        }
      }}
    >{ props.children }</Box>
)

const TitleLeft = ({ articleColor, children }: { articleColor: string, children: ReactNode }) => (
    <Typography
      bgcolor={articleColor}
      borderRadius={'6px 6px 0 0'}
      fontSize={'20px'}
      fontWeight={900}
      margin={0}
      padding={'15px'}
      position={'relative'}
      textTransform={'uppercase'}
      sx={{
        color: '#fff',
        '&:after': {
          background: articleColor,
          content: '""',
          height: '10px',
          position: 'absolute',
          right: '-5px',
          top: '26px',
          width: '10px',
          '-webkit-transform': 'rotate(-45deg)'
        }
      }}
    >{children}</Typography>
);

const TitleRight = ({ articleColor, children }: { articleColor: string, children: ReactNode }) => (
    <Typography
      bgcolor={articleColor}
      borderRadius={'6px 6px 0 0'}
      fontSize={'20px'}
      fontWeight={900}
      margin={0}
      padding={'15px'}
      position={'relative'}
      textTransform={'uppercase'}
      sx={{
        color: '#fff',
        '&:after': {
          background: articleColor,
          content: '""',
          height: '10px',
          position: 'absolute',
          left: '-5px',
          top: '26px',
          width: '10px',
          '-webkit-transform': 'rotate(-45deg)'
        }
      }}
    >{children}</Typography>
);

const backgroundColor = '#fff';
const timelineColor = '#25303b';

const formatDate = (day: string) => {
    return (
        <>
            { day }<sup>{
                day === '1' || day === '21' || day === '31' ? 'st' :
                day === '2' || day === '22' ? 'nd' :
                day === '3' || day === '23' ? 'rd' : 'th'}</sup>
        </>
    )
}

export const TimelineInfoComponent = () => {
    return (
        <PartsLayout color="light">
            <Stack margin={'auto'}>
                <Typography fontSize={'28px'} level="title-lg" margin={'8px auto'} padding={'8px'}>RapidLotto Roadmap</Typography>
                <TimelineLayout
                    backgroundColor={backgroundColor}
                    timelineColor={timelineColor}
                >
                    {data && data.map((item, index) => (
                        <TimelineArticle
                            backgroundColor={backgroundColor}
                            color={timelineColor}
                            left={index % 2 === 0}
                            key={item.heading}
                            { ...item}
                        />
                    ))}
                </TimelineLayout>
            </Stack>
        </PartsLayout>
    )
}
