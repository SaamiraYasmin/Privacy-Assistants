import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
        main: "#F8F8F8",
        culture: "#F3F3F3",
        dark: "#2D3047",
        grey: "#545454",
    },
    blue: {
        light: "#1985A1",
        dark: "#227C9D"
    },
    red: {
        main: "#A63737"
    }
  },
  typography: {
    fontFamily: `'Manrope', sans-serif`,
    fontSize: 14,
  },
}));

export default theme;