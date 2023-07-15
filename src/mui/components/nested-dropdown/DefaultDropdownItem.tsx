import { ArrowRight } from "@mui/icons-material";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import React from "react";

export interface DefaultDropdownButtonProps {
    id?: string;
    onClick?: () => void;
    disabled: boolean;
    children: React.ReactNode;
}

export function DefaultDropdownItem({
    onClick,
    disabled = false,
    id = "",
    children = "Button",
}: DefaultDropdownButtonProps) {
    return (
        <ListItem
            id={id}
            disabled={disabled}
            aria-controls="customized-menu"
            aria-haspopup="true"
            onClick={onClick}>
            {children}
        </ListItem>
    );
}

export default DefaultDropdownItem;
