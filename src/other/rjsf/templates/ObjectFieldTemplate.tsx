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
} from "@rjsf/utils";
import React from "react";

function schemaHasInnerObjects(schema: StrictRJSFSchema): boolean {
    return Object.values(schema.properties || {}).some((innerSchema) => {
        if (typeof innerSchema === "object" && typeof innerSchema.items === "boolean") {
            return false;
        }

        if (typeof innerSchema === "object" && Array.isArray(innerSchema.items)) {
            return innerSchema.items.some(
                (item) => typeof item === "object" && Boolean(item.properties),
            );
        }

        if (
            typeof innerSchema === "object" &&
            typeof innerSchema.items === "object" &&
            !Array.isArray(innerSchema.items)
        ) {
            return Boolean(innerSchema.items.properties);
        }

        return typeof innerSchema === "object" && Boolean(innerSchema.properties);
    });
}

export default function ObjectFieldTemplate<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>(props: ObjectFieldTemplateProps<T, S, F>) {
    const {
        description,
        properties,
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

    const DescriptionFieldTemplate = getTemplate<"DescriptionFieldTemplate", T, S, F>(
        "DescriptionFieldTemplate",
        registry,
        uiOptions,
    );

    // Button templates are not overridden in the uiSchema
    const {
        ButtonTemplates: { AddButton },
    } = registry.templates;

    const hasInnerObjects = schemaHasInnerObjects(schema);

    return (
        <Box className="ObjectFieldTemplate">
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
                {properties.map((element, index) => {
                    // Remove the <Grid> if the inner element is hidden as the <Grid>
                    // itself would otherwise still take up space.
                    return element.hidden ? (
                        element.content
                    ) : (
                        <Grid
                            item
                            xs={12}
                            sm={hasInnerObjects ? 12 : 4}
                            // md={4}
                            key={index}
                            style={{ marginBottom: "10px" }}>
                            {element.content}
                        </Grid>
                    );
                })}
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
