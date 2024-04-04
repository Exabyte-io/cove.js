/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { canExpand, descriptionId, getTemplate, getUiOptions, titleId, } from "@rjsf/utils";
import React from "react";
/** The `ObjectFieldTemplate` is the template to use to render all the inner properties of an object along with the
 * title and description if available. If the object is expandable, then an `AddButton` is also rendered after all
 * the properties.
 *
 * @param props - The `ObjectFieldTemplateProps` for this component
 */
function ObjectFieldTemplate({ description, title, properties, required, disabled, readonly, uiSchema, idSchema, schema, formData, onAddClick, registry, }) {
    const theme = useTheme();
    const uiOptions = getUiOptions(uiSchema);
    const TitleFieldTemplate = getTemplate("TitleFieldTemplate", registry, uiOptions);
    const DescriptionFieldTemplate = getTemplate("DescriptionFieldTemplate", registry, uiOptions);
    // Button templates are not overridden in the uiSchema
    const { ButtonTemplates: { AddButton }, } = registry.templates;
    return (React.createElement(React.Fragment, null,
        title && (React.createElement(TitleFieldTemplate, { id: titleId(idSchema), title: title, required: required, schema: schema, uiSchema: uiSchema, registry: registry })),
        description && (React.createElement(DescriptionFieldTemplate, { id: descriptionId(idSchema), description: description, schema: schema, uiSchema: uiSchema, registry: registry })),
        React.createElement(Grid, { container: true, spacing: 2 },
            properties.map((element, index) => 
            // Remove the <Grid> if the inner element is hidden as the <Grid>
            // itself would otherwise still take up space.
            element.hidden ? (element.content) : (React.createElement(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, xl: 2, key: index, rowSpacing: theme.spacing(1.25) }, element.content))),
            canExpand(schema, uiSchema, formData) && (React.createElement(Grid, { container: true, justifyContent: "flex-end" },
                React.createElement(Grid, { item: true },
                    React.createElement(AddButton, { className: "object-property-expand", onClick: onAddClick(schema), disabled: disabled || readonly, uiSchema: uiSchema, registry: registry })))))));
}
export default ObjectFieldTemplate;
