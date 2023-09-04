/* eslint-disable react/jsx-props-no-spreading */
import Typography from "@mui/material/Typography";
import { Widgets } from "@rjsf/mui";
import { WidgetProps } from "@rjsf/utils";
import React from "react";

import InfoPopover, {
    InfoPopoverProps,
} from "../../mui/components/popover/info-popover/InfoPopover";
import { PositionInfoPopover } from "./PositionInfoPopover.styled";

const { SelectWidget } = Widgets;

type InfoPopoverOptions = InfoPopoverProps & { content: string };

export default function SelectWithInfoPopover(props: WidgetProps) {
    const { uiSchema } = props;

    const infoPopover = (uiSchema ? uiSchema["ui:options"]?.infoPopover : {}) as InfoPopoverOptions;

    return (
        <>
            <SelectWidget {...props} size="small" />
            <PositionInfoPopover>
                <InfoPopover title={infoPopover?.title} iconSize="small">
                    <Typography
                        variant="body2"
                        pb={2}
                        dangerouslySetInnerHTML={{ __html: infoPopover?.content }}
                    />
                </InfoPopover>
            </PositionInfoPopover>
        </>
    );
}
