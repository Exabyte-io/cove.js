/* eslint-disable react/jsx-props-no-spreading */
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
export default function DraggableGrid({ draggableId, index, xs, md, xl, children }) {
    return (React.createElement(Draggable, { draggableId: draggableId, index: index }, (provided) => {
        return (React.createElement(Grid, { xs: xs, md: md, xl: xl, ref: provided.innerRef, ...provided.draggableProps, ...provided.dragHandleProps }, children));
    }));
}
