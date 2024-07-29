/* eslint-disable react/jsx-props-no-spreading */
import { FormProps } from "@rjsf/core";
import Form from "@rjsf/mui";
import { RJSFSchema } from "@rjsf/utils";
import React from "react";

import ArrayFieldItemTemplate from "./templates/ArrayFieldItemTemplate";
import ArrayFieldTemplate from "./templates/ArrayFieldTemplate";
import BaseInputTemplate from "./templates/BaseInputTemplate";
import ObjectFieldTemplate from "./templates/ObjectFieldTemplate";
import TitleFieldTemplate from "./templates/TitleFieldTemplate";
import SelectWidget from "./widgets/SelectWidget";

export default function RJSFForm(props: FormProps<any, RJSFSchema, any>) {
    return (
        <Form
            {...props}
            templates={{
                ObjectFieldTemplate,
                BaseInputTemplate,
                ArrayFieldTemplate,
                ArrayFieldItemTemplate,
                TitleFieldTemplate,
            }}
            widgets={{ SelectWidget }}
        />
    );
}
