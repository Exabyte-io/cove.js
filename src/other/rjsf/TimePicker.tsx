import Typography from "@mui/material/Typography";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker as MuiTimePicker } from "@mui/x-date-pickers/TimePicker";
import { WidgetProps } from "@rjsf/utils";
import moment from "moment";
import React from "react";

import InfoPopover, {
    InfoPopoverProps,
} from "../../mui/components/popover/info-popover/InfoPopover";
import { PositionInfoPopover } from "./PositionInfoPopover.styled";

type InfoPopoverOptions = InfoPopoverProps & { content: string };

export default function TimePicker(props: WidgetProps<InfoPopoverOptions>) {
    const { onChange, value, label } = props;
    const { uiSchema, options } = props;
    const infoPopover = (uiSchema ? uiSchema["ui:options"]?.infoPopover : {}) as InfoPopoverOptions;

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <MuiTimePicker
                onChange={(timeObj) => onChange(timeObj?.format("hh:mm:ss"))}
                views={["hours", "minutes", "seconds"]}
                format="hh:mm:ss"
                ampm={false}
                value={moment("1970-01-01 " + value)}
                label={label}
                disabled={options.disabled}
                slotProps={{
                    textField: {
                        size: "small",
                    },
                }}
            />
            <PositionInfoPopover>
                <InfoPopover title={infoPopover?.title} iconSize="small">
                    <Typography
                        variant="body2"
                        pb={2}
                        dangerouslySetInnerHTML={{ __html: infoPopover?.content }}
                    />
                </InfoPopover>
            </PositionInfoPopover>
        </LocalizationProvider>
    );
}
