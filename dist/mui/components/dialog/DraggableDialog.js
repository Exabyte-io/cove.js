/* eslint-disable react/jsx-props-no-spreading */
import Paper from "@mui/material/Paper";
import React from "react";
import Draggable from "react-draggable";
import Dialog from "./Dialog";
function draggablePaperComponent(id) {
    return function DraggablePaper(props) {
        return (React.createElement(Draggable, { handle: `#${id}`, cancel: '[class*="MuiDialogContent-root"]' },
            React.createElement(Paper, { ...props })));
    };
}
export default function DraggableDialog(props) {
    const { id, draggableId, open, title, onClose, children } = props;
    return (React.createElement(Dialog, { id: id, title: title, open: open, onClose: onClose, disableScrollLock: true, PaperComponent: draggablePaperComponent(draggableId), draggableId: draggableId, renderFooterCustom: () => null, maxWidth: "sm" }, children));
}
