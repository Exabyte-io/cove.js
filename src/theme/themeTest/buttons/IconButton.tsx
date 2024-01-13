import Save from "@mui/icons-material/Save";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

import TestComponentContainer from "../TestComponentContainer";

export function IconButtonTest() {
    const sizes: IconButtonProps["size"][] = ["small", "medium", "large"];
    return (
        <TestComponentContainer title="Icon Button">
            {sizes.map((size) => (
                <Stack direction="row" spacing={2} alignItems="center" key={size}>
                    <Typography variant="caption">{size}</Typography>
                    <IconButton size={size}>
                        <Save />
                    </IconButton>
                    <IconButton size={size} color="primary">
                        <Save />
                    </IconButton>
                    <IconButton size={size} color="primary" disabled>
                        <Save />
                    </IconButton>
                </Stack>
            ))}
        </TestComponentContainer>
    );
}
