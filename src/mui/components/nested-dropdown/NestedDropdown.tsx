/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Divider from "@mui/material/Divider";
import Grow from "@mui/material/Grow";
import ListItem from "@mui/material/ListItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper, { PopperPlacementType, PopperProps } from "@mui/material/Popper";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useCallback, useRef, useState } from "react";

import defaultDropdownItem, { DefaultDropdownItem } from "./DefaultDropdownItem";
import { NestedDropdownItem } from "./NestedDropdownItem";

export interface NestedDropdownAction {
    id: string;
    disabled: boolean;
    content: string;
    icon: JSX.Element;
    shouldMenuStayOpened?: boolean;
    key?: string;
    isActive?: boolean;
    isShown?: boolean;
    isSelected?: boolean;
    isDivider?: boolean;
    onClick: (action: NestedDropdownAction) => void;
    isNested?: boolean;
    actions?: NestedDropdownAction[];
}

export interface NestedDropdownProps {
    id?: string;
    popperProps?: {
        id: string;
        modifiers?: PopperProps["modifiers"];
        "data-popper-id"?: string;
    };
    buttonContent?: string;
    actions: NestedDropdownAction[];
    children?: React.ReactNode | React.ReactNode[];
    paperPlacement?: PopperPlacementType;
    className?: string;
    disabled?: boolean;
    title?: string;
}

/**
 *  MUI dropdown component have a default button with dropdown also could be used with
 * custom button which takes from children, actions array -> array which will be converted
 * to dropdown menu items.
 */
export default function NestedDropdown({
    id,
    actions,
    buttonContent,
    popperProps = {
        id: "popper",
    },
    children = null,
    disabled = false,
    paperPlacement = "bottom-start",
    className = "",
    title = "Default Header",
}: NestedDropdownProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [opened, setOpened] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const onClick = useCallback(() => setOpened(true), []);
    const onClickAway = useCallback(() => setOpened(false), []);

    const onMenuItemClick = useCallback(
        (actionId: string) => {
            const targetAction = actions.find((action) => {
                return action.id === actionId;
            });

            if (!targetAction) {
                return;
            }

            if (!targetAction.shouldMenuStayOpened) {
                setOpened(false);
            }

            targetAction.onClick(targetAction);
        },
        [actions],
    );

    const onListKeyDown = useCallback((event: React.KeyboardEvent<Element>) => {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpened(false);
        }
    }, []);

    return (
        <Box className={className} id={id} sx={{ width: isMobile ? "100%" : undefined }}>
            <div ref={containerRef} onClick={onClick}>
                <ListItem>{children}</ListItem>
            </div>
            <Popper
                // @ts-ignore
                style={{ zIndex: theme.dropdownPopperZindex }}
                open={opened}
                anchorEl={containerRef?.current}
                transition
                placement={paperPlacement}
                popperOptions={{ placement: "right-start" }}
                {...popperProps}>
                {({ TransitionProps }) => (
                    <Grow {...TransitionProps} style={{ transformOrigin: "center top" }}>
                        <Paper sx={{ minWidth: () => containerRef?.current?.offsetWidth }}>
                            <ListItem>
                                <Typography>{title}</Typography>
                            </ListItem>
                            <ClickAwayListener onClickAway={onClickAway}>
                                <MenuList
                                    autoFocusItem={opened}
                                    id="dropdown-menu"
                                    onKeyDown={onListKeyDown}>
                                    {actions
                                        .filter(({ isShown }) => isShown !== false)
                                        .map((action) => {
                                            if (action.isDivider) {
                                                return <Divider key={action.key || action.id} />;
                                            }
                                            if (action.isNested && action.actions) {
                                                return <NestedDropdown actions={action.actions} />;
                                            }
                                            return (
                                                <NestedDropdownItem
                                                    disabled={action.disabled}
                                                    icon={action.icon}
                                                    id={action.id}
                                                    onClick={onMenuItemClick}
                                                    isActive={action.isActive}
                                                    content={action.content}
                                                    key={action.key || action.id}
                                                />
                                            );
                                        })}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    );
}
