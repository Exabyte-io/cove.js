import { SxProps } from "@mui/material";
import Chip from "@mui/material/Chip";
import IconByName from "mui/components/icon/IconByName";
import React from "react";

interface Props {
    label: string;
    iconName?: string;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    onAction?: (event: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
    sx?: SxProps;
}

function ChipWithAction({ label, iconName, onClick, onAction, disabled, sx }: Props) {
    const actionIcon = iconName ? <IconByName name={iconName} /> : undefined;
    return (
        <Chip
            label={label}
            onClick={onClick}
            onDelete={onAction}
            deleteIcon={actionIcon}
            disabled={disabled || false}
            sx={sx}
        />
    );
}

export default ChipWithAction;
