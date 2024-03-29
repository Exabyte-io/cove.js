/* eslint-disable react/jsx-props-no-spreading */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

import IconByName from "../icon/IconByName";

export default function UploadButton({
    id,
    label,
    file,
    accept = "*",
    onFileUpload,
    buttonProps,
}: {
    id: string;
    label: string | React.ReactNode;
    file: File | null;
    accept?: string;
    onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
    buttonProps?: object;
}) {
    return (
        <>
            <Button
                id={`${id}-button`}
                component="label"
                variant="outlined"
                startIcon={<IconByName name="actions.uploadFile" />}
                {...buttonProps}>
                {label}
                <input
                    id={id}
                    type="file"
                    accept={accept}
                    style={{ display: "none" }}
                    onChange={onFileUpload}
                />
            </Button>
            {file ? <Box>{file.name}</Box> : null}
        </>
    );
}
