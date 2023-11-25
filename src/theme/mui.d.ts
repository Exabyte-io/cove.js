// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette, PaletteColor, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Theme {
        iconDefaultFontSize: number;
    }

    interface Palette {
        border: PaletteColor;
        neutral: PaletteColor;
    }
}

declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        neutral: true;
    }
}

declare module "@mui/material/IconButton" {
    interface IconButtonPropsColorOverrides {
        neutral: true;
    }
}
