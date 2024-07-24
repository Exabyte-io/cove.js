import Box, { BoxProps } from "@mui/material/Box";
import React from "react";

export type ScrollableContainerProps = BoxProps;

export default function ScrollableContainer({ children }: ScrollableContainerProps) {
    return <Box overflow="auto">{children}</Box>;
}
