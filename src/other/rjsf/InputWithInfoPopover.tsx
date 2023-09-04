/* eslint-disable react/jsx-props-no-spreading */
import Typography from "@mui/material/Typography";
import { Templates } from "@rjsf/mui";
import { WidgetProps } from "@rjsf/utils";
import React from "react";

import InfoPopover, {
    InfoPopoverProps,
} from "../../mui/components/popover/info-popover/InfoPopover";
import { PositionInfoPopover } from "./PositionInfoPopover.styled";

const { BaseInputTemplate } = Templates;

type InfoPopoverOptions = InfoPopoverProps & { content: string };

export default function InputWithInfoPopover(props: WidgetProps) {
    const { uiSchema } = props;
    const infoPopover = (uiSchema ? uiSchema["ui:options"]?.infoPopover : {}) as InfoPopoverOptions;

    if (!BaseInputTemplate) return null;

    return (
        <>
            <BaseInputTemplate {...props} size="small" />
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
