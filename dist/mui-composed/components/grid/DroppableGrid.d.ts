import React from "react";
import { OnDragEndResponder } from "react-beautiful-dnd";
interface Props {
    droppableId: string;
    onDragEnd: OnDragEndResponder;
    spacing: number;
    children: React.ReactNode | React.ReactNode[];
}
export default function DroppableGrid({ droppableId, onDragEnd, spacing, children }: Props): React.JSX.Element;
export {};
