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

export interface StepIconProps {
    active: boolean;
    icon: React.ReactNode;
}

function StepIcon(props: StepIconProps) {
    const { active, icon } = props;

    return (
        <StyledStepIcon className={classNames({ active })}>
            <div className="internal-circle">
                <span className="step-number">{icon}</span>
                <span className="step-label">STEP</span>
            </div>
        </StyledStepIcon>
    );
}

export default StepIcon;
