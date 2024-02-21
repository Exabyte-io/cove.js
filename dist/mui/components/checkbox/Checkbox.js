import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";
const defaultSlotProps = {
    typography: { variant: "caption", color: "text.primary" },
};
function CheckboxComponent({ id, value, checked, required, disabled, label, onChange, className, slotProps = defaultSlotProps, labelPlacement = "end", formControlLabelSx, checkboxSx, }) {
    return (React.createElement(FormControlLabel, { slotProps: slotProps, control: React.createElement(Checkbox, { id: id, disabled: disabled, required: required, className: className, value: value, checked: checked, onChange: (event) => onChange(event.target.checked), sx: checkboxSx }), label: label, labelPlacement: labelPlacement, sx: formControlLabelSx }));
}
export default CheckboxComponent;
