import { Chip, SxProps } from "@mui/material";
import IconByName from "mui/components/icon/IconByName";
import React from "react";

interface Props {
    label: string;
    iconName: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    onAction: (event: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
    sx?: SxProps;
}

function ChipWithAction({ label, iconName, onClick, onAction, disabled, sx }: Props) {
    return (
        <Chip
            label={label}
            onClick={onClick}
            onDelete={onAction}
            deleteIcon={<IconByName name={iconName} />}
            disabled={disabled || false}
            sx={sx}
        />
    );
}

export default ChipWithAction;
