/* eslint-disable @typescript-eslint/no-explicit-any */
import Typography from "@mui/material/Typography";
import { DescriptionFieldProps, FormContextType, RJSFSchema, StrictRJSFSchema } from "@rjsf/utils";
import React from "react";

/** The `DescriptionField` is the template to use to render the description of a field
 *
 * @param props - The `DescriptionFieldProps` for this component
 */
export default function DescriptionFieldTemplate<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>(props: DescriptionFieldProps<T, S, F>) {
    const { id, description } = props;
    if (description) {
        return (
            <Typography id={id} variant="subtitle2" sx={{ mb: 10 }}>
                {description}
            </Typography>
        );
    }

    return null;
}
