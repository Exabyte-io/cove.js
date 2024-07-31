/* eslint-disable @typescript-eslint/no-explicit-any */
import Typography from "@mui/material/Typography";
import React from "react";
export default function TitleFieldTemplate({ id, title }) {
    return (React.createElement(Typography, { id: id, variant: "caption", className: "TitleFieldTemplate" },
        React.createElement("b", null, title)));
}
