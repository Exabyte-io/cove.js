import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import IconByName from "../../../icon/IconByName";
import { ColorBox, TotalContainer } from "./TotalWidget.styled";
export default function TotalWidget({ id = "", sum, label, iconName, boxColor, textColor = "text.primary", popoverContent = null, isBorder = true, }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(popoverContent) && Boolean(anchorEl);
    return (React.createElement(TotalContainer, { id: id, isBorder: isBorder },
        React.createElement(ColorBox, { color: boxColor, onMouseEnter: handlePopoverOpen, onMouseLeave: handlePopoverClose, isPointer: Boolean(popoverContent) },
            React.createElement(IconByName, { name: iconName, sx: { color: boxColor } })),
        React.createElement(Box, { className: "info", sx: { pl: 1, pr: 1 } },
            React.createElement(Typography, { className: "sum", variant: "subtitle2", color: textColor }, sum),
            React.createElement(Typography, { className: "total", variant: "caption", color: textColor }, label)),
        React.createElement(Popover, { sx: {
                pointerEvents: "none",
            }, open: open, anchorEl: anchorEl, anchorOrigin: {
                vertical: "top",
                horizontal: "center",
            }, transformOrigin: {
                vertical: "bottom",
                horizontal: "center",
            }, onClose: handlePopoverClose, disableRestoreFocus: true }, popoverContent)));
}
