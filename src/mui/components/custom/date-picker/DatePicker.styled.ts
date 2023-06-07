import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Popover from "@mui/material/Popover";
import { styled, Theme } from "@mui/material/styles";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";

export const DatePickerButtonsContainer = styled("div")(({ theme }: { theme: Theme }) => ({
    display: "flex",
    flexDirection: "row",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "4px",
    color: theme.palette.primary.main,
    height: "32.5px",

    "div:first-child": {
        borderLeft: "none",

        span: {
            margin: "0 5px 0 10px",
        },
    },

    div: {
        borderLeft: `1px solid ${theme.palette.primary.main}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 10px",
        cursor: "pointer",

        "&:hover": {
            backgroundColor: "rgba(16, 86, 190, 0.04)",
        },

        "&.active": {
            backgroundColor: theme.palette.primary.main,
            color: "white",
        },
    },
}));

export const StyledPopover = styled(Popover)(() => ({
    ".MuiPaper-root": {
        width: 286,
        display: "flex",
        flexDirection: "column",
        padding: 10,

        ".MuiTextField-root": {
            marginTop: 15,
        },

        ".done-button-container": {
            marginTop: 10,
        },
    },
}));

export const StyledDatePicker = styled(MuiDatePicker)(() => ({
    ".MuiInputBase-root": {
        fieldset: {
            border: "none",
            borderRadius: 0,
            borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
        },
    },
}));

export const StyledDatePickerContainer = styled("div")(({ theme }) => ({
    ".date-picker-buttons": {
        display: "flex",
        flexDirection: "row",
        border: `1px solid ${theme.palette.primary.dark}`,
        borderRadius: 4,
        color: theme.palette.primary.dark,
        width: 286,
        height: 32.5,

        div: {
            borderLeft: `1px solid ${theme.palette.primary.dark}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 10px",
            cursor: "pointer",

            "&:hover": {
                backgroundColor: "rgba(16, 86, 190, 0.04)",
            },

            "&.active": {
                backgroundColor: theme.palette.primary.dark,
                color: "white",
            },
        },

        "div:first-of-type": {
            borderLeft: "none",

            span: {
                margin: "0 5px 0 10px",
            },
        },
    },
}));
