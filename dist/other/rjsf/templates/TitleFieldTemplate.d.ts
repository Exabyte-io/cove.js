import { FormContextType, RJSFSchema, StrictRJSFSchema, TitleFieldProps } from "@rjsf/utils";
import React from "react";
export default function TitleFieldTemplate<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({ id, title }: TitleFieldProps<T, S, F>): React.JSX.Element;
