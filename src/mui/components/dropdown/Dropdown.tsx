/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { MenuItemProps } from "@mui/material";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Divider from "@mui/material/Divider";
import Grow from "@mui/material/Grow";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper, { PopperPlacementType, PopperProps } from "@mui/material/Popper";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useCallback, useRef, useState } from "react";

import { DefaultDropdownButton, DefaultDropdownButtonProps } from "./DefaultDropdownButton";
import { DropdownItem, DropdownItemProps } from "./DropdownItem";

/**
 * Add data-<something> html attributes
 *  @see https://github.com/microsoft/TypeScript/issues/28960#issuecomment-903519759
 * */
interface HTMLAttributes extends React.HTMLAttributes<any> {
    [dataAttribute: `data-${string}`]: any;
}

export interface DropdownAction {
    id: DropdownItemProps["id"];
    onClick: (action: DropdownAction, event: React.MouseEvent<HTMLLIElement>) => void;
    content: DropdownItemProps["content"];
    disabled?: DropdownItemProps["disabled"];
    icon?: DropdownItemProps["icon"];
    endIcon?: DropdownItemProps["endIcon"];
    showCheckIcon?: DropdownItemProps["showCheckIcon"];
    shouldMenuStayOpened?: boolean;
    key?: string;
    isShown?: boolean;
    isSelected?: boolean;
    isDivider?: boolean;
    /**
     * Pass any MUI MenuItem props here to customize appearance or html properties
     */
    menuItemProps?: MenuItemProps & HTMLAttributes;
}

export interface DropdownProps {
    id?: string;
    popperProps?: {
        id: string;
        modifiers?: PopperProps["modifiers"];
        "data-popper-id"?: string;
    };
    buttonContent?: string;
    actions: DropdownAction[];
    children?: React.ReactNode | React.ReactNode[];
    paperPlacement?: PopperPlacementType;
    className?: string;
    disabled?: boolean;
    buttonProps?: Partial<DefaultDropdownButtonProps>;
}

/**
 *  MUI dropdown component have a default button with dropdown also could be used with
 * custom button which takes from children, actions array -> array which will be converted
 * to dropdown menu items.
 */
export default function Dropdown({
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
    buttonProps,
}: DropdownProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [opened, setOpened] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const onClick = useCallback(() => setOpened(true), []);
    const onClickAway = useCallback(() => setOpened(false), []);

    const onMenuItemClick = useCallback(
        (actionId: string, event: React.MouseEvent<HTMLLIElement>) => {
            const targetAction = actions.find((action) => {
                return action.id === actionId;
            });

            if (!targetAction) {
                return;
            }

            if (!targetAction.shouldMenuStayOpened) {
                setOpened(false);
            }

            targetAction.onClick(targetAction, event);
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
                    <DefaultDropdownButton
                        fullWidth={isMobile}
                        disabled={disabled}
                        {...buttonProps}>
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
                popperOptions={{ placement: "bottom-start" }}
                {...popperProps}>
                {({ TransitionProps }) => (
                    <Grow {...TransitionProps} style={{ transformOrigin: "center top" }}>
                        <Paper sx={{ minWidth: () => containerRef?.current?.offsetWidth }}>
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
                                            return (
                                                <DropdownItem
                                                    disabled={action.disabled}
                                                    icon={action.icon}
                                                    endIcon={action.endIcon}
                                                    id={action.id}
                                                    onMenuItemClick={onMenuItemClick}
                                                    showCheckIcon={action.showCheckIcon}
                                                    key={action.key || action.id}
                                                    {...action.menuItemProps}>
                                                    {action.content}
                                                </DropdownItem>
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
