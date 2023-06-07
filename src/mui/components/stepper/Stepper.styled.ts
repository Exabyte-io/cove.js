import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/styles";

export const StyledConnector = styled(StepConnector)(({ theme }: { theme: Theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 24,
        left: "calc(-50% + 25px)",
        right: "calc(50% + 25px)",
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: theme.palette.primary.dark,

            "&::after": {
                backgroundColor: theme.palette.primary.dark,
            },
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: theme.palette.primary.dark,

            "&::after": {
                backgroundColor: theme.palette.primary.dark,
            },
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 2,
        border: 0,
        backgroundColor: theme.palette.border.dark,

        "&::after": {
            position: "absolute",
            right: "-3px",
            top: "-2px",
            display: "block",
            content: '""',
            width: "6px",
            height: "6px",
            backgroundColor: theme.palette.border.dark,
            borderRadius: "50%",
        },
    },
}));

export const StepMsg = styled(Typography)(() => ({
    marginTop: "15px",
}));
