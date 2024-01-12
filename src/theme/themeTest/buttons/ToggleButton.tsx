import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import { ButtonProps } from "@mui/material";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import * as React from "react";

export function ToggleButtonTest() {
    const [alignment, setAlignment] = React.useState("left");

    const handleChange = (_event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        setAlignment(newAlignment);
    };

    const childrenIcon = [
        <ToggleButton value="left" key="left">
            <FormatAlignLeftIcon />
        </ToggleButton>,
        <ToggleButton value="center" key="center">
            <FormatAlignCenterIcon />
        </ToggleButton>,
        <ToggleButton value="right" key="right">
            <FormatAlignRightIcon />
        </ToggleButton>,
        <ToggleButton value="justify" key="justify">
            <FormatAlignJustifyIcon />
        </ToggleButton>,
    ];

    const childrenText = [
        <ToggleButton value="left" key="left">
            Left
        </ToggleButton>,
        <ToggleButton value="center" key="center">
            Center
        </ToggleButton>,
        <ToggleButton value="right" key="right">
            Right
        </ToggleButton>,
        <ToggleButton value="justify" key="justify">
            Justify
        </ToggleButton>,
    ];

    const sizes = ["small", "medium", "large"] as ButtonProps["size"][];
    return (
        <Stack spacing={2} alignItems="center">
            <Typography variant="h6">ToggleButton</Typography>
            {sizes.map((size) => (
                <Stack direction="row" spacing={2} alignItems="center">
                    <ToggleButtonGroup
                        size={size}
                        value={alignment}
                        onChange={handleChange}
                        exclusive>
                        {childrenIcon}
                    </ToggleButtonGroup>
                    <ToggleButtonGroup
                        size={size}
                        value={alignment}
                        onChange={handleChange}
                        exclusive>
                        {childrenText}
                    </ToggleButtonGroup>
                    <ToggleButtonGroup
                        size={size}
                        value={alignment}
                        orientation="vertical"
                        onChange={handleChange}
                        exclusive>
                        {childrenIcon}
                    </ToggleButtonGroup>
                    <ToggleButtonGroup
                        size={size}
                        value={alignment}
                        orientation="vertical"
                        onChange={handleChange}
                        exclusive>
                        {childrenText}
                    </ToggleButtonGroup>
                </Stack>
            ))}
        </Stack>
    );
}
