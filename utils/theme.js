import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        // Yellow
        primary: {
            dark: '#B28A00',
            main: '#FFC600',
            light: '#FFD133',
            contrastText: '#1D1D1D',
        },
        // Black
        secondary: {
            main: '#212121',
        },
        green: {
            dark: '#388E3C',
            main: '#21B04B',
            light: '#81C784',
        },
        background: {
            main: '#F4F4F4',
        },
    },
    typography: {
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
    },
});
