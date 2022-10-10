import {red} from '@mui/material/colors';
import {createTheme} from '@mui/material';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#7615ab',
        },
        secondary: {
            main: '#d909c4',
        },
        error: {
            main: red.A400,
        },
        text: {
            secondary: '#d36eff',
        },
        background: {
            default: "linear-gradient(to bottom right, #000000, #923CB5)"
        }
    }
});

export default theme;