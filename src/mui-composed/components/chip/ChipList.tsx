import { Box, SxProps } from "@mui/material";
import React from "react";

import ChipWithAction from "./ChipWithAction";

interface Props {
    items: object[];
    labels?: string[];
    onDelete: (item: object) => void;
    disabled?: boolean;
    childSx?: SxProps;
    sx?: SxProps;
}

function ChipList({ items, labels, onDelete, disabled = false, childSx, sx }: Props) {
    return (
        <Box sx={sx}>
            {items.map((item, index) => {
                return (
                    <ChipWithAction
                        label={labels?.[index] || JSON.stringify(item, null, 4)}
                        onAction={() => onDelete(item)}
                        disabled={disabled}
                        sx={childSx}
                    />
                );
            })}
        </Box>
    );
}

export default ChipList;
