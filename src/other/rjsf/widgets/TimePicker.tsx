import Typography from "@mui/material/Typography";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker as MuiTimePicker } from "@mui/x-date-pickers/TimePicker";
import moment from "moment";
import React from "react";

import InfoPopover from "../../../mui/components/popover/info-popover/InfoPopover";
import { PositionInfoPopover } from "./PositionInfoPopover.styled";
import { WidgetWithInfoPopoverProps } from "./types";

export default function TimePicker(props: WidgetWithInfoPopoverProps) {
    const { onChange, value, label } = props;
    const { uiSchema = {}, options } = props;
    const infoPopover = uiSchema["ui:options"] && uiSchema["ui:options"].infoPopover;

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <MuiTimePicker
                onChange={(timeObj) => onChange(timeObj?.format("HH:mm:ss"))}
                views={["hours", "minutes", "seconds"]}
                format="HH:mm:ss"
                ampm={false}
                value={moment("1970-01-01 " + value)}
                label={label}
                disabled={options.disabled}
                slotProps={{
                    textField: {
                        size: "small",
                        className: "timePickerInput",
                    },
                }}
            />
            <PositionInfoPopover>
                <InfoPopover title={infoPopover?.title} iconSize="small">
                    <Typography
                        variant="body2"
                        pb={2}
                        dangerouslySetInnerHTML={{ __html: infoPopover?.content || "" }}
                    />
                </InfoPopover>
            </PositionInfoPopover>
        </LocalizationProvider>
    );
}
