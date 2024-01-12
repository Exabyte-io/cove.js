import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

export function TypographyTest() {
    return (
        <Stack spacing={2} alignItems="center">
            <Typography variant="h6">Typography</Typography>
            <Typography variant="h1">h1</Typography>
            <Typography variant="h2">h2</Typography>
            <Typography variant="h3">h3</Typography>
            <Typography variant="h4">h4</Typography>
            <Typography variant="h5">h5</Typography>
            <Typography variant="h6">h6</Typography>
            <Typography variant="subtitle1">subtitle1</Typography>
            <Typography variant="subtitle2">subtitle2</Typography>
            <Typography variant="body1">body1</Typography>
            <Typography variant="body2">body2</Typography>
            <Typography variant="caption">caption</Typography>
            <Typography variant="button">button</Typography>
        </Stack>
    );
}

export default Typography;
