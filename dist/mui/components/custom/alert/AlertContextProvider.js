/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import React, { createContext, memo, useCallback, useState } from "react";
export const AlertContext = createContext(null);
const defaultSnackbarProps = {
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
    },
    autoHideDuration: 3000,
};
const defaultAlertProps = {
    content: "Success Alert",
    severity: "success",
    variant: "filled",
};
// eslint-disable-next-line react/prop-types
function AlertProvider({ children }) {
    const [isAlertShown, setShownAlert] = useState(false);
    const [snackbarProps, setSnackbarProps] = useState(defaultSnackbarProps);
    const [alertProps, setAlertProps] = useState(defaultAlertProps);
    const showAlert = useCallback((alertProps, snackbarProps) => {
        if (alertProps)
            setAlertProps((prev) => ({ ...prev, ...alertProps }));
        if (snackbarProps)
            setSnackbarProps((prev) => ({ ...prev, ...snackbarProps }));
        setShownAlert(true);
    }, []);
    const closeAlert = useCallback(() => {
        setShownAlert(false);
    }, []);
    const { content, severity, variant, ...restAlertProps } = alertProps;
    /* eslint-disable react/jsx-no-constructed-context-values */
    return (React.createElement(AlertContext.Provider, { value: { show: showAlert } },
        children,
        React.createElement(Snackbar, { ...snackbarProps, open: isAlertShown, onClose: closeAlert },
            React.createElement(Alert, { onClose: closeAlert, variant: variant, severity: severity, ...restAlertProps },
                React.createElement(AlertTitle, null, severity),
                content))));
    /* eslint-enable react/jsx-no-constructed-context-values */
}
export const AlertContextProvider = memo(AlertProvider);
