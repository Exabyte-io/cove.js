import Box from "@mui/material/Box";
import React from "react";
export default function ColumnContainer({ children }) {
    return (React.createElement(Box, { display: "flex", flexDirection: "column", overflow: "hidden" }, children));
}
