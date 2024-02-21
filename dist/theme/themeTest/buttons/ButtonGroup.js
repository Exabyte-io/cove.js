import Looks3 from "@mui/icons-material/Looks3";
import LooksOne from "@mui/icons-material/LooksOne";
import LooksTwo from "@mui/icons-material/LooksTwo";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import TestComponentContainer from "../TestComponentContainer";
export function ButtonGroupTest() {
    const sizes = ["small", "medium", "large"];
    const variants = ["contained", "outlined", "text"];
    return (React.createElement(TestComponentContainer, { title: "Button Group" }, sizes.map((size) => (React.createElement(React.Fragment, { key: size },
        React.createElement(Typography, { variant: "body2" }, size),
        variants.map((variant) => (React.createElement(Stack, { direction: "row", spacing: 2, alignItems: "center", key: variant },
            React.createElement(Typography, { variant: "caption" }, variant),
            React.createElement(ButtonGroup, { variant: variant, size: size },
                React.createElement(Button, null, "One"),
                React.createElement(Button, null, "Two"),
                React.createElement(Button, null, "Three")),
            React.createElement(ButtonGroup, { variant: variant, size: size },
                React.createElement(Button, null,
                    React.createElement(LooksOne, null)),
                React.createElement(Button, null,
                    React.createElement(LooksTwo, null)),
                React.createElement(Button, null,
                    React.createElement(Looks3, null)))))))))));
}
