import { SxProps } from "@mui/material";
import React, { HTMLInputTypeAttribute } from "react";
type BasicTextFieldProps = {
    label: string;
    value?: string | number;
    defaultValue?: string | number;
    onChange?: (newValue: string | number) => void;
    disabled?: boolean;
    fullWidth?: boolean;
    size?: "small" | "medium";
    labelAsPlaceholder?: boolean;
    sx?: SxProps;
    type?: HTMLInputTypeAttribute;
    variant?: "standard" | "filled" | "outlined";
    required?: boolean;
};
declare function BasicTextField({ label, value, defaultValue, onChange, // eslint-disable-line @typescript-eslint/no-empty-function
disabled, fullWidth, size, labelAsPlaceholder, sx, type, variant, required, }: BasicTextFieldProps): React.JSX.Element;
export default BasicTextField;
