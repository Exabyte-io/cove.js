import { Box, SxProps } from "@mui/material";
import React, { ComponentType } from "react";

import ChipWithAction from "./ChipWithAction";

interface ChipComponentProps {
    label: string;
    item: object;
    iconName?: string;
    onAction?: () => void;
    onClick?: () => void;
    disabled?: boolean;
    sx?: SxProps;
}

interface Props {
    items: object[];
    labels?: string[];
    onDelete: (item: object) => void;
    disabled?: boolean;
    component?: ComponentType<ChipComponentProps>;
    componentProps?: ChipComponentProps;
    childSx?: SxProps;
    sx?: SxProps;
}

function ChipList({
    items,
    labels,
    onDelete,
    disabled = false,
    component = ChipWithAction,
    componentProps,
    childSx,
    sx,
}: Props) {
    const ChipComponent = component;
    return (
        <Box sx={sx}>
            {items.map((item, index) => {
                return (
                    <ChipComponent
                        item={item}
                        label={labels?.[index] || JSON.stringify(item, null, 4)}
                        onAction={() => onDelete(item)}
                        disabled={disabled}
                        sx={childSx}
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...componentProps}
                    />
                );
            })}
        </Box>
    );
}

export default ChipList;
