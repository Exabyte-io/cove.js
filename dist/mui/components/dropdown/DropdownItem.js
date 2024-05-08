import { green } from "@mui/material/colors";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import IconByName from "../icon/IconByName";
export function DropdownItem({ disabled = false, icon, id, onMenuItemClick, showCheckIcon = false, endIcon, children, ...restProps }) {
    return (React.createElement(MenuItem, { id: id, disabled: disabled, onClick: (event) => onMenuItemClick(id, event), ...restProps },
        icon !== false ? (React.createElement(ListItemIcon, null, icon || React.createElement(IconByName, { name: "shapes.blurCircular" }))) : null,
        React.createElement(ListItemText, { primaryTypographyProps: { variant: "caption", color: "text.primary" }, className: "DropdownItemText" }, children),
        showCheckIcon ? (React.createElement(IconByName, { name: "shapes.check", htmlColor: green[500], fontSize: "large" })) : null,
        endIcon));
}
