import { Typography } from "@mui/joy";

type NumberComponentProps = {
    click: (value: number) => void;
    backgroundColor: string;
    color: string;
    fontSize?: string;
    height?: string;
    pick: number;
    width?: string;
}

export const NumberComponent = ({
    click, color, backgroundColor, fontSize='34px', height='60px', pick, width='60px'
}: NumberComponentProps) => {
    return (
        <Typography
        key={`pick_${pick}`}
        level='body-lg'
        onClick={() => click(pick)}
        sx={{
            backgroundColor: `${backgroundColor}`,
            border: '1px solid #ccc',
            borderRadius: '50%',
            color: `${color}`,
            cursor: 'pointer',
            fontSize: `${fontSize}`,
            fontWeight: 800,
            height: `${height}`,
            margin: 'auto',
            paddingTop: '6px',
            textAlign: 'center',
            width: `${width}`
        }}
    >{ pick }</Typography>
    )
}

export const SmallNumberComponent = (props: NumberComponentProps) => {
    return <NumberComponent fontSize="20px" height="40px" width="46px" { ...props} />
}
