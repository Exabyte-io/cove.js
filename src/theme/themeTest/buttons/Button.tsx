import Save from "@mui/icons-material/Save";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

import TestComponentContainer from "../TestComponentContainer";

export function ButtonTest() {
    const sizes: ButtonProps["size"][] = ["small", "medium", "large"];
    const variants: ButtonProps["variant"][] = ["contained", "outlined", "text"];
    return (
        <TestComponentContainer title="Button">
            {sizes.map((size) => (
                <>
                    <Typography variant="body2">{size}</Typography>
                    {variants.map((variant) => (
                        <Stack direction="row" spacing={2} key={variant}>
                            <Typography variant="caption">{variant}</Typography>
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
                    ))}
                </>
            ))}
        </TestComponentContainer>
    );
}
