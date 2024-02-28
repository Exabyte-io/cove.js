/* eslint-disable react/jsx-props-no-spreading */
import Alert from "@mui/material/Alert";
import { makeStyles } from "@mui/styles";
import { CustomContentProps, SnackbarContent, SnackbarProvider, useSnackbar } from "notistack";
import React, { forwardRef } from "react";

const useStyles = makeStyles({
    root: {
        maxWidth: "500px",
    },
});

const customBasicAlert = forwardRef<HTMLDivElement, CustomContentProps>(
    ({ id, variant, ...props }, ref) => {
        const { closeSnackbar } = useSnackbar();
        const mappedVariant = variant === "default" ? "info" : variant;
        return (
            <SnackbarContent ref={ref}>
                <Alert
                    severity={mappedVariant}
                    className={`alert alert-${mappedVariant}`}
                    onClose={() => closeSnackbar(id)}
                    variant="filled">
                    {props.message}
                </Alert>
            </SnackbarContent>
        );
    },
);

export function AlertProvider({ children }: { children: React.ReactNode }) {
    const classes = useStyles();

    return (
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={4000}
            Components={{
                error: customBasicAlert,
                warning: customBasicAlert,
                info: customBasicAlert,
                success: customBasicAlert,
                default: customBasicAlert,
            }}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            classes={{ containerRoot: classes.root }}>
            {children}
        </SnackbarProvider>
    );
}
