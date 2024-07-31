/* eslint-disable react/jsx-props-no-spreading */
import { Templates } from "@rjsf/mui";
import { BaseInputTemplateProps } from "@rjsf/utils";
import React from "react";

export default function BaseInputTemplate(props: BaseInputTemplateProps) {
    if (Templates.BaseInputTemplate) {
        return <Templates.BaseInputTemplate {...props} size="small" />;
    }
    return null;
}
