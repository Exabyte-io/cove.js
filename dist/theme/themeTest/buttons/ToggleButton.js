import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import React from "react";
import TestComponentContainer from "../TestComponentContainer";
export function ToggleButtonTest() {
    const [alignment, setAlignment] = React.useState("left");
    const handleChange = (_event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const sizes = ["small", "medium", "large"];
    const orientations = ["horizontal", "vertical"];
    return (React.createElement(TestComponentContainer, { title: "Toggle Button" }, sizes.map((size) => (React.createElement(Stack, { direction: "row", spacing: 2, alignItems: "center", key: size },
        React.createElement(Typography, { variant: "caption" }, size),
        orientations.map((orientation) => (React.createElement(React.Fragment, { key: orientation },
            React.createElement(ToggleButtonGroup, { size: size, value: alignment, orientation: orientation, onChange: handleChange, exclusive: true },
                React.createElement(ToggleButton, { value: "left", key: "left" },
                    React.createElement(FormatAlignLeftIcon, null)),
                React.createElement(ToggleButton, { value: "center", key: "center" },
                    React.createElement(FormatAlignCenterIcon, null)),
                React.createElement(ToggleButton, { value: "right", key: "right" },
                    React.createElement(FormatAlignRightIcon, null)),
                React.createElement(ToggleButton, { value: "justify", key: "justify" },
                    React.createElement(FormatAlignJustifyIcon, null))),
            React.createElement(ToggleButtonGroup, { size: size, value: alignment, orientation: orientation, onChange: handleChange, exclusive: true },
                React.createElement(ToggleButton, { value: "left", key: "left" }, "Left"),
                React.createElement(ToggleButton, { value: "center", key: "center" }, "Center"),
                React.createElement(ToggleButton, { value: "right", key: "right" }, "Right"),
                React.createElement(ToggleButton, { value: "justify", key: "justify" }, "Justify"))))))))));
}
