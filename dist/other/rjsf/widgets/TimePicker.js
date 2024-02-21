import Typography from "@mui/material/Typography";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker as MuiTimePicker } from "@mui/x-date-pickers/TimePicker";
import moment from "moment";
import React from "react";
import InfoPopover from "../../../mui/components/popover/info-popover/InfoPopover";
import { PositionInfoPopover } from "./PositionInfoPopover.styled";
export default function TimePicker(props) {
    const { onChange, value, label } = props;
    const { uiSchema = {}, options } = props;
    const infoPopover = uiSchema["ui:options"] && uiSchema["ui:options"].infoPopover;
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterMoment },
        React.createElement(MuiTimePicker, { onChange: (timeObj) => onChange(timeObj === null || timeObj === void 0 ? void 0 : timeObj.format("HH:mm:ss")), views: ["hours", "minutes", "seconds"], format: "HH:mm:ss", ampm: false, value: moment("1970-01-01 " + value), label: label, disabled: options.disabled, slotProps: {
                textField: {
                    size: "small",
                    className: "timePickerInput",
                },
            } }),
        React.createElement(PositionInfoPopover, null,
            React.createElement(InfoPopover, { title: infoPopover === null || infoPopover === void 0 ? void 0 : infoPopover.title, iconSize: "small" },
                React.createElement(Typography, { variant: "body2", pb: 2, dangerouslySetInnerHTML: { __html: (infoPopover === null || infoPopover === void 0 ? void 0 : infoPopover.content) || "" } })))));
}
