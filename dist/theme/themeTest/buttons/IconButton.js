import Save from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import TestComponentContainer from "../TestComponentContainer";
export function IconButtonTest() {
    const sizes = ["small", "medium", "large"];
    return (React.createElement(TestComponentContainer, { title: "Icon Button" }, sizes.map((size) => (React.createElement(Stack, { direction: "row", spacing: 2, alignItems: "center", key: size },
        React.createElement(Typography, { variant: "caption" }, size),
        React.createElement(IconButton, { size: size },
            React.createElement(Save, null)),
        React.createElement(IconButton, { size: size, color: "primary" },
            React.createElement(Save, null)),
        React.createElement(IconButton, { size: size, color: "primary", disabled: true },
            React.createElement(Save, null)))))));
}
