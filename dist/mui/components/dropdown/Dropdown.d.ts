import { MenuItemProps } from "@mui/material";
import { PopperPlacementType, PopperProps } from "@mui/material/Popper";
import React from "react";
import { DefaultDropdownButtonProps } from "./DefaultDropdownButton";
import { DropdownItemProps } from "./DropdownItem";
export interface DropdownAction {
    id: DropdownItemProps["id"];
    onClick: (action: DropdownAction, event: React.MouseEvent<HTMLLIElement>) => void;
    content: DropdownItemProps["content"];
    disabled?: DropdownItemProps["disabled"];
    icon?: DropdownItemProps["icon"];
    endIcon?: DropdownItemProps["endIcon"];
    showCheckIcon?: DropdownItemProps["showCheckIcon"];
    shouldMenuStayOpened?: boolean;
    key?: string;
    isShown?: boolean;
    isSelected?: boolean;
    isDivider?: boolean;
    /**
     * Pass any MUI MenuItem props here to customize appearance or html properties
     */
    menuItemProps?: MenuItemProps;
}
export interface DropdownProps {
    id?: string;
    popperProps?: {
        id: string;
        modifiers?: PopperProps["modifiers"];
        "data-popper-id"?: string;
    };
    buttonContent?: string;
    actions: DropdownAction[];
    children?: React.ReactNode | React.ReactNode[];
    paperPlacement?: PopperPlacementType;
    className?: string;
    disabled?: boolean;
    buttonProps?: Partial<DefaultDropdownButtonProps>;
}
/**
 *  MUI dropdown component have a default button with dropdown also could be used with
 * custom button which takes from children, actions array -> array which will be converted
 * to dropdown menu items.
 */
export default function Dropdown({ id, actions, buttonContent, popperProps, children, disabled, paperPlacement, className, buttonProps, }: DropdownProps): React.JSX.Element;
