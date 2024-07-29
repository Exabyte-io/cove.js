/* eslint-disable @typescript-eslint/no-explicit-any */
import Typography from "@mui/material/Typography";
import React from "react";
/** The `DescriptionField` is the template to use to render the description of a field
 *
 * @param props - The `DescriptionFieldProps` for this component
 */
export default function DescriptionFieldTemplate(props) {
    const { id, description } = props;
    if (description) {
        return (React.createElement(Typography, { id: id, variant: "subtitle2", style: { marginTop: "5px" } }, description));
    }
    return null;
}
