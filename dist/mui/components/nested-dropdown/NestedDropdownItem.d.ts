import { TypographyProps } from "@mui/material/Typography";
import React from "react";
export interface DropdownItemProps {
    disabled: boolean;
    id: string;
    onClick?: (id: string) => void;
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
export declare function NestedDropdownItem({ disabled, id, onClick, leftIcon, content, rightIcon, typographyProps, }: DropdownItemProps): React.JSX.Element;
