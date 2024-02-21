import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import TestComponentContainer from "../TestComponentContainer";
const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
];
export function SelectTest() {
    const [personName, setPersonName] = React.useState([]);
    const handleNameChange = (event) => {
        const { target: { value }, } = event;
        setPersonName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value);
    };
    const [age, setAge] = React.useState("");
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };
    const sizes = ["small", "medium"];
    return (React.createElement(TestComponentContainer, { title: "Select" }, sizes.map((size) => (React.createElement(Stack, { direction: "row", spacing: 2, alignItems: "center", key: size },
        React.createElement(Typography, { variant: "caption" }, size),
        React.createElement(FormControl, { size: size },
            React.createElement(InputLabel, { id: "select-small-label" }, "Age"),
            React.createElement(Select, { labelId: "select-small-label", id: "select-small", value: age, label: "Age", size: size, onChange: handleAgeChange },
                React.createElement(MenuItem, { value: "" },
                    React.createElement("em", null, "None")),
                React.createElement(MenuItem, { value: 10 }, "Ten"),
                React.createElement(MenuItem, { value: 20 }, "Twenty"),
                React.createElement(MenuItem, { value: 30 }, "Thirty"))),
        React.createElement(FormControl, { size: size },
            React.createElement(InputLabel, { id: "multiselect-chip-label" }, "Chip"),
            React.createElement(Select, { labelId: "multiselect-chip-label", id: "multiselect-chip", multiple: true, value: personName, sx: { maxWidth: "300px" }, onChange: handleNameChange, size: size, input: React.createElement(OutlinedInput, { id: "select-multiselect-chip", label: "Chip" }), renderValue: (selected) => (React.createElement(Stack, { direction: "row", useFlexGap: true, flexWrap: "wrap", gap: 0.5 }, selected.map((value) => (React.createElement(Chip, { key: value, label: value }))))) }, names.map((name) => (React.createElement(MenuItem, { key: name, value: name }, name))))))))));
}
