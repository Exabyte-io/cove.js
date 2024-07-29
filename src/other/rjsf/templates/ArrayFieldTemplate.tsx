/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import {
    ArrayFieldTemplateItemType,
    ArrayFieldTemplateProps,
    FormContextType,
    getTemplate,
    getUiOptions,
    RJSFSchema,
    StrictRJSFSchema,
} from "@rjsf/utils";
import React from "react";

export default function ArrayFieldTemplate<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>(props: ArrayFieldTemplateProps<T, S, F>) {
    const {
        canAdd,
        disabled,
        idSchema,
        uiSchema,
        items,
        onAddClick,
        readonly,
        registry,
        required,
        schema,
        title,
    } = props;
    const uiOptions = getUiOptions<T, S, F>(uiSchema);
    const ArrayFieldDescriptionTemplate = getTemplate<"ArrayFieldDescriptionTemplate", T, S, F>(
        "ArrayFieldDescriptionTemplate",
        registry,
        uiOptions,
    );
    const ArrayFieldItemTemplate = getTemplate<"ArrayFieldItemTemplate", T, S, F>(
        "ArrayFieldItemTemplate",
        registry,
        uiOptions,
    );
    const ArrayFieldTitleTemplate = getTemplate<"ArrayFieldTitleTemplate", T, S, F>(
        "ArrayFieldTitleTemplate",
        registry,
        uiOptions,
    );
    // Button templates are not overridden in the uiSchema
    const {
        ButtonTemplates: { AddButton },
    } = registry.templates;

    return (
        <Stack spacing={1} className="ArrayFieldTemplate">
            <ArrayFieldTitleTemplate
                idSchema={idSchema}
                title={uiOptions.title || title}
                schema={schema}
                uiSchema={uiSchema}
                required={required}
                registry={registry}
            />
            <ArrayFieldDescriptionTemplate
                idSchema={idSchema}
                description={uiOptions.description || schema.description}
                schema={schema}
                uiSchema={uiSchema}
                registry={registry}
            />
            {items &&
                items.map(({ key, ...itemProps }: ArrayFieldTemplateItemType<T, S, F>) => (
                    <ArrayFieldItemTemplate key={key} {...itemProps} />
                ))}
            {canAdd && (
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Box mt={2}>
                            <AddButton
                                className="array-item-add"
                                onClick={onAddClick}
                                disabled={disabled || readonly}
                                uiSchema={uiSchema}
                                registry={registry}
                            />
                        </Box>
                    </Grid>
                </Grid>
            )}
        </Stack>
    );
}
