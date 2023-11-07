import { green } from "@mui/material/colors";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

import IconByName from "../icon/IconByName";

export interface DropdownItemProps {
    disabled?: boolean;
    icon?: React.ReactElement | boolean;
    id: string;
    onClick: (id: string, event: React.MouseEvent<HTMLLIElement>) => void;
    showCheckIcon?: boolean;
    content: string | React.ReactElement;
    endIcon?: React.ReactElement;
}

export function DropdownItem({
    disabled = false,
    icon,
    id,
    onClick,
    showCheckIcon = false,
    endIcon,
    content,
}: DropdownItemProps) {
    return (
        <MenuItem id={id} disabled={disabled} onClick={(event) => onClick(id, event)}>
            {icon !== false ? (
                <ListItemIcon>{icon || <IconByName name="shapes.blurCircular" />}</ListItemIcon>
            ) : null}
            <ListItemText
                primaryTypographyProps={{ variant: "caption", color: "text.primary" }}
                className="DropdownItemText">
                {content}
            </ListItemText>
            {showCheckIcon ? (
                <IconByName name="shapes.check" htmlColor={green[500]} fontSize="large" />
            ) : null}
            {endIcon}
        </MenuItem>
    );
}
