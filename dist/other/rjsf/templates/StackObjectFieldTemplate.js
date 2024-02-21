import Stack from "@mui/material/Stack";
import React from "react";
export function StackObjectFieldTemplate(props) {
    const { properties } = props;
    return (React.createElement(Stack, { width: "100%", spacing: 2 }, properties.map((element) => element === null || element === void 0 ? void 0 : element.content)));
}
