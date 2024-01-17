import Step from "@mui/material/Step";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const StyledStepConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: "calc(-50% + 16px)",
        right: "calc(50% + 16px)",
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: `${theme.palette.primary.main}`,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: `${theme.palette.primary.main}`,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: `${theme.palette.secondary.light}`,
        borderTopWidth: 2,
        borderRadius: 1,
    },
}));

export interface StyledStepperProps {
    activeStep: number;
    steps: string[];
    fullWidth?: boolean;
}

export default function StyledStepper(props: StyledStepperProps) {
    const { activeStep, steps, fullWidth } = props;

    return (
        <>
            <Stepper
                activeStep={activeStep}
                sx={fullWidth ? { width: "100%" } : null}
                alternativeLabel
                connector={<StyledStepConnector />}>
                {steps.map((label) => {
                    return (
                        <Step key={label}>
                            <StepLabel />
                        </Step>
                    );
                })}
            </Stepper>
            {steps[activeStep] && <Typography variant="body2">{steps[activeStep]}</Typography>}
        </>
    );
}
