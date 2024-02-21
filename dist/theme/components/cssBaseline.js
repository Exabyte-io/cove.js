// Used to make scrollbars dark in dark mode per https://mui.com/material-ui/react-css-baseline/#scrollbars
import { darkScrollbar } from "@mui/material";
// Otherwise, b/c the Dialogs are appended to the body, they will have light scrollbars in dark mode
const cssBaseline = () => ({
    MuiCssBaseline: {
        styleOverrides: (themeParam) => ({
            body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
        }),
    },
});
export default cssBaseline;
