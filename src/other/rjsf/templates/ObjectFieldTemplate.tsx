/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
    canExpand,
    descriptionId,
    FormContextType,
    getTemplate,
    getUiOptions,
    ObjectFieldTemplateProps,
    RJSFSchema,
    StrictRJSFSchema,
    titleId,
} from "@rjsf/utils";
import React from "react";

function isNumeric(str: string) {
    return (
        !Number.isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !Number.isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    );
}

export default function ObjectFieldTemplate<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>(props: ObjectFieldTemplateProps<T, S, F>) {
    const {
        description,
        title,
        properties,
        required,
        disabled,
        readonly,
        uiSchema,
        idSchema,
        schema,
        formData,
        onAddClick,
        registry,
    } = props;

    const uiOptions = getUiOptions<T, S, F>(uiSchema);

    const TitleFieldTemplate = getTemplate<"TitleFieldTemplate", T, S, F>(
        "TitleFieldTemplate",
        registry,
        uiOptions,
    );

    const DescriptionFieldTemplate = getTemplate<"DescriptionFieldTemplate", T, S, F>(
        "DescriptionFieldTemplate",
        registry,
        uiOptions,
    );

    // Button templates are not overridden in the uiSchema
    const {
        ButtonTemplates: { AddButton },
    } = registry.templates;

    return (
        <Box className="ObjectFieldTemplate">
            {title && !isNumeric(title) && (
                <TitleFieldTemplate
                    id={titleId<T>(idSchema)}
                    title={title}
                    required={required}
                    schema={schema}
                    uiSchema={uiSchema}
                    registry={registry}
                />
            )}
            {description && (
                <DescriptionFieldTemplate
                    id={descriptionId<T>(idSchema)}
                    description={description}
                    schema={schema}
                    uiSchema={uiSchema}
                    registry={registry}
                />
            )}
            <Grid container spacing={2}>
                {properties.map((element, index) =>
                    // Remove the <Grid> if the inner element is hidden as the <Grid>
                    // itself would otherwise still take up space.
                    element.hidden ? (
                        element.content
                    ) : (
                        <Grid
                            item
                            xs={12}
                            sm={4}
                            // md={4}
                            key={index}
                            style={{ marginBottom: "10px" }}>
                            {element.content}
                        </Grid>
                    ),
                )}
                {canExpand<T, S, F>(schema, uiSchema, formData) && (
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <AddButton
                                className="object-property-expand"
                                onClick={onAddClick(schema)}
                                disabled={disabled || readonly}
                                uiSchema={uiSchema}
                                registry={registry}
                            />
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}
