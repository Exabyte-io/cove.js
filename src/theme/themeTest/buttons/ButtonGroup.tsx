import Looks3 from "@mui/icons-material/Looks3";
import LooksOne from "@mui/icons-material/LooksOne";
import LooksTwo from "@mui/icons-material/LooksTwo";
import Button from "@mui/material/Button";
import ButtonGroup, { ButtonGroupProps } from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";

import TestComponentContainer from "../TestComponentContainer";

export function ButtonGroupTest() {
    const sizes: ButtonGroupProps["size"][] = ["small", "medium", "large"];
    const variants: ButtonGroupProps["variant"][] = ["contained", "outlined", "text"];
    return (
        <TestComponentContainer title="Button Group">
            {sizes.map((size) => (
                <React.Fragment key={size}>
                    <Typography variant="body2">{size}</Typography>
                    {variants.map((variant) => (
                        <Stack direction="row" spacing={2} alignItems="center" key={variant}>
                            <Typography variant="caption">{variant}</Typography>
                            <ButtonGroup variant={variant} size={size}>
                                <Button>One</Button>
                                <Button>Two</Button>
                                <Button>Three</Button>
                            </ButtonGroup>
                            <ButtonGroup variant={variant} size={size}>
                                <Button>
                                    <LooksOne />
                                </Button>
                                <Button>
                                    <LooksTwo />
                                </Button>
                                <Button>
                                    <Looks3 />
                                </Button>
                            </ButtonGroup>
                        </Stack>
                    ))}
                </React.Fragment>
            ))}
        </TestComponentContainer>
    );
}
