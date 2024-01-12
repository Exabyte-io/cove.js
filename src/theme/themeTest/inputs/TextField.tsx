import Stack from "@mui/material/Stack";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

import TestComponentContainer from "../TestComponentContainer";

export function TextFieldTest() {
    const sizes: TextFieldProps["size"][] = ["small", "medium"];
    const variants: TextFieldProps["variant"][] = ["outlined", "filled", "standard"];
    return (
        <TestComponentContainer title="TextField">
            {sizes.map((size) => (
                <Stack spacing={2} direction="row" component="form" noValidate autoComplete="off">
                    <Typography variant="caption">{size}</Typography>
                    {variants.map((variant) => (
                        <TextField label={variant} variant={variant} size={size} />
                    ))}
                </Stack>
            ))}
        </TestComponentContainer>
    );
}
