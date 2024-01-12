import Save from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";

function IconButtonVariants({ size = "medium" }: { size: "small" | "medium" | "large" }) {
    return (
        <Stack direction="row" spacing={2}>
            <IconButton size={size}>
                <Save fontSize="inherit" />
            </IconButton>
            <IconButton size={size} color="primary">
                <Save fontSize="inherit" />
            </IconButton>
            <IconButton size={size} color="primary" disabled>
                <Save fontSize="inherit" />
            </IconButton>
        </Stack>
    );
}

export function IconButtonTest() {
    return (
        <Stack spacing={2} alignItems="center">
            <Typography variant="h6">Icon Button</Typography>
            <IconButtonVariants size="small" />
            <IconButtonVariants size="medium" />
            <IconButtonVariants size="large" />
        </Stack>
    );
}
