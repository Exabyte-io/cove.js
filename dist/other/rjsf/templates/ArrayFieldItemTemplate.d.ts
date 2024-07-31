import { ArrayFieldTemplateItemType, FormContextType, RJSFSchema, StrictRJSFSchema } from "@rjsf/utils";
import React from "react";
export default function ArrayFieldItemTemplate<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>(props: ArrayFieldTemplateItemType<T, S, F>): React.JSX.Element;
