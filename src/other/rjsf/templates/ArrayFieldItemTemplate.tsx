/* eslint-disable @typescript-eslint/no-explicit-any */
import Grid from "@mui/material/Grid";
import {
    ArrayFieldTemplateItemType,
    FormContextType,
    RJSFSchema,
    StrictRJSFSchema,
} from "@rjsf/utils";
import React, { CSSProperties } from "react";

export default function ArrayFieldItemTemplate<
    T = any,
    S extends StrictRJSFSchema = RJSFSchema,
    F extends FormContextType = any,
>(props: ArrayFieldTemplateItemType<T, S, F>) {
    const {
        children,
        disabled,
        hasToolbar,
        hasCopy,
        hasMoveDown,
        hasMoveUp,
        hasRemove,
        index,
        onCopyIndexClick,
        onDropIndexClick,
        onReorderClick,
        readonly,
        uiSchema,
        registry,
    } = props;
    const { CopyButton, MoveDownButton, MoveUpButton, RemoveButton } =
        registry.templates.ButtonTemplates;
    const btnStyle: CSSProperties = {
        flex: 1,
        paddingLeft: 6,
        paddingRight: 6,
        fontWeight: "bold",
        minWidth: 0,
    };
    return (
        <Grid container alignItems="center" className="ArrayFieldItemTemplate">
            <Grid item xs style={{ overflow: "visible" }}>
                {children}
            </Grid>

            {hasToolbar && (
                <Grid item>
                    {(hasMoveUp || hasMoveDown) && (
                        <MoveUpButton
                            style={btnStyle}
                            disabled={disabled || readonly || !hasMoveUp}
                            onClick={onReorderClick(index, index - 1)}
                            uiSchema={uiSchema}
                            registry={registry}
                        />
                    )}
                    {(hasMoveUp || hasMoveDown) && (
                        <MoveDownButton
                            style={btnStyle}
                            disabled={disabled || readonly || !hasMoveDown}
                            onClick={onReorderClick(index, index + 1)}
                            uiSchema={uiSchema}
                            registry={registry}
                        />
                    )}
                    {hasCopy && (
                        <CopyButton
                            style={btnStyle}
                            disabled={disabled || readonly}
                            onClick={onCopyIndexClick(index)}
                            uiSchema={uiSchema}
                            registry={registry}
                        />
                    )}
                    {hasRemove && (
                        <RemoveButton
                            style={btnStyle}
                            disabled={disabled || readonly}
                            onClick={onDropIndexClick(index)}
                            uiSchema={uiSchema}
                            registry={registry}
                        />
                    )}
                </Grid>
            )}
        </Grid>
    );
}
