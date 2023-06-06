/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import Alert, { AlertProps } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar, { SnackbarProps } from "@mui/material/Snackbar";
import React, { createContext, memo, useCallback, useState } from "react";

export type ExtendedAlertProps = AlertProps & { content: string };

export const AlertContext = createContext<{
    show: (alertProps: ExtendedAlertProps, snackbarProps?: SnackbarProps) => void;
} | null>(null);

const defaultSnackbarProps: SnackbarProps = {
    anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
    },
    autoHideDuration: 3000,
};

const defaultAlertProps: ExtendedAlertProps = {
    content: "Success Alert",
    severity: "success",
    variant: "filled",
};

export interface AlertProvider {
    children: React.ReactNode;
}

// eslint-disable-next-line react/prop-types
function AlertProvider({ children }: AlertProvider) {
    const [isAlertShown, setShownAlert] = useState(false);
    const [snackbarProps, setSnackbarProps] = useState<SnackbarProps>(defaultSnackbarProps);
    const [alertProps, setAlertProps] = useState<ExtendedAlertProps>(defaultAlertProps);

    const showAlert = useCallback(
        (alertProps: ExtendedAlertProps, snackbarProps?: SnackbarProps) => {
            if (alertProps) setAlertProps((prev) => ({ ...prev, ...alertProps }));
            if (snackbarProps) setSnackbarProps((prev) => ({ ...prev, ...snackbarProps }));
            setShownAlert(true);
        },
        [],
    );

    const closeAlert = useCallback(() => {
        setShownAlert(false);
    }, []);

    const { content, severity, variant, ...restAlertProps } = alertProps;
    /* eslint-disable react/jsx-no-constructed-context-values */
    return (
        <AlertContext.Provider value={{ show: showAlert }}>
            {children}
            <Snackbar {...snackbarProps} open={isAlertShown} onClose={closeAlert}>
                <Alert
                    onClose={closeAlert}
                    variant={variant}
                    severity={severity}
                    {...restAlertProps}
                >
                    <AlertTitle>{severity}</AlertTitle>
                    {content}
                </Alert>
            </Snackbar>
        </AlertContext.Provider>
    );
    /* eslint-enable react/jsx-no-constructed-context-values */
}

export const AlertContextProvider = memo(AlertProvider);
