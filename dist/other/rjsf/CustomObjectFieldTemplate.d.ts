import { FormContextType, ObjectFieldTemplateProps, RJSFSchema, StrictRJSFSchema } from "@rjsf/utils";
import React from "react";
/** The `ObjectFieldTemplate` is the template to use to render all the inner properties of an object along with the
 * title and description if available. If the object is expandable, then an `AddButton` is also rendered after all
 * the properties.
 *
 * @param props - The `ObjectFieldTemplateProps` for this component
 */
declare function ObjectFieldTemplate<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({ description, title, properties, required, disabled, readonly, uiSchema, idSchema, schema, formData, onAddClick, registry, }: ObjectFieldTemplateProps<T, S, F>): React.JSX.Element;
export default ObjectFieldTemplate;
