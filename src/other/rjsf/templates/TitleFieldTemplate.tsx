/* eslint-disable @typescript-eslint/no-explicit-any */
import Typography from "@mui/material/Typography";
import { FormContextType, RJSFSchema, StrictRJSFSchema, TitleFieldProps } from "@rjsf/utils";
import React from "react";

export default function TitleFieldTemplate<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>({ id, title }: TitleFieldProps<T, S, F>) {
    return (
        <Typography id={id} variant="caption" className="TitleFieldTemplate">
            <b>{title}</b>
        </Typography>
    );
}
