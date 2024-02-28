/* eslint-disable react/jsx-props-no-spreading */
import Alert from "@mui/material/Alert";
import { makeStyles } from "@mui/styles";
import { SnackbarContent, SnackbarProvider, useSnackbar } from "notistack";
import React, { forwardRef } from "react";
const useStyles = makeStyles({
    root: {
        maxWidth: "500px",
    },
});
const customBasicAlert = forwardRef(({ id, variant, ...props }, ref) => {
    const { closeSnackbar } = useSnackbar();
    const mappedVariant = variant === "default" ? "info" : variant;
    return (React.createElement(SnackbarContent, { ref: ref },
        React.createElement(Alert, { severity: mappedVariant, className: `alert alert-${mappedVariant}`, onClose: () => closeSnackbar(id), variant: "filled" }, props.message)));
});
export function AlertProvider({ children }) {
    const classes = useStyles();
    return (React.createElement(SnackbarProvider, { maxSnack: 3, autoHideDuration: 4000, Components: {
            error: customBasicAlert,
            warning: customBasicAlert,
            info: customBasicAlert,
            success: customBasicAlert,
            default: customBasicAlert,
        }, anchorOrigin: { vertical: "bottom", horizontal: "right" }, classes: { containerRoot: classes.root } }, children));
}
