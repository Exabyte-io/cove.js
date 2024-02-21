/* eslint-disable react/jsx-props-no-spreading */
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import React from "react";
import IconByName from "../icon/IconByName";
const useStyles = ({ fullWidth }) => makeStyles((theme) => {
    return {
        root: {
            textTransform: "none",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            // @ts-ignore
            minWidth: theme.inputMinWidth,
            color: theme.palette.text.secondary,
            ...(fullWidth ? { width: "100%" } : {}),
        },
    };
});
export function DefaultDropdownButton({ children = "Button", fullWidth = false, ...otherProps }) {
    const classes = useStyles({ fullWidth })();
    return (React.createElement(Button, { className: classes.root, "aria-controls": "customized-menu", "aria-haspopup": "true", variant: "outlined", size: "small", endIcon: React.createElement(IconByName, { name: "shapes.arrow.dropdown", color: "action" }), ...otherProps }, children));
}
export default DefaultDropdownButton;
