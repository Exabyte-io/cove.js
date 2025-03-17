import { Theme } from "@mui/material/styles";

import { type CommonSettings } from "../theme";

export const typography = (
    theme: Theme,
    commonSettings: CommonSettings,
): Partial<Theme["typography"]> => {
    return {
        fontFamily: commonSettings.fonts.roboto,
        subtitle2: {
            color: theme.palette.text.secondary,
        },
        body2: {
            color: theme.palette.text.secondary,
        },
        caption: {
            color: theme.palette.text.secondary,
        },
        subtitle1: {
            color: theme.palette.text.secondary,
            fontSize: 12,
        },
    };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MDTypography = (
    theme: Theme,
    commonSettings: CommonSettings,
): Partial<Theme["typography"]> => {
    return {
        fontFamily: commonSettings.fonts.roboto,
        body1: {
            fontSize: 12,
        },
    };
};
