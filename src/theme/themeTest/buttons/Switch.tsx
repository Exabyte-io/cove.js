import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import React from "react";

export function SwitchTest() {
    return (
        <Stack spacing={2} alignItems="center">
            <Typography variant="h6">Switch</Typography>
            <Stack direction="row" spacing={1}>
                <Switch defaultChecked size="small" />
                <Switch defaultChecked size="small" disabled />
                <Switch defaultChecked color="secondary" size="small" />
                <Switch defaultChecked color="warning" size="small" />
                <Switch defaultChecked color="default" size="small" />
            </Stack>
            <Stack direction="row" spacing={1}>
                <Switch defaultChecked />
                <Switch defaultChecked disabled />
                <Switch defaultChecked color="secondary" />
                <Switch defaultChecked color="warning" />
                <Switch defaultChecked color="default" />
            </Stack>
        </Stack>
    );
}
