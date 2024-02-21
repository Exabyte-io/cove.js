import { Theme } from "@mui/material/styles";
declare const cssBaseline: () => {
    MuiCssBaseline: {
        styleOverrides: (themeParam: Theme) => {
            body: {
                scrollbarColor: string;
                '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                    backgroundColor: string;
                };
                '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                    borderRadius: number;
                    backgroundColor: string;
                    minHeight: number;
                    border: string;
                };
                '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
                    backgroundColor: string;
                };
                '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
                    backgroundColor: string;
                };
                '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: string;
                };
                '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
                    backgroundColor: string;
                };
            } | null;
        };
    };
};
export default cssBaseline;
