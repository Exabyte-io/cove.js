import { TextFieldProps } from "@mui/material/TextField";
import { WidgetProps } from "@rjsf/utils";
import React from "react";
export declare function TextWidget({ size, variant, password, }: {
    size?: TextFieldProps["size"];
    variant?: TextFieldProps["variant"];
    password?: boolean;
}): (props: WidgetProps) => React.JSX.Element;
