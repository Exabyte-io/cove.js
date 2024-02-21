/* eslint-disable react/jsx-props-no-spreading */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import IconByName from "../icon/IconByName";
export default function UploadButton({ id, label, file, accept = "*", onFileUpload, buttonProps, }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { id: `${id}-button`, component: "label", variant: "outlined", startIcon: React.createElement(IconByName, { name: "actions.uploadFile" }), ...buttonProps },
            label,
            React.createElement("input", { id: id, type: "file", accept: accept, style: { display: "none" }, onChange: onFileUpload })),
        file ? React.createElement(Box, null, file.name) : null));
}
