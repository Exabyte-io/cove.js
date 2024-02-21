import { ButtonProps } from "@mui/material/Button";
import React from "react";
export interface DefaultDropdownButtonProps extends ButtonProps {
    fullWidth: boolean;
}
export declare function DefaultDropdownButton({ children, fullWidth, ...otherProps }: DefaultDropdownButtonProps): React.JSX.Element;
export default DefaultDropdownButton;
