import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

function TestComponentContainer({
    title,
    children,
}: {
    title?: React.ReactNode;
    children?: React.ReactNode;
}) {
    return (
        <Paper sx={{ p: 2, m: 2 }} elevation={1}>
            <Stack spacing={2} alignItems="center">
                {title && <Typography variant="h6">{title}</Typography>}
                {children}
            </Stack>
        </Paper>
    );
}

export default TestComponentContainer;
