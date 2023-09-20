import { SxProps } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";
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
};

function BasicTextField({
    label,
    value,
    defaultValue,
    onChange = () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    disabled = false,
    fullWidth = true,
    size = "medium",
    labelAsPlaceholder = true,
    sx = {},
    type = "text",
    variant = "outlined",
}: BasicTextFieldProps) {
    const inputLabelProps = labelAsPlaceholder ? {} : { shrink: true };

    const textFieldProps: TextFieldProps = {
        type,
        sx,
        label,
        fullWidth,
        disabled,
        variant,
        size,
        InputLabelProps: inputLabelProps,
        onChange: (e) => onChange(e.target.value),
    };

    if (value !== undefined) {
        textFieldProps.value = value;
    }

    if (defaultValue !== undefined) {
        textFieldProps.defaultValue = defaultValue;
    }

    return (
        <TextField
            type={type}
            sx={sx}
            label={label}
            value={value}
            defaultValue={defaultValue}
            fullWidth={fullWidth}
            disabled={disabled}
            variant={variant}
            size={size}
            InputLabelProps={inputLabelProps}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default BasicTextField;
