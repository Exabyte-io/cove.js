import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import Typography, { TypographyProps } from "@mui/material/Typography";
import React, { useCallback } from "react";

export interface DropdownItemProps {
    disabled: boolean;
    id: string;
    key?: string;
    onClick?: (id: string) => void;
    isActive?: boolean;
    leftIcon?: React.ReactElement;
    content?: string;
    rightIcon?: React.ReactElement;
    typographyProps?: TypographyProps;
}

/**
 * @summary Nested dropdown item component. The main idea of the component is to provide
 * flexible way to display leftIcon | content | rightIcon
 * where each of them can be optional.
 */
export function NestedDropdownItem({
    disabled = false,
    id,
    key,
    onClick,
    isActive = false,
    leftIcon,
    content,
    rightIcon,
    typographyProps = { variant: "body1", color: "text.primary" },
}: DropdownItemProps) {
    const onItemClick = useCallback(() => {
        if (typeof onClick === "function") {
            onClick(id);
        }
    }, [id, onClick]);

    return (
        <MenuItem key={key} id={id} disabled={disabled} onClick={onItemClick}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box display="flex" alignItems="center">
                    {Boolean(leftIcon) && <ListItemIcon>{leftIcon}</ListItemIcon>}
                    {Boolean(content) && (
                        <Typography
                            /* eslint-disable-next-line react/jsx-props-no-spreading */
                            {...typographyProps}
                            className="DropdownItemText">
                            {content}
                        </Typography>
                    )}
                </Box>
                {Boolean(rightIcon) && <ListItem disableGutters>{rightIcon}</ListItem>}
            </Box>
        </MenuItem>
    );
}
