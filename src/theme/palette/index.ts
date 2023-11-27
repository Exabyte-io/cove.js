// Note: https://bareynol.github.io/mui-theme-creator/#Dialog can be used to preview theme changes

const primaryColorConfig = {
    main: "#5b37c0",
    // To be better readable on dark backgrounds
    lighter: "#7c5fcd",
};

const secondaryColorConfig = {
    main: "#757575",
};

const primaryAndSecondaryColorOptionsLight = {
    primary: {
        main: primaryColorConfig.main,
    },
    secondary: {
        main: secondaryColorConfig.main,
    },
};
const primaryAndSecondaryColorOptionsDark = {
    primary: {
        main: primaryColorConfig.lighter,
    },
    secondary: {
        main: secondaryColorConfig.main,
    },
};
const otherColorOptions = {
    success: {
        main: "#72E128",
        dark: "#64C623",
        light: "#83E542",
        contrastText: "#FFFFFF",
    },
    error: {
        main: "#D32F2F",
        dark: "#C62828",
        light: "#EF5350",
        contrastText: "rgba(0, 0, 0, 0.23)",
    },
    warning: {
        main: "#ED6C02",
        dark: "#E65100",
        light: "#FF9800",
        contrastText: "#FFFFFF",
    },
    info: {
        main: "#0288D1",
        dark: "#01579B",
        light: "#03A9F4",
        contrastText: "rgba(0, 0, 0, 0.23)",
    },
    text: {
        primary: "rgba(37, 39, 60, 0.87)",
        secondary: "rgba(76, 78, 100, 0.6)",
        disabled: "rgba(76, 78, 100, 0.38)",
    },
    action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        selected: "rgba(0, 0, 0, 0.08)",
        disabled: "rgba(0, 0, 0, 0.12)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        focus: "rgba(0, 0, 0, 0.12)",
    },
    unitTypes: {
        execution: "#0288D1",
        condition: "#00BFA5",
        assignment: "#ff9800",
        assertion: "#BE134D",
    },
    background: {
        paper: "#FFFFFF",
        default: "#edecec",
    },
    border: {
        main: "#F4F4F4",
        dark: "#e0e0e0",
    },
    icon: {
        main: "#555555",
        light: "#ADADAD",
    },
};

export const paletteLight = {
    type: "light",
    ...otherColorOptions,
    ...primaryAndSecondaryColorOptionsLight,
};

export const paletteDark = {
    type: "dark",
    ...otherColorOptions,
    ...primaryAndSecondaryColorOptionsDark,
};
