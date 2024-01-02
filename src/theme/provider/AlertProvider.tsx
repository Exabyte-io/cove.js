/* eslint-disable react/jsx-props-no-spreading */
import Alert from "@mui/material/Alert";
import { makeStyles } from "@mui/styles";
import { CustomContentProps, SnackbarContent, SnackbarProvider, useSnackbar } from "notistack";
import React, { forwardRef } from "react";

const useStyles = makeStyles({
    root: {
        maxWidth: "450px",
    },
});

const errorAlert = forwardRef<HTMLDivElement, CustomContentProps>(({ id, ...props }, ref) => {
    const { closeSnackbar } = useSnackbar();
    return (
        <SnackbarContent ref={ref}>
            <Alert severity="error" onClose={() => closeSnackbar(id)} {...props} />;
        </SnackbarContent>
    );
});

const warningAlert = forwardRef<HTMLDivElement, CustomContentProps>(({ id, ...props }, ref) => {
    const { closeSnackbar } = useSnackbar();
    return (
        <SnackbarContent ref={ref}>
            <Alert severity="warning" onClose={() => closeSnackbar(id)} {...props} />;
        </SnackbarContent>
    );
});

const infoAlert = forwardRef<HTMLDivElement, CustomContentProps>(({ id, ...props }, ref) => {
    const { closeSnackbar } = useSnackbar();
    return (
        <SnackbarContent ref={ref}>
            <Alert severity="info" onClose={() => closeSnackbar(id)} {...props} />;
        </SnackbarContent>
    );
});

const successAlert = forwardRef<HTMLDivElement, CustomContentProps>(({ id, ...props }, ref) => {
    const { closeSnackbar } = useSnackbar();
    return (
        <SnackbarContent ref={ref}>
            <Alert severity="success" onClose={() => closeSnackbar(id)} {...props} />;
        </SnackbarContent>
    );
});

export function AlertProvider({ children }: { children: React.ReactNode }) {
    const classes = useStyles();

    return (
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={4000}
            Components={{
                error: errorAlert,
                warning: warningAlert,
                info: infoAlert,
                success: successAlert,
            }}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            classes={{ containerRoot: classes.root }}>
            {children}
        </SnackbarProvider>
    );
}
