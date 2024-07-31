/* eslint-disable react/jsx-props-no-spreading */
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React, { useCallback } from "react";
import IconByName from "../icon/IconByName";
function DialogModal({ id = "modal-dialog", title, titleComponent, open, scroll = "paper", onSubmit = undefined, onCancel, onClose, children, maxWidth = "sm", dividers = true, fullWidth = true, isSubmitButtonDisabled = false, isSubmitButtonProcessing = false, isSubmitOnEnter = false, renderHeaderCustom, renderBodyCustom, renderFooterCustom, submitButtonText = "Submit", cancelButtonText = "Cancel", submitButtonProps, cancelButtonProps, PaperComponent, draggableId, ...originalProps }) {
    const handleSubmit = () => {
        if (onSubmit)
            onSubmit();
    };
    const handleCancel = () => {
        if (onCancel)
            onCancel();
        if (onClose)
            onClose();
    };
    const handleSubmitOnEnter = (event) => {
        if (isSubmitOnEnter && event.key === "Enter") {
            if (onSubmit)
                onSubmit();
        }
    };
    const renderHeaderDefault = useCallback(() => {
        return (React.createElement(DialogTitle, { id: draggableId, component: "div", sx: { cursor: draggableId ? "move" : "initial" } },
            React.createElement(Grid, { container: true, justifyContent: "space-between" },
                titleComponent || (React.createElement(Typography, { id: `${id}-modal-title`, noWrap: true, variant: "h6" }, title)),
                onClose && (React.createElement(IconButton, { id: `${id}-close-button`, color: "secondary", onClick: onClose },
                    React.createElement(IconByName, { name: "actions.close", fontSize: "small" }))))));
    }, [title, titleComponent]);
    const renderBodyDefault = () => {
        return (React.createElement(DialogContent, { sx: {
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
            }, dividers: dividers }, children));
    };
    const renderFooterDefault = () => {
        return (React.createElement(DialogActions, null,
            React.createElement(Button, { id: `${id}-cancel-button`, variant: "text", "data-dismiss": "modal", "aria-label": cancelButtonText, onClick: handleCancel, ...cancelButtonProps }, cancelButtonText),
            React.createElement(LoadingButton, { id: `${id}-submit-button`, loading: isSubmitButtonProcessing, variant: "text", "aria-label": submitButtonText, disabled: isSubmitButtonDisabled || isSubmitButtonProcessing, onClick: handleSubmit, ...submitButtonProps }, submitButtonText)));
    };
    return (React.createElement(Dialog, { id: id, open: open, onClose: onClose, onSubmit: onSubmit, maxWidth: maxWidth, scroll: scroll, fullWidth: fullWidth, onKeyUp: handleSubmitOnEnter, PaperComponent: PaperComponent, ...originalProps },
        renderHeaderCustom ? renderHeaderCustom() : renderHeaderDefault(),
        renderBodyCustom ? renderBodyCustom() : renderBodyDefault(),
        renderFooterCustom ? renderFooterCustom() : renderFooterDefault()));
}
export default DialogModal;
