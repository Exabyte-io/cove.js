import { FormControlLabelProps } from "@mui/material/FormControlLabel";
import { SxProps } from "@mui/material/styles";
import { TypographyProps } from "@mui/material/Typography";
import React from "react";
export interface CheckboxComponentProps {
    id: string;
    value: string;
    checked: boolean;
    required: boolean;
    disabled: boolean;
    label: React.ReactNode;
    onChange: (checked: boolean) => void;
    className: string;
    slotProps: {
        typography: TypographyProps;
    };
    labelPlacement: FormControlLabelProps["labelPlacement"];
    formControlLabelSx: SxProps;
    checkboxSx: SxProps;
}
declare function CheckboxComponent({ id, value, checked, required, disabled, label, onChange, className, slotProps, labelPlacement, formControlLabelSx, checkboxSx, }: CheckboxComponentProps): React.JSX.Element;
export default CheckboxComponent;
