import TextField, { TextFieldProps } from "@mui/material/TextField";
import { getDisplayLabel, WidgetProps } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import React from "react";

export function TextWidget({
    size = "medium",
    variant = "outlined",
    password = false,
}: {
    size?: TextFieldProps["size"];
    variant?: TextFieldProps["variant"];
    password?: boolean;
}) {
    return function (props: WidgetProps) {
        const {
            id,
            label,
            required,
            disabled,
            readonly,
            value,
            onChange,
            onBlur,
            onFocus,
            autofocus,
            options,
            schema,
            uiSchema,
            formContext,
        } = props;

        const _onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event.target.value === "" ? options.emptyValue : event.target.value);
        const _onBlur = (event: React.FocusEvent<HTMLInputElement>) =>
            onBlur(id, event.target.value);
        const _onFocus = (event: React.FocusEvent<HTMLInputElement>) =>
            onFocus(id, event.target.value);

        const displayLabel = getDisplayLabel(validator, schema, uiSchema, formContext);
        // eslint-disable-next-line no-nested-ternary
        const type = password ? "password" : schema.type === "string" ? "text" : undefined;
        return (
            <TextField
                id={id}
                label={displayLabel ? label || schema.title : ""}
                required={required}
                autoFocus={autofocus}
                disabled={disabled || readonly}
                value={value || value === 0 ? value : ""}
                onChange={_onChange}
                onBlur={_onBlur}
                onFocus={_onFocus}
                size={size}
                variant={variant}
                type={type}
            />
        );
    };
}
