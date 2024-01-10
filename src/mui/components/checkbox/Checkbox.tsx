import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import FormControlLabel, { FormControlLabelProps } from "@mui/material/FormControlLabel";
import { SxProps } from "@mui/material/styles";
import { TypographyProps } from "@mui/material/Typography";
import React from "react";

const defaultSlotProps = {
    typography: { variant: "caption", color: "text.primary" } as TypographyProps,
};

export interface CheckboxComponentProps {
    id: string;
    value: string;
    checked: boolean;
    required: boolean;
    disabled: boolean;
    label: string;
    onChange: (checked: boolean) => void;
    className: string;
    slotProps?: { typography: TypographyProps };
    labelPlacement?: FormControlLabelProps["labelPlacement"];
    formControlLabelSx?: SxProps;
    checkboxSx?: SxProps;
}

function CheckboxComponent({
    id,
    value,
    checked,
    required,
    disabled,
    label,
    onChange,
    className,
    slotProps = defaultSlotProps,
    labelPlacement = "end",
    formControlLabelSx,
    checkboxSx,
}: CheckboxComponentProps) {
    return (
        <FormControlLabel
            slotProps={slotProps}
            control={
                <Checkbox
                    id={id}
                    disabled={disabled}
                    required={required}
                    className={className}
                    value={value}
                    checked={checked}
                    onChange={(event) => onChange(event.target.checked)}
                    sx={checkboxSx}
                />
            }
            label={label}
            labelPlacement={labelPlacement}
            sx={formControlLabelSx}
        />
    );
}

export default CheckboxComponent;
