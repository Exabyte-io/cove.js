/* eslint-disable react/jsx-props-no-spreading */
import Alert, { AlertProps } from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { CustomContentProps, SnackbarContent, SnackbarProvider, useSnackbar } from "notistack";
import React, { forwardRef } from "react";

const useStyles = makeStyles({
    root: {
        maxWidth: "500px",
    },
});

declare module "notistack" {
    interface VariantOverrides {
        yesNo: {
            onConfirm: () => void;
            onDeny: () => void;
            severity: AlertProps["severity"];
        };
    }
}

const customBasicAlert = forwardRef<HTMLDivElement, CustomContentProps>(
    ({ id, variant, ...props }, ref) => {
        const { closeSnackbar } = useSnackbar();
        const mappedVariant = variant === "default" || variant === "yesNo" ? "info" : variant;
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

interface YesNoAlertProps extends CustomContentProps {
    onConfirm: () => void;
    onDeny: () => void;
    severity: AlertProps["severity"];
}

const customYesNoAlert = forwardRef<HTMLDivElement, YesNoAlertProps>(
    ({ id, severity, onConfirm, onDeny, ...props }, ref) => {
        const { closeSnackbar } = useSnackbar();
        console.log({ id, severity, onConfirm });
        return (
            <SnackbarContent ref={ref}>
                <Alert
                    severity={severity}
                    className={`alert alert-${severity}`}
                    onClose={() => closeSnackbar(id)}
                    action={
                        <>
                            <Button
                                color={severity}
                                onClick={() => {
                                    onConfirm();
                                    closeSnackbar();
                                }}>
                                Yes
                            </Button>
                            <Button
                                color={severity}
                                onClick={() => {
                                    onDeny();
                                    closeSnackbar();
                                }}>
                                No
                            </Button>
                        </>
                    }
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
                yesNo: customYesNoAlert,
            }}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            classes={{ containerRoot: classes.root }}>
            {children}
        </SnackbarProvider>
    );
}
