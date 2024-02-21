import { FormControlProps } from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
export interface SelectProps {
    id: string;
    label?: string;
    multiple?: boolean;
    items: {
        id: string;
        name: string;
        value: string | number;
    }[];
    value: "" | string[] | undefined;
    size?: "small" | "medium";
    sx?: object;
    fontSize?: number;
    onChange: (event: SelectChangeEvent<string[]>) => void;
    isChips?: boolean;
    onDelete?: (event: string) => void;
    getChipLabel?: (value: string) => string;
    formControlProps: FormControlProps;
}
export default function SelectComponent({ id, items, label, value, size, onChange, onDelete, isChips, multiple, sx, fontSize, getChipLabel, formControlProps, }: SelectProps): React.JSX.Element;
