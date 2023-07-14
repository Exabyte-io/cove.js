import BlurCircularOutlinedIcon from "@mui/icons-material/BlurCircularOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { green } from "@mui/material/colors";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import React, { useCallback, useState } from "react";
import Menu from "@mui/material/Menu";

export interface DropdownAction {
    id: string;
    disabled: boolean;
    content: string | React.ReactElement;
    icon: React.ReactElement;
    shouldMenuStayOpened?: boolean;
    key?: string;
    showCheckIcon?: boolean;
    isShown?: boolean;
    isSelected?: boolean;
    isDivider?: boolean;
    subActions?: DropdownAction[];
    onClick: (action: DropdownAction) => void;
}

export interface DropdownItemProps {
    disabled: boolean;
    icon: React.ReactElement;
    id: string;
    onClick: (action: DropdownAction) => void;
    showCheckIcon?: boolean;
    content: string | React.ReactElement;
}

export function DropdownItem({
    disabled = false,
    icon,
    id,
    onClick,
    showCheckIcon = false,
    content,
    subActions,
}: DropdownItemProps & { subActions?: DropdownAction[] }) {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const handleMouseOver = useCallback(() => setSubmenuOpen(true), []);
    const handleMouseOut = useCallback(() => setSubmenuOpen(false), []);
    const handleClose = useCallback(() => setSubmenuOpen(false), []);

    const action: DropdownAction = {
        id,
        disabled,
        icon,
        content,
        onClick,
    };

    const onItemClick = useCallback(() => {
        onClick(action);
        setSubmenuOpen(false);
    }, [onClick, action]);
    return (
        <MenuItem 
            id={id} 
            disabled={disabled} 
            onClick={onItemClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <ListItemIcon>{icon || <BlurCircularOutlinedIcon />}</ListItemIcon>
            <ListItemText
                primaryTypographyProps={{ variant: "caption", color: "text.primary" }}
                className="DropdownItemText"
            >
                {content}
            </ListItemText>
            {showCheckIcon ? <CheckIcon htmlColor={green[500]} fontSize="large" /> : null}
            {subActions && (
                <Menu
                    id="simple-menu"
                    keepMounted
                    open={Boolean(submenuOpen)}
                    onClose={handleClose}
                >
                    {subActions.map((subAction) => (
                        <DropdownItem {...subAction} key={subAction.id} onClick={() => onClick(subAction)} />
                    ))}
                </Menu>
            )}
        </MenuItem>
    );
}
