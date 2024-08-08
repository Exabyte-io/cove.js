/* eslint-disable react/jsx-props-no-spreading */
import LoadingButton from "@mui/lab/LoadingButton";
import Button, { ButtonProps } from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React, { useCallback } from "react";

import IconByName from "../icon/IconByName";

export interface DialogModalProps extends DialogProps {
    id?: string;
    titleComponent?: string | React.ReactNode;
    open: boolean;
    scrollable?: boolean;
    onSubmit?: (() => void) | undefined;
    onClose?: (() => void) | undefined;
    onCancel?: (() => void) | undefined;
    children?: React.ReactNode;
    maxWidth?: false | "md" | "xs" | "sm" | "lg" | "xl" | undefined;
    dividers?: boolean;
    isSubmitButtonDisabled?: boolean;
    isSubmitButtonProcessing?: boolean;
    isSubmitOnEnter?: boolean;
    renderHeaderCustom?: () => React.ReactNode;
    renderBodyCustom?: () => React.ReactNode;
    renderFooterCustom?: () => React.ReactNode;
    submitButtonText?: string;
    cancelButtonText?: string;
    submitButtonProps?: ButtonProps;
    cancelButtonProps?: ButtonProps;
    draggableId?: string;
}

function DialogModal({
    id = "modal-dialog",
    title,
    titleComponent,
    open,
    scrollable,
    scroll = "paper",
    onSubmit = undefined,
    onCancel,
    onClose,
    children,
    maxWidth = "sm",
    dividers = true,
    fullWidth = true,
    isSubmitButtonDisabled = false,
    isSubmitButtonProcessing = false,
    isSubmitOnEnter = false,
    renderHeaderCustom,
    renderBodyCustom,
    renderFooterCustom,
    submitButtonText = "Submit",
    cancelButtonText = "Cancel",
    submitButtonProps,
    cancelButtonProps,
    PaperComponent,
    draggableId,
    ...originalProps
}: DialogModalProps) {
    const handleSubmit = () => {
        if (onSubmit) onSubmit();
    };

    const handleCancel = () => {
        if (onCancel) onCancel();
        if (onClose) onClose();
    };

    const handleSubmitOnEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (isSubmitOnEnter && event.key === "Enter") {
            if (onSubmit) onSubmit();
        }
    };

    const renderHeaderDefault = useCallback(() => {
        return (
            <DialogTitle
                id={draggableId}
                component="div"
                sx={{ cursor: draggableId ? "move" : "initial" }}>
                <Grid container justifyContent="space-between">
                    {titleComponent || (
                        <Typography id={`${id}-modal-title`} noWrap variant="h6">
                            {title}
                        </Typography>
                    )}
                    {onClose && (
                        <IconButton id={`${id}-close-button`} color="secondary" onClick={onClose}>
                            <IconByName name="actions.close" fontSize="small" />
                        </IconButton>
                    )}
                </Grid>
            </DialogTitle>
        );
    }, [title, titleComponent]);

    const renderBodyDefault = () => {
        return (
            <DialogContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    overflow: scrollable ? "auto" : "hidden",
                }}
                dividers={dividers}>
                {children}
            </DialogContent>
        );
    };

    const renderFooterDefault = () => {
        return (
            <DialogActions>
                <Button
                    id={`${id}-cancel-button`}
                    variant="text"
                    data-dismiss="modal"
                    aria-label={cancelButtonText}
                    onClick={handleCancel}
                    {...cancelButtonProps}>
                    {cancelButtonText}
                </Button>
                <LoadingButton
                    id={`${id}-submit-button`}
                    loading={isSubmitButtonProcessing}
                    variant="text"
                    aria-label={submitButtonText}
                    disabled={isSubmitButtonDisabled || isSubmitButtonProcessing}
                    onClick={handleSubmit}
                    {...submitButtonProps}>
                    {submitButtonText}
                </LoadingButton>
            </DialogActions>
        );
    };

    return (
        <Dialog
            id={id}
            open={open}
            onClose={onClose}
            onSubmit={onSubmit}
            maxWidth={maxWidth}
            scroll={scroll}
            fullWidth={fullWidth}
            onKeyUp={handleSubmitOnEnter}
            PaperComponent={PaperComponent}
            {...originalProps}>
            {renderHeaderCustom ? renderHeaderCustom() : renderHeaderDefault()}
            {renderBodyCustom ? renderBodyCustom() : renderBodyDefault()}
            {renderFooterCustom ? renderFooterCustom() : renderFooterDefault()}
        </Dialog>
    );
}
export default DialogModal;
