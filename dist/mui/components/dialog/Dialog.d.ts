import { ButtonProps } from "@mui/material/Button";
import { DialogProps } from "@mui/material/Dialog";
import React from "react";
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
declare function DialogModal({ id, title, titleComponent, open, scrollable, scroll, onSubmit, onCancel, onClose, children, maxWidth, dividers, fullWidth, isSubmitButtonDisabled, isSubmitButtonProcessing, isSubmitOnEnter, renderHeaderCustom, renderBodyCustom, renderFooterCustom, submitButtonText, cancelButtonText, submitButtonProps, cancelButtonProps, PaperComponent, draggableId, ...originalProps }: DialogModalProps): React.JSX.Element;
export default DialogModal;
