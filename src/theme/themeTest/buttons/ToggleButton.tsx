import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup, { ToggleButtonGroupProps } from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import React from "react";

import TestComponentContainer from "../TestComponentContainer";

export function ToggleButtonTest() {
    const [alignment, setAlignment] = React.useState("left");

    const handleChange = (_event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        setAlignment(newAlignment);
    };

    const sizes: ToggleButtonGroupProps["size"][] = ["small", "medium", "large"];
    const orientations: ToggleButtonGroupProps["orientation"][] = ["horizontal", "vertical"];
    return (
        <TestComponentContainer title="Toggle Button">
            {sizes.map((size) => (
                <Stack direction="row" spacing={2} alignItems="center" key={size}>
                    <Typography variant="caption">{size}</Typography>
                    {orientations.map((orientation) => (
                        <React.Fragment key={orientation}>
                            <ToggleButtonGroup
                                size={size}
                                value={alignment}
                                orientation={orientation}
                                onChange={handleChange}
                                exclusive>
                                <ToggleButton value="left" key="left">
                                    <FormatAlignLeftIcon />
                                </ToggleButton>
                                <ToggleButton value="center" key="center">
                                    <FormatAlignCenterIcon />
                                </ToggleButton>
                                <ToggleButton value="right" key="right">
                                    <FormatAlignRightIcon />
                                </ToggleButton>
                                <ToggleButton value="justify" key="justify">
                                    <FormatAlignJustifyIcon />
                                </ToggleButton>
                            </ToggleButtonGroup>
                            <ToggleButtonGroup
                                size={size}
                                value={alignment}
                                orientation={orientation}
                                onChange={handleChange}
                                exclusive>
                                <ToggleButton value="left" key="left">
                                    Left
                                </ToggleButton>
                                <ToggleButton value="center" key="center">
                                    Center
                                </ToggleButton>
                                <ToggleButton value="right" key="right">
                                    Right
                                </ToggleButton>
                                <ToggleButton value="justify" key="justify">
                                    Justify
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </React.Fragment>
                    ))}
                </Stack>
            ))}
        </TestComponentContainer>
    );
}
