import Chip from "@mui/material/Chip";
import FormControl, { FormControlProps } from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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

const sizes: FormControlProps["size"][] = ["small", "medium"];
const maxWidth = "300px";

export function SelectTest() {
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleNameChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value,
        );
    };

    const [age, setAge] = React.useState("");

    const handleAgeChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <TestComponentContainer title="Select">
            {sizes.map((size) => (
                <Stack direction="row" spacing={2} alignItems="center" key={size}>
                    <Typography variant="caption">{size}</Typography>
                    <FormControl size={size}>
                        <InputLabel id="select-small-label">Age</InputLabel>
                        <Select
                            labelId="select-small-label"
                            id="select-small"
                            value={age}
                            label="Age"
                            size={size}
                            onChange={handleAgeChange}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl size={size}>
                        <InputLabel id="multiselect-chip-label">Chip</InputLabel>
                        <Select
                            labelId="multiselect-chip-label"
                            id="multiselect-chip"
                            multiple
                            value={personName}
                            sx={{ maxWidth }} // required to prevent overflow
                            onChange={handleNameChange}
                            size={size}
                            input={<OutlinedInput id="select-multiselect-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Stack direction="row" useFlexGap flexWrap="wrap" gap={0.5}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Stack>
                            )}>
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>
            ))}
        </TestComponentContainer>
    );
}
