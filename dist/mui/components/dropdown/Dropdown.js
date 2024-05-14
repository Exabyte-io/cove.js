import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Divider from "@mui/material/Divider";
import Grow from "@mui/material/Grow";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useCallback, useRef, useState } from "react";
import { DefaultDropdownButton } from "./DefaultDropdownButton";
import { DropdownItem } from "./DropdownItem";
/**
 *  MUI dropdown component have a default button with dropdown also could be used with
 * custom button which takes from children, actions array -> array which will be converted
 * to dropdown menu items.
 */
export default function Dropdown({ id, actions, buttonContent, popperProps = {
    id: "popper",
}, children = null, disabled = false, paperPlacement = "bottom-start", className = "", buttonProps, }) {
    var _a;
    const containerRef = useRef(null);
    const [opened, setOpened] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const onClick = useCallback(() => setOpened(true), []);
    const onClickAway = useCallback(() => setOpened(false), []);
    const onMenuItemClick = useCallback((actionId, event) => {
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
    }, [actions]);
    const onListKeyDown = useCallback((event) => {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpened(false);
        }
    }, []);
    return (React.createElement(Box, { className: className, id: id, sx: { width: isMobile ? "100%" : undefined } },
        React.createElement("div", { ref: containerRef, onClick: onClick }, children || (React.createElement(DefaultDropdownButton, { fullWidth: isMobile, disabled: disabled, ...buttonProps }, buttonContent ||
            ((_a = (actions.find(({ isSelected }) => isSelected) || actions[0])) === null || _a === void 0 ? void 0 : _a.content)))),
        React.createElement(Popper
        // @ts-ignore
        , { 
            // @ts-ignore
            style: { zIndex: theme.dropdownPopperZindex }, open: opened, anchorEl: containerRef === null || containerRef === void 0 ? void 0 : containerRef.current, transition: true, placement: paperPlacement, popperOptions: { placement: "bottom-start" }, ...popperProps }, ({ TransitionProps }) => (React.createElement(Grow, { ...TransitionProps, style: { transformOrigin: "center top" } },
            React.createElement(Paper, { sx: { minWidth: () => { var _a; return (_a = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth; } } },
                React.createElement(ClickAwayListener, { onClickAway: onClickAway },
                    React.createElement(MenuList, { autoFocusItem: opened, id: "dropdown-menu", onKeyDown: onListKeyDown }, actions
                        .filter(({ isShown }) => isShown !== false)
                        .map((action) => {
                        if (action.isDivider) {
                            return React.createElement(Divider, { key: action.key || action.id });
                        }
                        return (React.createElement(DropdownItem, { disabled: action.disabled, icon: action.icon, endIcon: action.endIcon, id: action.id, onMenuItemClick: onMenuItemClick, showCheckIcon: action.showCheckIcon, key: action.key || action.id, ...action.menuItemProps }, action.content));
                    })))))))));
}
