/* eslint-disable react/jsx-props-no-spreading */
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

interface Props {
    draggableId: string;
    index: number;
    children?: React.ReactNode | React.ReactNode[];
    xs?: number;
    md?: number;
    xl?: number;
}

export default function DraggableGrid({ draggableId, index, xs, md, xl, children }: Props) {
    return (
        <Draggable draggableId={draggableId} index={index}>
            {(provided) => {
                return (
                    <Grid
                        xs={xs}
                        md={md}
                        xl={xl}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        {children}
                    </Grid>
                );
            }}
        </Draggable>
    );
}
