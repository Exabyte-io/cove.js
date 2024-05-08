import { MenuItemProps } from "@mui/material/MenuItem";
import React from "react";
export interface DropdownItemProps extends MenuItemProps {
    disabled?: boolean;
    icon?: React.ReactElement | boolean;
    id: string;
    onMenuItemClick: (id: string, event: React.MouseEvent<HTMLLIElement>) => void;
    showCheckIcon?: boolean;
    endIcon?: React.ReactElement;
}
export declare function DropdownItem({ disabled, icon, id, onMenuItemClick, showCheckIcon, endIcon, children, ...restProps }: DropdownItemProps): React.JSX.Element;
