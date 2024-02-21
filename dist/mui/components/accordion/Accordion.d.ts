import React from "react";
export interface AccordionProps {
    hideExpandIcon: boolean;
    children: React.ReactNode;
    isExpanded: boolean;
    header: React.ReactNode;
    alternativeComponent: React.ReactNode;
}
export default function Accordion({ hideExpandIcon, children, isExpanded, header, alternativeComponent, ...restProps }: AccordionProps): React.JSX.Element;
