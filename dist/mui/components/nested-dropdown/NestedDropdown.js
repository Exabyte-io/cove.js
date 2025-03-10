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
import Popper from "@mui/material/Popper";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useCallback, useRef, useState } from "react";
import { DefaultDropdownButton } from "../dropdown/DefaultDropdownButton";
import IconByName from "../icon/IconByName";
import { NestedDropdownItem } from "./NestedDropdownItem";
// TODO: discuss turning this into fully reusable component, renaming to Dropdown? and changing existing implementations to use that.
/**
 * @summary Nested dropdown component, can be used as a default dropdown component
 *  Nested dropdown component can be used as a default dropdown component,
 *  with options to make it nested and display menu in a flexible way:
 *  header - optional header text for the dropdown
 *  [actions: leftIcon, content, rightIcon] - optional actions array which will be converted to dropdown menu items.
 *  contentObject - optional object to display custom content layout
 *  divider - optional divider to separate dropdown menu items
 *  @param {Object} props
 *  @param {React.ReactNode[]} [props.contentObject] - any arbitrary content to display in dropdown in place of menu items
 *  @param {Object} [props.buttonProps] - props for default button component
 *  @param {Object} [props.popperProps] - props for popper component
 */
export default function NestedDropdown({ id, actions, contentObject, buttonProps = {
    content: "",
}, popperProps = {
    id: "popper",
}, paperSx = {}, children = null, disabled = false, paperPlacement = "auto-end", className = "", header, isMobile = false, }) {
    var _a;
    const containerRef = useRef(null);
    const [opened, setOpened] = useState(false);
    const theme = useTheme();
    const onClick = useCallback(() => setOpened(true), []);
    const onClickAway = useCallback(() => setOpened(false), []);
    const onMenuItemClick = useCallback((actionId) => {
        const targetAction = actions === null || actions === void 0 ? void 0 : actions.find((action) => {
            return action.id === actionId;
        });
        if (!targetAction) {
            return;
        }
        if (!targetAction.shouldMenuStayOpened) {
            setOpened(false);
        }
        if (targetAction.onClick)
            targetAction.onClick(targetAction);
    }, [actions]);
    const onListKeyDown = useCallback((event) => {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpened(false);
        }
    }, []);
    return (React.createElement(Box, { className: className, id: id, sx: { width: isMobile ? "100%" : undefined } },
        React.createElement("div", { ref: containerRef, onClick: onClick }, children || (React.createElement(DefaultDropdownButton, { fullWidth: isMobile || false, disabled: disabled }, (buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.content) ||
            ((_a = ((actions === null || actions === void 0 ? void 0 : actions.find(({ isSelected }) => isSelected)) || (actions === null || actions === void 0 ? void 0 : actions[0]))) === null || _a === void 0 ? void 0 : _a.content)))),
        React.createElement(Popper
        // @ts-ignore
        , { 
            // @ts-ignore
            style: { zIndex: theme.dropdownPopperZindex }, open: opened, anchorEl: containerRef === null || containerRef === void 0 ? void 0 : containerRef.current, transition: true, placement: paperPlacement, ...popperProps }, ({ TransitionProps }) => (React.createElement(Grow, { ...TransitionProps, style: { transformOrigin: "center top" } },
            React.createElement(Paper, { sx: {
                    minWidth: () => { var _a; return (_a = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth; },
                    ...paperSx,
                } },
                Boolean(header) && (React.createElement(React.Fragment, null,
                    React.createElement(ListItem, null,
                        React.createElement(Typography, { variant: "h6", color: "text.primary" }, header)),
                    React.createElement(Divider, null))),
                React.createElement(ClickAwayListener, { onClickAway: onClickAway },
                    React.createElement(Box, null,
                        Boolean(contentObject) && contentObject,
                        React.createElement(MenuList, { autoFocusItem: opened, id: "dropdown-menu", onKeyDown: onListKeyDown }, actions === null || actions === void 0 ? void 0 : actions.filter(({ isShown }) => isShown !== false).map((action) => {
                            if (action.isDivider) {
                                return (React.createElement(Divider, { key: action.key || action.id }));
                            }
                            if (action.actions) {
                                return (React.createElement(NestedDropdown, { key: action.key || action.id, actions: action.actions, header: action.header, paperPlacement: action.paperPlacement ||
                                        paperPlacement },
                                    React.createElement(NestedDropdownItem, { disabled: action.disabled, id: action.id, key: action.key || action.id, 
                                        // TODO: detect whether the popper opens to the left or to the right and render only corresponding default icon, currently works only with explicit left/right placement
                                        leftIcon: action.leftIcon ||
                                            (paperPlacement.startsWith("left") ? (React.createElement(IconByName, { name: "shapes.arrow.left" })) : undefined), content: action.content, rightIcon: action.rightIcon ||
                                            (paperPlacement.startsWith("right") ? (React.createElement(IconByName, { name: "shapes.arrow.right" })) : undefined) })));
                            }
                            return (React.createElement(NestedDropdownItem, { disabled: action.disabled, id: action.id, onClick: onMenuItemClick, leftIcon: action.leftIcon, content: action.content, rightIcon: action.rightIcon, key: action.key || action.id, typographyProps: {
                                    variant: isMobile ? "body2" : "body1",
                                    color: theme.palette.text.primary,
                                } }));
                        }))))))))));
}
