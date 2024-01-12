import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

function AutocompleteVariants({
    size,
    variant,
}: {
    size: "small" | "medium";
    variant: "standard" | "filled" | "outlined";
}) {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            options={top20Films}
            size={size}
            // eslint-disable-next-line react/jsx-props-no-spreading
            renderInput={(params) => <TextField {...params} label="Movie" variant={variant} />}
        />
    );
}

const sizes = ["small", "medium"] as ("small" | "medium")[];
export function AutocompleteTest() {
    return (
        <Stack spacing={2} alignItems="center">
            <Typography variant="subtitle1">Autocomplete</Typography>
            {sizes.map((size) => (
                <Stack direction="row" spacing={1}>
                    <AutocompleteVariants size={size} variant="outlined" />
                    <AutocompleteVariants size={size} variant="filled" />
                    <AutocompleteVariants size={size} variant="standard" />
                </Stack>
            ))}
        </Stack>
    );
}

// Top 20 films as rated by IMDb users. http://www.imdb.com/chart/top
const top20Films = [
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
    {
        label: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
    },
    {
        label: "Star Wars: Episode V - The Empire Strikes Back",
        year: 1980,
    },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    {
        label: "The Lord of the Rings: The Two Towers",
        year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: "Goodfellas", year: 1990 },
    { label: "The Matrix", year: 1999 },
    { label: "Seven Samurai", year: 1954 },
    {
        label: "Star Wars: Episode IV - A New Hope",
        year: 1977,
    },
];
