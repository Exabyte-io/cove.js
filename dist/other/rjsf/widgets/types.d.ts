import { WidgetProps } from "@rjsf/utils";
export type InfoPopoverOptions = {
    title: string;
    content: string;
};
type InfoPopoverUISchema = {
    "ui:options"?: {
        infoPopover?: InfoPopoverOptions;
    };
};
export type WidgetWithInfoPopoverProps = WidgetProps & {
    uiSchema?: InfoPopoverUISchema;
};
export {};
