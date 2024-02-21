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
export default function RadioGroup({ id, label, items, value, fontSize, onChange, }: RadioGroupProps): React.JSX.Element;
export {};
