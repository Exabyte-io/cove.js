import { ClickAwayListener, Paper, Popper, SxProps } from "@mui/material";
import { IChangeEvent } from "@rjsf/core";
import { Form } from "@rjsf/mui";
import { ErrorTransformer, RJSFSchema, ValidatorType } from "@rjsf/utils";
import React, { useRef, useState } from "react";

import ChipWithAction from "./ChipWithAction";

type Item = {
    name?: string;
};

interface FormPropsType {
    jsonSchema: RJSFSchema;
    uiSchema?: any;
    validator: ValidatorType;
    transformErrors?: ErrorTransformer;
}

interface Props {
    label?: string;
    FormProps: FormPropsType;
    onSubmit: (formData: Item) => void;
    disabled?: boolean;
    sx?: SxProps;
}

function ChipWithRJSFInput({ label, FormProps, onSubmit, disabled = false, sx }: Props) {
    const { jsonSchema, uiSchema, validator, transformErrors } = FormProps;

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

    const handleSubmit = (event: IChangeEvent<Item>) => {
        const { formData } = event;
        handleClose();
        if (formData) onSubmit(formData);
    };

    return (
        <>
            <ChipWithAction
                label={label || "Add..."}
                disabled={disabled}
                iconName="shapes.addCircle"
                onClick={handleClick}
                onAction={handleClick}
                sx={sx}
            />
            <ClickAwayListener onClickAway={() => handleClose()}>
                <Popper open={open} anchorEl={anchorEl} placement="bottom-start" ref={popperRef}>
                    <Paper>
                        {jsonSchema ? (
                            <Form
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
