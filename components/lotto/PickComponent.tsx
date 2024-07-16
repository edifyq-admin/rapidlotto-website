import { Box, Typography } from "@mui/joy";

type PickProps = {
    click: (index: number) => void;
    disabled: boolean;
    pick: number;
    selected: boolean;
}

export const PickComponent = ({click, disabled, pick, selected}: PickProps) => {

    const backgroundColor = (disabled: boolean, selected: boolean) => {
        if (disabled && selected) {
            return '#8b9b8b';
        }
        return disabled ? '#dedede' : selected ? 'green' : '#fff';
    }
    
    return (
        <Box
            onClick={() => click(pick - 1)}
            sx={{
                border: '1px solid #ccc',
                cursor: 'pointer',
                height: {md: '80px', xs: '60px'},
                width: {md: '100px', xs: '60px'},
                bgcolor: backgroundColor(disabled, selected),
                borderRadius: '8px',
            }}
        >
            <Typography
                level="h2"
                component="div"
                sx={{
                    color: selected ? 'white' : 'black',
                    padding: '20% 0',
                    textAlign: 'center'
                }}
            >
                { pick }
            </Typography>
        </Box>
    )
}
