/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { ChevronLeft } from "@mui/icons-material";
import ChevronRight from "@mui/icons-material/ChevronRight";
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

import { DefaultDropdownButton } from "../dropdown/DefaultDropdownButton";
import { NestedDropdownItem } from "./NestedDropdownItem";

export interface NestedDropdownAction {
    id: string;
    disabled: boolean;
    shouldMenuStayOpened?: boolean;
    key?: string;
    isActive?: boolean;
    isShown?: boolean;
    isSelected?: boolean;
    isDivider?: boolean;
    onClick?: (action: NestedDropdownAction) => void;
    actions?: NestedDropdownAction[];
    leftIcon?: React.ReactElement;
    content?: string;
    rightIcon?: React.ReactElement;
    header?: string;
    contentObject?: React.ReactNode;
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
    header?: string;
    contentObject?: React.ReactNode;
}

// TODO: discuss turning this into fully reusable component, renaming to Dropdown? and changing existing implementations to use that.
/**
 * @summary Nested dropdown component can be used as a default dropdown component,
 *  with options to make it nested and display menu in a flexible way:
 *  header - optional header text for the dropdown
 *  [actions: leftIcon, content, rightIcon] - optional actions array which will be converted to dropdown menu items.
 *  contentObject - optional object to display custom content layout
 *  divider - optional divider to separate dropdown menu items
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
    paperPlacement = "auto-start",
    className = "",
    header,
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

            if (targetAction.onClick) targetAction.onClick(targetAction);
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
                {children || (
                    <DefaultDropdownButton fullWidth={isMobile} disabled={disabled}>
                        {buttonContent ||
                            (actions.find(({ isSelected }) => isSelected) || actions[0])?.content}
                    </DefaultDropdownButton>
                )}
            </div>
            <Popper
                // @ts-ignore
                style={{ zIndex: theme.dropdownPopperZindex }}
                open={opened}
                anchorEl={containerRef?.current}
                transition
                placement={paperPlacement}
                // popperOptions={{ placement: "right-start" }}
                {...popperProps}>
                {({ TransitionProps }) => (
                    <Grow {...TransitionProps} style={{ transformOrigin: "center top" }}>
                        <Paper sx={{ minWidth: () => containerRef?.current?.offsetWidth }}>
                            {Boolean(header) && (
                                <ListItem>
                                    <Typography>{header}</Typography>
                                </ListItem>
                            )}
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
                                            if (action.actions) {
                                                return (
                                                    <NestedDropdown
                                                        actions={action.actions}
                                                        header={action.header}>
                                                        <NestedDropdownItem
                                                            disabled={action.disabled}
                                                            id={action.id}
                                                            key={action.key || action.id}
                                                            // TODO: detect whether the popper opens to the left or to the right and render only appropriate default icon
                                                            leftIcon={
                                                                action.leftIcon || <ChevronLeft />
                                                            }
                                                            content={action.content}
                                                            rightIcon={
                                                                action.rightIcon || <ChevronRight />
                                                            }
                                                        />
                                                    </NestedDropdown>
                                                );
                                            }
                                            if (action.contentObject) {
                                                return action.contentObject;
                                            }
                                            return (
                                                <NestedDropdownItem
                                                    disabled={action.disabled}
                                                    id={action.id}
                                                    onClick={onMenuItemClick}
                                                    isActive={action.isActive}
                                                    leftIcon={action.leftIcon}
                                                    content={action.content}
                                                    rightIcon={action.rightIcon}
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
