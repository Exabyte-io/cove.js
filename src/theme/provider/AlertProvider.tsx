import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import { closeSnackbar, SnackbarKey, SnackbarProvider } from "notistack";
import React from "react";

import IconByName from "../../mui/components/icon/IconByName";

const useStyles = makeStyles({
    root: {
        maxWidth: "450px",
    },
});

export function AlertProvider({ children }: { children: React.ReactNode }) {
    const classes = useStyles();

    const closeButton = (snackbarId: SnackbarKey) => (
        <IconButton onClick={() => closeSnackbar(snackbarId)}>
            <IconByName name="actions.close" />
        </IconButton>
    );
    return (
        <SnackbarProvider
            maxSnack={3}
            autoHideDuration={4000}
            action={closeButton}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            classes={{ containerRoot: classes.root }}>
            {children}
        </SnackbarProvider>
    );
}
