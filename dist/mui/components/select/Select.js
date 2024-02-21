/* eslint-disable react/jsx-props-no-spreading */
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import IconByName from "../icon/IconByName";
export default function SelectComponent({ id, items, label, value, size = "small", onChange, onDelete, isChips = false, multiple = false, sx = {}, fontSize = 16, getChipLabel = (value) => value, formControlProps = {}, }) {
    const renderValue = isChips
        ? (selected) => (React.createElement(Box, { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 } }, selected.map((chipValue) => (React.createElement(Chip, { key: chipValue, label: getChipLabel(chipValue), sx: { fontSize: fontSize - 2 }, clickable: true, onDelete: () => {
                if (onDelete)
                    onDelete(chipValue);
            }, deleteIcon: React.createElement(IconByName, { name: "actions.cancel", onMouseDown: (event) => event.stopPropagation() }) })))))
        : undefined;
    return (React.createElement(FormControl, { sx: { marginY: 1, width: "100%" }, size: size, ...formControlProps },
        label ? (React.createElement(InputLabel, { id: `${id}-label`, sx: { fontSize }, size: size === "small" ? size : "normal" }, label)) : null,
        React.createElement(Select, { id: id, labelId: `${id}-label`, label: label, value: value, multiple: multiple, size: size, sx: {
                width: "100%",
                fontSize,
                ...sx,
            }, renderValue: renderValue, onChange: onChange }, items.map((item) => (React.createElement(MenuItem, { id: item.id, key: item.value, value: item.value, sx: { fontSize } }, item.name))))));
}
