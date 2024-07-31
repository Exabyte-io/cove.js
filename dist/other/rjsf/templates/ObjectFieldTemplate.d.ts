import { FormContextType, ObjectFieldTemplateProps, RJSFSchema, StrictRJSFSchema } from "@rjsf/utils";
import React from "react";
export default function ObjectFieldTemplate<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(props: ObjectFieldTemplateProps<T, S, F>): React.JSX.Element;
