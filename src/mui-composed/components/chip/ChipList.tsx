import { Box, Chip, SxProps } from "@mui/material";
import React from "react";

interface Item {
    name?: string;
}

interface Props {
    items: Item[];
    onDelete: (item: Item) => void;
    disabled?: boolean;
    childSx?: SxProps;
    sx?: SxProps;
}

function ChipList({ items, onDelete, disabled = false, childSx, sx }: Props) {
    return (
        <Box sx={sx}>
            {items.map((item) => {
                return (
                    <Chip
                        sx={childSx}
                        label={item.name}
                        onDelete={() => onDelete(item)}
                        disabled={disabled}
                    />
                );
            })}
        </Box>
    );
}

export default ChipList;
