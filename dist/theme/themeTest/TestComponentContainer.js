import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
function TestComponentContainer({ title, children, }) {
    return (React.createElement(Paper, { sx: { p: 2, m: 2 }, elevation: 1 },
        React.createElement(Stack, { spacing: 2, alignItems: "center" },
            title && React.createElement(Typography, { variant: "h6" }, title),
            children)));
}
export default TestComponentContainer;
