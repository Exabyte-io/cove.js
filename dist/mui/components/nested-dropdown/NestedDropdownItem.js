import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useCallback } from "react";
const StyledListItemIcon = styled(ListItemIcon)({
    position: "absolute",
    right: 0,
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
    paddingRight: theme.spacing(2),
}));
/**
 * @summary Nested dropdown item component. The main idea of the component is to provide
 * flexible way to display leftIcon | content | rightIcon
 * where each of them can be optional.
 */
export function NestedDropdownItem({ disabled = false, id, onClick, leftIcon, content, rightIcon, typographyProps = { variant: "body1", color: "text.primary" }, }) {
    const onItemClick = useCallback(() => {
        if (typeof onClick === "function") {
            onClick(id);
        }
    }, [id, onClick]);
    return (React.createElement(MenuItem, { key: id, id: id, disabled: disabled, onClick: onItemClick, sx: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
        React.createElement(StyledBox, null,
            Boolean(leftIcon) && React.createElement(ListItemIcon, null, leftIcon),
            Boolean(content) && (React.createElement(Typography
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            , { ...typographyProps, className: "DropdownItemText" }, content))),
        Boolean(rightIcon) && React.createElement(StyledListItemIcon, null, rightIcon)));
}
