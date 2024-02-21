import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
export default function DroppableGrid({ droppableId, onDragEnd, spacing, children }) {
    return (React.createElement(DragDropContext, { onDragEnd: onDragEnd },
        React.createElement(Droppable, { droppableId: droppableId }, (provided) => {
            return (React.createElement(Grid, { container: true, spacing: spacing, ref: provided.innerRef, ...provided.droppableProps },
                children,
                provided.placeholder));
        })));
}
