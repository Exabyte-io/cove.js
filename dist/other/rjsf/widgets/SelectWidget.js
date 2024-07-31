/* eslint-disable react/jsx-props-no-spreading */
import { Widgets } from "@rjsf/mui";
import React from "react";
export default function SelectWidget(props) {
    return React.createElement(Widgets.SelectWidget, { ...props, size: "small" });
}
