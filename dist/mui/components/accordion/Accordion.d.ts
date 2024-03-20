import React from "react";
export interface AccordionProps {
    hideExpandIcon?: boolean;
    children?: React.ReactNode;
    isExpanded: boolean;
    header?: React.ReactNode;
    renderSummary?: React.ReactNode;
}
export default function Accordion({ hideExpandIcon, children, isExpanded, header, renderSummary, ...restProps }: AccordionProps): React.JSX.Element;
