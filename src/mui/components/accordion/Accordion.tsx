/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import MuiAccordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import React, { SyntheticEvent, useEffect, useState } from "react";

import IconByName from "../icon/IconByName";

// deletes header animation in accordion
const StyledAccordion = withStyles({
    root: {
        margin: "0",
        "&$expanded": {
            margin: "0",
        },
    },
    expanded: {},
})(MuiAccordion);

// deletes header animation in accordion
const AccordionSummary = withStyles({
    root: {
        minHeight: "48px",
        margin: "0",
        "&$expanded": {
            minHeight: "48px",
            margin: "0",
        },
    },
    content: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        "&$expanded": {
            margin: "0",
        },
    },
    expanded: {},
})(MuiAccordionSummary);

export interface AccordionProps {
    hideExpandIcon: boolean;
    children: React.ReactNode;
    isExpanded: boolean;
    header: React.ReactNode;
    renderSummary: React.ReactNode;
}

export default function Accordion({
    hideExpandIcon,
    children,
    isExpanded,
    header,
    renderSummary,
    ...restProps
}: AccordionProps) {
    const [isExpanded_, setIsExpanded] = useState(isExpanded);

    useEffect(() => {
        setIsExpanded(isExpanded);
    }, [isExpanded]);

    const handleToggleExpanded = (e: SyntheticEvent<HTMLDivElement>) => {
        if (!e.defaultPrevented) {
            e.preventDefault();
            setIsExpanded((prev) => !prev);
        }
    };

    return (
        <StyledAccordion defaultExpanded={isExpanded} expanded={isExpanded_} {...restProps}>
            <AccordionSummary
                onClick={handleToggleExpanded}
                aria-controls="panel2a-content"
                expandIcon={!hideExpandIcon && <IconByName name="actions.expand" />}>
                {renderSummary || <Typography variant="overline">{header}</Typography>}
            </AccordionSummary>
            <Divider />
            <AccordionDetails>{children}</AccordionDetails>
        </StyledAccordion>
    );
}
