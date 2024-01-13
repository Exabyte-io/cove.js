import Stack from "@mui/material/Stack";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import React from "react";

import TestComponentContainer from "../TestComponentContainer";

export function SwitchTest() {
    const sizes: SwitchProps["size"][] = ["small", "medium"];
    const otherColors: SwitchProps["color"][] = ["secondary", "warning", "default"];
    return (
        <TestComponentContainer title="Switch">
            {sizes.map((size) => (
                <Stack direction="row" spacing={1} alignItems="center" key={size}>
                    <Typography variant="caption">{size}</Typography>
                    <Switch defaultChecked size={size} />
                    <Switch defaultChecked size={size} disabled />
                    {otherColors.map((color) => (
                        <Switch defaultChecked color={color} size={size} key={color} />
                    ))}
                </Stack>
            ))}
        </TestComponentContainer>
    );
}
