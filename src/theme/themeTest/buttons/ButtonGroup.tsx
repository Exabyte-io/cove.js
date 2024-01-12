import LooksTwo from "@mui/icons-material/LooksTwo";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

function ButtonGroupVariants({
    size = "medium",
    variant = "contained",
}: {
    size: "small" | "medium" | "large";
    variant: "text" | "outlined" | "contained";
}) {
    return (
        <Stack direction="row" spacing={2}>
            <ButtonGroup variant={variant} size={size}>
                <Button>One</Button>
                <Button>
                    <LooksTwo />
                </Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Stack>
    );
}

export function ButtonGroupTest() {
    return (
        <Stack spacing={2} alignItems="center">
            <Typography variant="h6">Button Group</Typography>
            <ButtonGroupVariants size="small" variant="contained" />
            <ButtonGroupVariants size="small" variant="outlined" />
            <ButtonGroupVariants size="small" variant="text" />
            <ButtonGroupVariants size="medium" variant="contained" />
            <ButtonGroupVariants size="medium" variant="outlined" />
            <ButtonGroupVariants size="medium" variant="text" />
            <ButtonGroupVariants size="large" variant="contained" />
            <ButtonGroupVariants size="large" variant="outlined" />
            <ButtonGroupVariants size="large" variant="text" />
        </Stack>
    );
}
