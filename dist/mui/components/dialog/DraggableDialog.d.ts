import React from "react";
import { DialogModalProps } from "./Dialog";
export interface DraggableDialogProps extends DialogModalProps {
    draggableId: string;
}
export default function DraggableDialog(props: DraggableDialogProps): React.JSX.Element;
