import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import FormControlLabel, { FormControlLabelProps } from "@mui/material/FormControlLabel";
import { TypographyProps } from "@mui/material/Typography";
import React from "react";

const defaultSlotProps = {
    typography: { variant: "caption", color: "text.primary" } as TypographyProps,
};

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
}: CheckboxProps & FormControlLabelProps) {
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
                    onChange={onChange}
                />
            }
            label={label}
            labelPlacement={labelPlacement}
        />
    );
}

export default CheckboxComponent;
