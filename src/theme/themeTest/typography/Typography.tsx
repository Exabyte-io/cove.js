import Typography, { TypographyProps } from "@mui/material/Typography";
import React from "react";

import TestComponentContainer from "../TestComponentContainer";

export function TypographyTest() {
    const variants: TypographyProps["variant"][] = [
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
    return (
        <TestComponentContainer title="Typography">
            {variants.map((variant) => (
                <Typography variant={variant}>{variant}</Typography>
            ))}
        </TestComponentContainer>
    );
}

export default Typography;
