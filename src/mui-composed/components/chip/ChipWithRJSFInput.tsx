import { SxProps } from "@mui/material"; // Cannot be directly imported
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { useTheme } from "@mui/material/styles";
import { Instance } from "@popperjs/core";
import { IChangeEvent } from "@rjsf/core";
import { Form } from "@rjsf/mui";
import { ErrorTransformer, RJSFSchema, UiSchema, ValidatorType } from "@rjsf/utils";
import React, { useRef, useState } from "react";

import ChipWithAction from "./ChipWithAction";

interface Props {
    label?: string;
    formData?: object;
    jsonSchema: RJSFSchema;
    uiSchema?: UiSchema;
    validator: ValidatorType;
    transformErrors?: ErrorTransformer;
    iconName?: string;
    onSubmit: (formData: object) => void;
    onAction?: () => void;
    disabled?: boolean;
    sx?: SxProps;
    popperSx?: SxProps;
    disablePortal?: boolean;
}

function ChipWithRJSFInput({
    label,
    formData,
    jsonSchema,
    uiSchema,
    validator,
    transformErrors,
    iconName,
    onSubmit,
    onAction,
    disabled = false,
    sx,
    popperSx,
    disablePortal = false,
}: Props) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const popperRef = useRef<Instance | null>(null);
    const theme = useTheme();

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        console.log("opening");
        console.log(event.currentTarget);
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    // TODO: fix clicking on select/dropdown inside RJSForm triggers close
    const handleClose = (event?: React.MouseEvent<Document, MouseEvent>) => {
        console.log("closing");
        if (event && anchorEl && anchorEl.contains(event.target as Node)) {
            return;
        }
        setAnchorEl(null);
    };

    const handleSubmit = (event: IChangeEvent<object>) => {
        handleClose();
        if (event?.formData) onSubmit(event.formData);
    };

    return (
        <>
            <ChipWithAction
                label={label || JSON.stringify(formData, null, 4)}
                disabled={disabled}
                iconName={iconName || undefined}
                onClick={handleClick}
                onAction={onAction || handleClick}
                sx={sx}
            />
            <ClickAwayListener onClickAway={() => handleClose()}>
                <Popper
                    open={open}
                    anchorEl={anchorEl}
                    placement="bottom-start"
                    popperRef={popperRef}
                    disablePortal={disablePortal}
                    sx={popperSx}>
                    <Paper
                        sx={{ backgroundColor: theme.palette.background.paper, px: 1.5, pb: 1.5 }}>
                        <Form
                            formData={formData}
                            disabled={disabled}
                            schema={jsonSchema}
                            uiSchema={uiSchema}
                            validator={validator}
                            transformErrors={transformErrors}
                            onSubmit={handleSubmit}
                        />
                    </Paper>
                </Popper>
            </ClickAwayListener>
        </>
    );
}

export default ChipWithRJSFInput;
