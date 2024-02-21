import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { Content, Header, InfoWidgetContainer } from "./InfoWidget.styled";
export default function InfoWidget({ title, description, button, content }) {
    return (React.createElement(InfoWidgetContainer, null,
        React.createElement(Header, null,
            React.createElement(Box, null,
                React.createElement(Box, null,
                    React.createElement(Typography, { variant: "h6" }, title)),
                React.createElement(Box, null,
                    React.createElement(Typography, { variant: "body2" }, description))),
            button),
        React.createElement(Content, null, content)));
}
