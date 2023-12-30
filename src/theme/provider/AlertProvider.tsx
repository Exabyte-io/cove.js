import { makeStyles } from "@mui/styles";
import { SnackbarProvider } from "notistack";
import React from "react";

const useStyles = makeStyles({
    root: {
        maxWidth: "450px",
    },
});

export function AlertProvider({ children }: { children: React.ReactNode }) {
    const classes = useStyles();
    return (
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={4000}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            classes={{ containerRoot: classes.root }}>
            {children}
        </SnackbarProvider>
    );
}
