/* eslint-disable react/jsx-props-no-spreading */
import Typography from "@mui/material/Typography";
import { Widgets } from "@rjsf/mui";
import React from "react";
import InfoPopover from "../../../mui/components/popover/info-popover/InfoPopover";
import { PositionInfoPopover } from "./PositionInfoPopover.styled";
const { SelectWidget } = Widgets;
export default function SelectWithInfoPopover(props) {
    const { uiSchema = {} } = props;
    const infoPopover = uiSchema["ui:options"] && uiSchema["ui:options"].infoPopover;
    return (React.createElement(React.Fragment, null,
        React.createElement(SelectWidget, { ...props, size: "small" }),
        React.createElement(PositionInfoPopover, null,
            React.createElement(InfoPopover, { title: infoPopover === null || infoPopover === void 0 ? void 0 : infoPopover.title, iconSize: "small" },
                React.createElement(Typography, { variant: "body2", pb: 2, dangerouslySetInnerHTML: { __html: (infoPopover === null || infoPopover === void 0 ? void 0 : infoPopover.content) || "" } })))));
}
