import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { DragDropContext, Droppable, OnDragEndResponder } from "react-beautiful-dnd";

interface Props {
    droppableId: string;
    onDragEnd: OnDragEndResponder;
    spacing: number;
    children: React.ReactNode | React.ReactNode[];
}

export default function DroppableGrid({ droppableId, onDragEnd, spacing, children }: Props) {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={droppableId}>
                {(provided) => {
                    return (
                        <Grid
                            container
                            spacing={spacing}
                            ref={provided.innerRef}
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...provided.droppableProps}>
                            {children}
                            {provided.placeholder}
                        </Grid>
                    );
                }}
            </Droppable>
        </DragDropContext>
    );
}
