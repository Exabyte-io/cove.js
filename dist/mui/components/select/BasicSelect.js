import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React from "react";
import s from "underscore.string";
export default function BasicSelect({ id = "", disabled = false, selectedValue, options, onChange = () => { }, // eslint-disable-line @typescript-eslint/no-empty-function
label, labelAsPlaceholder = true, renderMenuItemContent, }) {
    const inputLabelProps = labelAsPlaceholder ? {} : { shrink: true };
    const optionsList = options
        ? options.map((availableValue) => {
            const menuItemContent = renderMenuItemContent
                ? renderMenuItemContent(availableValue)
                : availableValue.name;
            return (React.createElement(MenuItem, { key: availableValue.id, value: availableValue.id }, menuItemContent));
        })
        : [];
    return (React.createElement(TextField, { id: id, className: `select-${s.slugify(label)}`, disabled: disabled, label: s.capitalize(label), defaultValue: selectedValue, onChange: (e) => onChange(e.target.value), variant: "outlined", fullWidth: true, select: true, size: "small", InputLabelProps: inputLabelProps }, optionsList));
}
