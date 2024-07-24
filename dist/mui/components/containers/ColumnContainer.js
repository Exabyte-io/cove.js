import Stack from "@mui/material/Stack";
import React from "react";
export default function ColumnContainer({ children }) {
    return React.createElement(Stack, { overflow: "hidden" }, children);
}
