import { SxProps } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { Instance } from "@popperjs/core";
import React, { useRef, useState } from "react";

import ChipWithAction from "./ChipWithAction";

interface Props {
    label?: string;
    options: object[];
    optionsLabels: string[];
    onSelect: (item: object) => void;
    sx?: SxProps;
    popperSx?: SxProps;
    disablePortal?: boolean;
}

function ChipWithSelectInput({
    label,
    options,
    optionsLabels,
    onSelect,
    sx,
    popperSx,
    disablePortal,
}: Props) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const popperRef = useRef<Instance | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const handleClose = (event?: React.MouseEvent<Document, MouseEvent>) => {
        if (event && anchorEl && anchorEl.contains(event.target as Node)) {
            return;
        }
        setAnchorEl(null);
    };

    const handleSelect = (item: object) => {
        onSelect(item);
        handleClose();
    };

    return (
        <>
            <ChipWithAction
                label={label || "Select..."}
                disabled={options.length < 1}
                iconName="shapes.arrow.dropdown"
                onClick={handleClick}
                onAction={handleClick}
                sx={sx}
            />
            <ClickAwayListener onClickAway={() => handleClose()}>
                <Popper
                    open={open}
                    anchorEl={anchorEl}
                    placement="bottom-start"
                    popperRef={popperRef}
                    disablePortal={disablePortal}
                    popperSx={popperSx}>
                    <Paper>
                        <List dense>
                            {optionsLabels.map((label, index) => {
                                const item = options[index];
                                return (
                                    <ListItem button key={label} onClick={() => handleSelect(item)}>
                                        <ListItemText primary={label} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Paper>
                </Popper>
            </ClickAwayListener>
        </>
    );
}

export default ChipWithSelectInput;
