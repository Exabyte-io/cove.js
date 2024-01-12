import Save from "@mui/icons-material/Save";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

function BasicButtonVariants({
    size = "medium",
    variant = "contained",
}: {
    size: "small" | "medium" | "large";
    variant: "text" | "outlined" | "contained";
}) {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant={variant} size={size}>
                Primary
            </Button>
            <Button variant={variant} size={size} disabled>
                Disabled
            </Button>
            <Button variant={variant} size={size} startIcon={<Save />}>
                start icon
            </Button>
            <Button variant={variant} size={size}>
                <Save fontSize="inherit" />
            </Button>
        </Stack>
    );
}

export function ButtonTest() {
    return (
        <Stack spacing={2} alignItems="center">
            <Typography variant="h6">Button</Typography>
            <BasicButtonVariants size="small" variant="contained" />
            <BasicButtonVariants size="small" variant="outlined" />
            <BasicButtonVariants size="small" variant="text" />
            <BasicButtonVariants size="medium" variant="contained" />
            <BasicButtonVariants size="medium" variant="outlined" />
            <BasicButtonVariants size="medium" variant="text" />
            <BasicButtonVariants size="large" variant="contained" />
            <BasicButtonVariants size="large" variant="outlined" />
            <BasicButtonVariants size="large" variant="text" />
        </Stack>
    );
}
