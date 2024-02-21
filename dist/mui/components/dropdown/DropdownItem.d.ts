import React from "react";
export interface DropdownItemProps {
    disabled?: boolean;
    icon?: React.ReactElement | boolean;
    id: string;
    onClick: (id: string, event: React.MouseEvent<HTMLLIElement>) => void;
    showCheckIcon?: boolean;
    content: string | React.ReactElement;
    endIcon?: React.ReactElement;
}
export declare function DropdownItem({ disabled, icon, id, onClick, showCheckIcon, endIcon, content, }: DropdownItemProps): React.JSX.Element;
