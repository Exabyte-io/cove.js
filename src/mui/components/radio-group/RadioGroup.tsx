import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import MUIRadioGroup from "@mui/material/RadioGroup";
import React from "react";

export interface RadioItemProp {
    id: string;
    label: string;
    value: number | string;
}
interface RadioGroupProps {
    id: string;
    label?: string;
    value?: string | number;
    fontSize?: number;
    items: RadioItemProp[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string | number) => void;
}
export default function RadioGroup({
    id,
    label,
    items,
    value,
    fontSize = 16,
    onChange,
}: RadioGroupProps) {
    return (
        <FormControl>
            {label ? <FormLabel id={id}>{label}</FormLabel> : null}
            <MUIRadioGroup onChange={onChange} value={value}>
                {items.map(({ id: itemId, label: itemLabel, value: itemValue }) => {
                    return (
                        <FormControlLabel
                            label={itemLabel}
                            value={itemValue}
                            key={itemId}
                            control={
                                <Radio
                                    id={itemId}
                                    size="medium"
                                    sx={{
                                        "& .MuiSvgIcon-root": {
                                            fontSize,
                                        },
                                    }}
                                />
                            }
                            sx={{
                                "& .MuiFormControlLabel-label": {
                                    fontSize,
                                },
                            }}
                        />
                    );
                })}
            </MUIRadioGroup>
        </FormControl>
    );
}
