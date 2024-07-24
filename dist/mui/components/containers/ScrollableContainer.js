import Box from "@mui/material/Box";
import React from "react";
export default function ScrollableContainer({ children }) {
    return React.createElement(Box, { overflow: "auto" }, children);
}
