import Save from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import TestComponentContainer from "../TestComponentContainer";
export function ButtonTest() {
    const sizes = ["small", "medium", "large"];
    const variants = ["contained", "outlined", "text"];
    return (React.createElement(TestComponentContainer, { title: "Button" }, sizes.map((size) => (React.createElement(React.Fragment, { key: size },
        React.createElement(Typography, { variant: "body2" }, size),
        variants.map((variant) => (React.createElement(Stack, { direction: "row", spacing: 2, alignItems: "center", key: variant },
            React.createElement(Typography, { variant: "caption" }, variant),
            React.createElement(Button, { variant: variant, size: size }, "Primary"),
            React.createElement(Button, { variant: variant, size: size, disabled: true }, "Disabled"),
            React.createElement(Button, { variant: variant, size: size, startIcon: React.createElement(Save, null) }, "start icon"),
            React.createElement(Button, { variant: variant, size: size },
                React.createElement(Save, { fontSize: "inherit" }))))))))));
}
