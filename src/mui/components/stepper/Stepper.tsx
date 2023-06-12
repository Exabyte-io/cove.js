import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import * as React from "react";

import StepIcon from "./StepIcon";
import { StepMsg, StyledConnector } from "./Stepper.styled";

export interface StyledStepperProps {
    activeStep: number;
    steps: string[];
    stepMessages: string[];
}

export default function StyledStepper(props: StyledStepperProps) {
    const { activeStep, steps, stepMessages } = props;

    return (
        <>
            <Stepper alternativeLabel activeStep={activeStep} connector={<StyledConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={StepIcon} />
                    </Step>
                ))}
            </Stepper>
            <StepMsg>{stepMessages[activeStep]}</StepMsg>
        </>
    );
}
