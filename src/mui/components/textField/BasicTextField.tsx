import { SxProps } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { HTMLInputTypeAttribute } from "react";
import s from "underscore.string";

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
    required = false,
}: BasicTextFieldProps) {
    const inputLabelProps = labelAsPlaceholder ? {} : { shrink: true };

    return (
        <TextField
            className={`text-field-${s.slugify(label)}`}
            type={type}
            sx={sx}
            label={label}
            value={value}
            defaultValue={defaultValue}
            fullWidth={fullWidth}
            disabled={disabled}
            variant={variant}
            size={size}
            required={required}
            InputLabelProps={inputLabelProps}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default BasicTextField;
