import Stack from "@mui/material/Stack";
import { ObjectFieldTemplateProps } from "@rjsf/utils";
import React from "react";

export function StackObjectFieldTemplate(props: ObjectFieldTemplateProps) {
    const { properties } = props;
    return (
        <Stack width="100%" spacing={2}>
            {properties.map((element) => element?.content)}
        </Stack>
    );
}
