/* eslint-disable react/jsx-props-no-spreading */
import Button, { ButtonProps } from "@mui/material/Button";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import React from "react";

import IconByName from "../icon/IconByName";

const useStyles = ({ fullWidth }: { fullWidth: boolean }) =>
    makeStyles((theme: Theme) => {
        return {
            root: {
                textTransform: "none",
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "row",
                minWidth: 200,
                color: theme.palette.text.secondary,
                ...(fullWidth ? { width: "100%" } : {}),
            },
        };
    });

export interface DefaultDropdownButtonProps extends ButtonProps {
    fullWidth: boolean;
}

export function DefaultDropdownButton({
    children = "Button",
    fullWidth = false,
    ...otherProps
}: DefaultDropdownButtonProps) {
    const classes = useStyles({ fullWidth })();

    return (
        <Button
            className={classes.root}
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="outlined"
            size="small"
            endIcon={<IconByName name="shapes.arrow.dropdown" color="action" />}
            {...otherProps}>
            {children}
        </Button>
    );
}

export default DefaultDropdownButton;
