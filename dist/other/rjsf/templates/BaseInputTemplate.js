/* eslint-disable react/jsx-props-no-spreading */
import { Templates } from "@rjsf/mui";
import React from "react";
export default function BaseInputTemplate(props) {
    if (Templates.BaseInputTemplate) {
        return React.createElement(Templates.BaseInputTemplate, { ...props, size: "small" });
    }
    return null;
}
