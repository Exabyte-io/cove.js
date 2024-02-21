import React from "react";
export interface AvailableValue {
    id: string | undefined;
    name: string;
}
type BasicSelectProps = {
    id: string;
    disabled?: boolean;
    selectedValue: string;
    options: AvailableValue[];
    onChange: (newValue: string) => void;
    label: string;
    labelAsPlaceholder?: boolean;
    renderMenuItemContent?: (value: AvailableValue) => JSX.Element;
};
export default function BasicSelect({ id, disabled, selectedValue, options, onChange, // eslint-disable-line @typescript-eslint/no-empty-function
label, labelAsPlaceholder, renderMenuItemContent, }: BasicSelectProps): React.JSX.Element;
export {};
