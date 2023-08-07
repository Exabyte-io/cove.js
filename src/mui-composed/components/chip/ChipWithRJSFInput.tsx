import { SxProps } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { IChangeEvent } from "@rjsf/core";
import { Form } from "@rjsf/mui";
import { ErrorTransformer, RJSFSchema, ValidatorType } from "@rjsf/utils";
import React, { useRef, useState } from "react";

import ChipWithAction from "./ChipWithAction";

export interface FormPropsType {
    jsonSchema: RJSFSchema;
    uiSchema?: any;
    validator: ValidatorType;
    transformErrors?: ErrorTransformer;
}

interface Props {
    label?: string;
    formData?: object;
    formProps: FormPropsType;
    iconName?: string;
    onSubmit: (formData: object) => void;
    onAction?: () => void;
    disabled?: boolean;
    sx?: SxProps;
}

function ChipWithRJSFInput({
    label,
    formData,
    formProps,
    iconName,
    onSubmit,
    onAction,
    disabled = false,
    sx,
}: Props) {
    const { jsonSchema, uiSchema, validator, transformErrors } = formProps;

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const popperRef = useRef<HTMLDivElement | null>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClose = (event?: React.MouseEvent<Document, MouseEvent>) => {
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
                <Popper open={open} anchorEl={anchorEl} placement="bottom-start" ref={popperRef}>
                    <Paper>
                        {jsonSchema ? (
                            <Form
                                formData={formData || undefined}
                                disabled={disabled}
                                schema={jsonSchema}
                                uiSchema={uiSchema}
                                validator={validator}
                                transformErrors={transformErrors}
                                onSubmit={handleSubmit}
                            />
                        ) : null}
                    </Paper>
                </Popper>
            </ClickAwayListener>
        </>
    );
}

export default ChipWithRJSFInput;
