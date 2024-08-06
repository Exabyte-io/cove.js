/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { canExpand, descriptionId, getTemplate, getUiOptions, } from "@rjsf/utils";
import React from "react";
function schemaHasInnerObjects(schema) {
    return Object.values(schema.properties || {}).some((innerSchema) => {
        if (typeof innerSchema === "object" && typeof innerSchema.items === "boolean") {
            return false;
        }
        if (typeof innerSchema === "object" && Array.isArray(innerSchema.items)) {
            return innerSchema.items.some((item) => typeof item === "object" && Boolean(item.properties));
        }
        if (typeof innerSchema === "object" &&
            typeof innerSchema.items === "object" &&
            !Array.isArray(innerSchema.items)) {
            return Boolean(innerSchema.items.properties);
        }
        return typeof innerSchema === "object" && Boolean(innerSchema.properties);
    });
}
export default function ObjectFieldTemplate(props) {
    const { description, properties, disabled, readonly, uiSchema, idSchema, schema, formData, onAddClick, registry, } = props;
    const uiOptions = getUiOptions(uiSchema);
    const DescriptionFieldTemplate = getTemplate("DescriptionFieldTemplate", registry, uiOptions);
    // Button templates are not overridden in the uiSchema
    const { ButtonTemplates: { AddButton }, } = registry.templates;
    const hasInnerObjects = schemaHasInnerObjects(schema);
    return (React.createElement(Box, { className: "ObjectFieldTemplate" },
        description && (React.createElement(DescriptionFieldTemplate, { id: descriptionId(idSchema), description: description, schema: schema, uiSchema: uiSchema, registry: registry })),
        React.createElement(Grid, { container: true, spacing: 2 },
            properties.map((element, index) => {
                // Remove the <Grid> if the inner element is hidden as the <Grid>
                // itself would otherwise still take up space.
                return element.hidden ? (element.content) : (React.createElement(Grid, { item: true, xs: 12, sm: hasInnerObjects ? 12 : 4, 
                    // md={4}
                    key: index, style: { marginBottom: "10px" } }, element.content));
            }),
            canExpand(schema, uiSchema, formData) && (React.createElement(Grid, { container: true, justifyContent: "flex-end" },
                React.createElement(Grid, { item: true },
                    React.createElement(AddButton, { className: "object-property-expand", onClick: onAddClick(schema), disabled: disabled || readonly, uiSchema: uiSchema, registry: registry })))))));
}
