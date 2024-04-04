import { styled } from "@mui/material/styles";
import classNames from "classnames";
import React from "react";
const StyledStepIcon = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    border: `1px solid ${theme.palette.primary.dark}`,
    borderRadius: "50%",
    color: theme.palette.common.white,
    ".internal-circle": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 44,
        height: 44,
        background: "transparent",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.dark}`,
        lineHeight: 1.2,
        ".step-number": {
            fontSize: 13,
            color: theme.palette.primary.dark,
        },
        ".step-label": {
            fontSize: 10,
            color: theme.palette.primary.dark,
        },
    },
    "&.active": {
        border: `1px solid ${theme.palette.primary.dark}`,
        color: theme.palette.common.white,
        ".internal-circle": {
            background: theme.palette.primary.dark,
            ".step-number": {
                fontSize: 13,
                color: theme.palette.common.white,
            },
            ".step-label": {
                fontSize: 10,
                color: theme.palette.common.white,
            },
        },
    },
}));
function StepIcon(props) {
    const { active, icon } = props;
    return (React.createElement(StyledStepIcon, { className: classNames({ active }) },
        React.createElement("div", { className: "internal-circle" },
            React.createElement("span", { className: "step-number" }, icon),
            React.createElement("span", { className: "step-label" }, "STEP"))));
}
export default StepIcon;
