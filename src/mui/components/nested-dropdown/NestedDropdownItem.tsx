import Container from "@mui/material/Container";
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
            {Boolean(leftIcon) && <ListItemIcon>{leftIcon}</ListItemIcon>}
            {Boolean(content) && (
                <Container>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <Typography {...typographyProps} className="DropdownItemText">
                        {content}
                    </Typography>
                </Container>
            )}
            {Boolean(rightIcon) && <ListItemIcon>{rightIcon}</ListItemIcon>}
        </MenuItem>
    );
}
