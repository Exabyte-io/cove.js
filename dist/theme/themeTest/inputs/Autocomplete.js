import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import TestComponentContainer from "../TestComponentContainer";
export function AutocompleteTest() {
    const sizes = ["small", "medium"];
    const variants = ["outlined", "filled", "standard"];
    return (React.createElement(TestComponentContainer, { title: "Autocomplete" }, sizes.map((size) => (React.createElement(Stack, { direction: "row", spacing: 1, alignItems: "center", key: size },
        React.createElement(Typography, { variant: "caption" }, size),
        variants.map((variant) => (React.createElement(Autocomplete, { disablePortal: true, id: "combo-box-demo", 
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            options: top10Films, size: size, renderInput: (params) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            React.createElement(TextField, { ...params, label: "Movie", variant: variant })), key: variant }))))))));
}
// Top 10 films as rated by IMDb users. http://www.imdb.com/chart/top
const top10Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
        label: "The Lord of the Rings: The Return of the King",
        year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
];
