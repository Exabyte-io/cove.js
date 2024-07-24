import Stack, { StackProps } from "@mui/material/Stack";
import React from "react";

export type ColumnContainerProps = StackProps;

export default function ColumnContainer({ children }: ColumnContainerProps) {
    return <Stack overflow="hidden">{children}</Stack>;
}
