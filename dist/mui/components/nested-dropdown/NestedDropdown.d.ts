import { PopperPlacementType, PopperProps } from "@mui/material/Popper";
import { SxProps } from "@mui/material/styles";
import React from "react";
export interface NestedDropdownAction {
    id: string;
    disabled: boolean;
    shouldMenuStayOpened?: boolean;
    key?: string;
    isShown?: boolean;
    isSelected?: boolean;
    isDivider?: boolean;
    onClick?: (action: NestedDropdownAction) => void;
    actions?: NestedDropdownAction[];
    leftIcon?: React.ReactElement;
    content?: string;
    rightIcon?: React.ReactElement;
    header?: string;
    contentObject?: React.ReactNode[];
    paperPlacement?: PopperPlacementType;
}
export interface NestedDropdownProps {
    id?: string;
    popperProps?: {
        id: string;
        modifiers?: PopperProps["modifiers"];
        "data-popper-id"?: string;
    };
    buttonProps?: {
        content: string;
    };
    paperSx?: SxProps;
    actions?: NestedDropdownAction[];
    children?: React.ReactNode | React.ReactNode[];
    paperPlacement?: PopperPlacementType;
    className?: string;
    disabled?: boolean;
    header?: string;
    contentObject?: React.ReactNode[];
    shouldMenuStayOpened?: boolean;
    isMobile?: boolean;
}
/**
 * @summary Nested dropdown component, can be used as a default dropdown component
 *  Nested dropdown component can be used as a default dropdown component,
 *  with options to make it nested and display menu in a flexible way:
 *  header - optional header text for the dropdown
 *  [actions: leftIcon, content, rightIcon] - optional actions array which will be converted to dropdown menu items.
 *  contentObject - optional object to display custom content layout
 *  divider - optional divider to separate dropdown menu items
 *  @param {Object} props
 *  @param {React.ReactNode[]} [props.contentObject] - any arbitrary content to display in dropdown in place of menu items
 *  @param {Object} [props.buttonProps] - props for default button component
 *  @param {Object} [props.popperProps] - props for popper component
 */
export default function NestedDropdown({ id, actions, contentObject, buttonProps, popperProps, paperSx, children, disabled, paperPlacement, className, header, isMobile, }: NestedDropdownProps): React.JSX.Element;
