import React from "react";
export interface AlertDialogProps {
    title: string;
    text: string;
    onCloseClick: () => void;
}
export default function AlertDialog({ title, text, onCloseClick }: AlertDialogProps): React.JSX.Element;
