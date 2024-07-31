/* eslint-disable @typescript-eslint/no-explicit-any */
import Grid from "@mui/material/Grid";
import React from "react";
export default function ArrayFieldItemTemplate(props) {
    const { children, disabled, hasToolbar, hasCopy, hasMoveDown, hasMoveUp, hasRemove, index, onCopyIndexClick, onDropIndexClick, onReorderClick, readonly, uiSchema, registry, } = props;
    const { CopyButton, MoveDownButton, MoveUpButton, RemoveButton } = registry.templates.ButtonTemplates;
    const btnStyle = {
        flex: 1,
        paddingLeft: 6,
        paddingRight: 6,
        fontWeight: "bold",
        minWidth: 0,
    };
    return (React.createElement(Grid, { container: true, alignItems: "center", className: "ArrayFieldItemTemplate" },
        React.createElement(Grid, { item: true, xs: true, style: { overflow: "visible" } }, children),
        hasToolbar && (React.createElement(Grid, { item: true },
            (hasMoveUp || hasMoveDown) && (React.createElement(MoveUpButton, { style: btnStyle, disabled: disabled || readonly || !hasMoveUp, onClick: onReorderClick(index, index - 1), uiSchema: uiSchema, registry: registry })),
            (hasMoveUp || hasMoveDown) && (React.createElement(MoveDownButton, { style: btnStyle, disabled: disabled || readonly || !hasMoveDown, onClick: onReorderClick(index, index + 1), uiSchema: uiSchema, registry: registry })),
            hasCopy && (React.createElement(CopyButton, { style: btnStyle, disabled: disabled || readonly, onClick: onCopyIndexClick(index), uiSchema: uiSchema, registry: registry })),
            hasRemove && (React.createElement(RemoveButton, { style: btnStyle, disabled: disabled || readonly, onClick: onDropIndexClick(index), uiSchema: uiSchema, registry: registry, className: "array-item-remove" }))))));
}
