import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React from "react";
import s from "underscore.string";

export interface AvailableValue {
    id: string | undefined;
    name: string;
}

type BasicSelectProps = {
    disabled?: boolean;
    selectedValue: string;
    options: AvailableValue[];
    onChange: (newValue: string) => void;
    label: string;
    labelAsPlaceholder?: boolean;
    renderMenuItemContent?: (value: AvailableValue) => JSX.Element;
};

export default function BasicSelect({
    disabled = false,
    selectedValue,
    options,
    onChange = () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    label,
    labelAsPlaceholder = true,
    renderMenuItemContent,
}: BasicSelectProps) {
    const inputLabelProps = labelAsPlaceholder ? {} : { shrink: true };

    const optionsList = options
        ? options.map((availableValue) => {
              const menuItemContent = renderMenuItemContent
                  ? renderMenuItemContent(availableValue)
                  : availableValue.name;

              return (
                  <MenuItem key={availableValue.id} value={availableValue.id}>
                      {menuItemContent}
                  </MenuItem>
              );
          })
        : [];

    return (
        <TextField
            className={`select-${s.slugify(label)}`}
            disabled={disabled}
            label={s.capitalize(label)}
            value={selectedValue}
            onChange={(e) => onChange(e.target.value)}
            variant="outlined"
            fullWidth
            select
            size="small"
            InputLabelProps={inputLabelProps}>
            {optionsList}
        </TextField>
    );
}
