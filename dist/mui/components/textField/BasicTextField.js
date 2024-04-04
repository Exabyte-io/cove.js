import TextField from "@mui/material/TextField";
import React from "react";
function BasicTextField({ label, value, defaultValue, onChange = () => { }, // eslint-disable-line @typescript-eslint/no-empty-function
disabled = false, fullWidth = true, size = "medium", labelAsPlaceholder = true, sx = {}, type = "text", variant = "outlined", required = false, }) {
    const inputLabelProps = labelAsPlaceholder ? {} : { shrink: true };
    return (React.createElement(TextField, { type: type, sx: sx, label: label, value: value, defaultValue: defaultValue, fullWidth: fullWidth, disabled: disabled, variant: variant, size: size, required: required, InputLabelProps: inputLabelProps, onChange: (e) => onChange(e.target.value) }));
}
export default BasicTextField;
