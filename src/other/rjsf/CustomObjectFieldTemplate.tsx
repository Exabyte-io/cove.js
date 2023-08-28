/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
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

/** The `ObjectFieldTemplate` is the template to use to render all the inner properties of an object along with the
 * title and description if available. If the object is expandable, then an `AddButton` is also rendered after all
 * the properties.
 *
 * @param props - The `ObjectFieldTemplateProps` for this component
 */
function ObjectFieldTemplate<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>({
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
}: ObjectFieldTemplateProps<T, S, F>) {
    const theme = useTheme();
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
        <>
            {title && (
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
                            sm={6}
                            md={4}
                            lg={3}
                            xl={2}
                            key={index}
                            rowSpacing={theme.spacing(1.25)}>
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
        </>
    );
}

export default ObjectFieldTemplate;
