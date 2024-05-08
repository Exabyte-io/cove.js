import { green } from "@mui/material/colors";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import React from "react";

import IconByName from "../icon/IconByName";

export interface DropdownItemProps extends MenuItemProps {
    disabled?: boolean;
    icon?: React.ReactElement | boolean;
    id: string;
    onMenuItemClick: (id: string, event: React.MouseEvent<HTMLLIElement>) => void;
    showCheckIcon?: boolean;
    endIcon?: React.ReactElement;
}

export function DropdownItem({
    disabled = false,
    icon,
    id,
    onMenuItemClick,
    showCheckIcon = false,
    endIcon,
    children,
    ...restProps
}: DropdownItemProps) {
    return (
        <MenuItem
            id={id}
            disabled={disabled}
            onClick={(event) => onMenuItemClick(id, event)}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...restProps}>
            {icon !== false ? (
                <ListItemIcon>{icon || <IconByName name="shapes.blurCircular" />}</ListItemIcon>
            ) : null}
            <ListItemText
                primaryTypographyProps={{ variant: "caption", color: "text.primary" }}
                className="DropdownItemText">
                {children}
            </ListItemText>
            {showCheckIcon ? (
                <IconByName name="shapes.check" htmlColor={green[500]} fontSize="large" />
            ) : null}
            {endIcon}
        </MenuItem>
    );
}
