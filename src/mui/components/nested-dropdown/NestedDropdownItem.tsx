import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import React, { useCallback } from "react";

export interface DropdownItemProps {
    disabled: boolean;
    id: string;
    onClick?: (id: string) => void;
    isActive?: boolean;
    leftIcon?: React.ReactElement;
    content?: string;
    rightIcon?: React.ReactElement;
}

/**
 * @summary Nested dropdown item component. The main idea of the component is to provide
 * flexible way to display leftIcon | content | rightIcon
 * where each of them can be optional.
 */
export function NestedDropdownItem({
    disabled = false,
    id,
    onClick,
    isActive = false,
    leftIcon,
    content,
    rightIcon,
}: DropdownItemProps) {
    const onItemClick = useCallback(() => {
        if (typeof onClick === "function") {
            onClick(id);
        }
    }, [id, onClick]);

    return (
        <MenuItem id={id} disabled={disabled} onClick={onItemClick}>
            {Boolean(leftIcon) && <ListItemIcon>{leftIcon}</ListItemIcon>}
            {Boolean(content) && (
                <Container>
                    <Typography variant="caption" color="text.primary" className="DropdownItemText">
                        {content}
                    </Typography>
                </Container>
            )}
            {Boolean(rightIcon) && <ListItemIcon>{rightIcon}</ListItemIcon>}
        </MenuItem>
    );
}
