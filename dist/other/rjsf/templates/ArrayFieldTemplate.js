/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { getTemplate, getUiOptions, } from "@rjsf/utils";
import React from "react";
export default function ArrayFieldTemplate(props) {
    const { canAdd, disabled, idSchema, uiSchema, items, onAddClick, readonly, registry, required, schema, title, } = props;
    const uiOptions = getUiOptions(uiSchema);
    const ArrayFieldDescriptionTemplate = getTemplate("ArrayFieldDescriptionTemplate", registry, uiOptions);
    const ArrayFieldItemTemplate = getTemplate("ArrayFieldItemTemplate", registry, uiOptions);
    const ArrayFieldTitleTemplate = getTemplate("ArrayFieldTitleTemplate", registry, uiOptions);
    // Button templates are not overridden in the uiSchema
    const { ButtonTemplates: { AddButton }, } = registry.templates;
    return (React.createElement(Stack, { spacing: 1, className: "ArrayFieldTemplate" },
        React.createElement(ArrayFieldTitleTemplate, { idSchema: idSchema, title: uiOptions.title || title, schema: schema, uiSchema: uiSchema, required: required, registry: registry }),
        React.createElement(ArrayFieldDescriptionTemplate, { idSchema: idSchema, description: uiOptions.description || schema.description, schema: schema, uiSchema: uiSchema, registry: registry }),
        items ? (React.createElement(Stack, { spacing: 1, className: "ArrayFieldTemplateItems" }, items.map(({ key, ...itemProps }) => (React.createElement(ArrayFieldItemTemplate, { key: key, ...itemProps }))))) : null,
        canAdd && (React.createElement(Grid, { container: true, justifyContent: "flex-end" },
            React.createElement(Grid, { item: true },
                React.createElement(Box, { mt: 2 },
                    React.createElement(AddButton, { className: "array-item-add", onClick: onAddClick, disabled: disabled || readonly, uiSchema: uiSchema, registry: registry })))))));
}
