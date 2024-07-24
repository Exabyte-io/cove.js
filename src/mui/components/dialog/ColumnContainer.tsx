import Box, { BoxProps } from "@mui/material/Box";
import React from "react";

export type ColumnContainerProps = BoxProps;

export default function ColumnContainer({ children }: ColumnContainerProps) {
    return (
        <Box display="flex" flexDirection="column" overflow="hidden">
            {children}
        </Box>
    );
}
