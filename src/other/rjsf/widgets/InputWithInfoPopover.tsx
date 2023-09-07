/* eslint-disable react/jsx-props-no-spreading */
import Typography from "@mui/material/Typography";
import { Templates } from "@rjsf/mui";
import React from "react";

import InfoPopover from "../../../mui/components/popover/info-popover/InfoPopover";
import { PositionInfoPopover } from "./PositionInfoPopover.styled";
import { WidgetWithInfoPopoverProps } from "./types";

const { BaseInputTemplate } = Templates;

export default function InputWithInfoPopover(props: WidgetWithInfoPopoverProps) {
    const { uiSchema = {} } = props;
    const infoPopover = uiSchema["ui:options"] && uiSchema["ui:options"].infoPopover;

    if (!BaseInputTemplate) return null;

    return (
        <>
            <BaseInputTemplate {...props} size="small" />
            <PositionInfoPopover>
                <InfoPopover title={infoPopover?.title} iconSize="small">
                    <Typography
                        variant="body2"
                        pb={2}
                        dangerouslySetInnerHTML={{ __html: infoPopover?.content || "" }}
                    />
                </InfoPopover>
            </PositionInfoPopover>
        </>
    );
}
