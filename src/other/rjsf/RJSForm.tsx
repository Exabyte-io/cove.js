/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import { FormProps } from "@rjsf/core";
import Form from "@rjsf/mui";
import { RJSFSchema } from "@rjsf/utils";
import React from "react";

import ArrayFieldItemTemplate from "./templates/ArrayFieldItemTemplate";
import ArrayFieldTemplate from "./templates/ArrayFieldTemplate";
import BaseInputTemplate from "./templates/BaseInputTemplate";
import DescriptionFieldTemplate from "./templates/DescriptionFieldTemplate";
import ObjectFieldTemplate from "./templates/ObjectFieldTemplate";
import TitleFieldTemplate from "./templates/TitleFieldTemplate";
import SelectWidget from "./widgets/SelectWidget";

export default function RJSForm({ widgets, templates, ...props }: FormProps<any, RJSFSchema, any>) {
    return (
        <Form
            {...props}
            templates={{
                ObjectFieldTemplate,
                BaseInputTemplate,
                ArrayFieldTemplate,
                ArrayFieldItemTemplate,
                TitleFieldTemplate,
                DescriptionFieldTemplate,
                ...templates,
            }}
            widgets={{ SelectWidget, ...widgets }}
        />
    );
}
