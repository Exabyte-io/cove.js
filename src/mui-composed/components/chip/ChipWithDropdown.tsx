import {
    ClickAwayListener,
    List,
    ListItem,
    ListItemText,
    Paper,
    Popper,
    SxProps,
} from "@mui/material";
import React, { useRef, useState } from "react";

import ChipWithAction from "./ChipWithAction";

type Item = {
    name?: string;
};

interface Props {
    label?: string;
    options: Item[];
    onSelect: (item: Item) => void;
    sx: SxProps;
}

function ChipWithDropdown({ label, options, onSelect, sx }: Props) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const popperRef = useRef<HTMLDivElement | null>(null);
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

    const handleSelect = (item: Item) => {
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
                    popperRef={popperRef}>
                    <Paper>
                        <List dense>
                            {options.map((item) => {
                                return (
                                    <ListItem
                                        button
                                        key={item?.name}
                                        onClick={() => handleSelect(item)}>
                                        <ListItemText primary={item?.name} />
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

export default ChipWithDropdown;
