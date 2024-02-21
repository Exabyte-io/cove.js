import Typography from "@mui/material/Typography";
import React from "react";
import TestComponentContainer from "../TestComponentContainer";
export function TypographyTest() {
    const variants = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "button",
    ];
    return (React.createElement(TestComponentContainer, { title: "Typography" }, variants.map((variant) => (React.createElement(Typography, { variant: variant, key: variant }, variant)))));
}
export default Typography;
