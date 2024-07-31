/* eslint-disable react/jsx-props-no-spreading */
import { Widgets } from "@rjsf/mui";
import { BaseInputTemplateProps } from "@rjsf/utils";
import React from "react";

export default function SelectWidget(props: BaseInputTemplateProps) {
    return <Widgets.SelectWidget {...props} size="small" />;
}
