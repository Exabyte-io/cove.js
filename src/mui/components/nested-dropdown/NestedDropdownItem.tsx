import BlurCircularOutlinedIcon from "@mui/icons-material/BlurCircularOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { ListItem } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import React, { useCallback } from "react";

export interface DropdownItemProps {
    disabled: boolean;
    icon: React.ReactElement | null;
    id: string;
    onClick: (id: string) => void;
    isActive?: boolean;
    content?: string;
    rightElement?: React.ReactElement;
}

export function NestedDropdownItem({
    disabled = false,
    icon = null,
    id,
    onClick,
    isActive = false,
    content,
    rightElement,
}: DropdownItemProps) {
    const onItemClick = useCallback(() => onClick(id), [id]);

    return (
        <MenuItem id={id} disabled={disabled} onClick={onItemClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText
                primaryTypographyProps={{ variant: "caption", color: "text.primary" }}
                className="DropdownItemText">
                {content}
            </ListItemText>
            <ListItem>{rightElement}</ListItem>
            <CheckIcon htmlColor={isActive ? green[500] : grey[500]} fontSize="large" />
        </MenuItem>
    );
}
