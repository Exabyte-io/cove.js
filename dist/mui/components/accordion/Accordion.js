/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import MuiAccordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
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
export default function Accordion({ hideExpandIcon, children, isExpanded, header, alternativeComponent, ...restProps }) {
    const [isExpanded_, setIsExpanded] = useState(isExpanded);
    useEffect(() => {
        setIsExpanded(isExpanded);
    }, [isExpanded]);
    const handleToggleExpanded = (e) => {
        if (!e.defaultPrevented) {
            e.preventDefault();
            setIsExpanded((prev) => !prev);
        }
    };
    return (React.createElement(StyledAccordion, { defaultExpanded: isExpanded, expanded: isExpanded_, ...restProps },
        React.createElement(AccordionSummary, { onClick: handleToggleExpanded, "aria-controls": "panel2a-content", expandIcon: !hideExpandIcon && React.createElement(IconByName, { name: "actions.expand" }) },
            React.createElement(Typography, { variant: "overline" }, header),
            alternativeComponent),
        React.createElement(Divider, null),
        React.createElement(AccordionDetails, null, children)));
}
