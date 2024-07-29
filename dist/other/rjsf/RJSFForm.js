import Form from "@rjsf/mui";
import React from "react";
import ArrayFieldItemTemplate from "./templates/ArrayFieldItemTemplate";
import ArrayFieldTemplate from "./templates/ArrayFieldTemplate";
import BaseInputTemplate from "./templates/BaseInputTemplate";
import ObjectFieldTemplate from "./templates/ObjectFieldTemplate";
import TitleFieldTemplate from "./templates/TitleFieldTemplate";
import SelectWidget from "./widgets/SelectWidget";
export default function RJSFForm(props) {
    return (React.createElement(Form, { ...props, templates: {
            ObjectFieldTemplate,
            BaseInputTemplate,
            ArrayFieldTemplate,
            ArrayFieldItemTemplate,
            TitleFieldTemplate,
        }, widgets: { SelectWidget } }));
}
