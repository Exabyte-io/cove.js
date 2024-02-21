import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import TestComponentContainer from "../TestComponentContainer";
export function TextFieldTest() {
    const sizes = ["small", "medium"];
    const variants = ["outlined", "filled", "standard"];
    return (React.createElement(TestComponentContainer, { title: "TextField" }, sizes.map((size) => (React.createElement(Stack, { spacing: 2, direction: "row", alignItems: "center", component: "form", noValidate: true, autoComplete: "off", key: size },
        React.createElement(Typography, { variant: "caption" }, size),
        variants.map((variant) => (React.createElement(TextField, { label: variant, variant: variant, size: size, key: variant }))))))));
}
