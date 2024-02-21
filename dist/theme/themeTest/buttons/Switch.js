import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import React from "react";
import TestComponentContainer from "../TestComponentContainer";
export function SwitchTest() {
    const sizes = ["small", "medium"];
    const otherColors = ["secondary", "warning", "default"];
    return (React.createElement(TestComponentContainer, { title: "Switch" }, sizes.map((size) => (React.createElement(Stack, { direction: "row", spacing: 1, alignItems: "center", key: size },
        React.createElement(Typography, { variant: "caption" }, size),
        React.createElement(Switch, { defaultChecked: true, size: size }),
        React.createElement(Switch, { defaultChecked: true, size: size, disabled: true }),
        otherColors.map((color) => (React.createElement(Switch, { defaultChecked: true, color: color, size: size, key: color }))))))));
}
