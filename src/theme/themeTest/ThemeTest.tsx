import { createTheme, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import React from "react";

import { ButtonTest } from "./buttons/Button";
import { ButtonGroupTest } from "./buttons/ButtonGroup";
import { IconButtonTest } from "./buttons/IconButton";
import { SwitchTest } from "./buttons/Switch";
import { ToggleButtonTest } from "./buttons/ToggleButton";
import { AutocompleteTest } from "./inputs/Autocomplete";
import { SelectTest } from "./inputs/Select";
import { TextFieldTest } from "./inputs/TextField";
import { TypographyTest } from "./typography/Typography";

export default function ThemeTest() {
    const theme = useTheme();
    const extendedTheme = createTheme(theme, {});

    const testComponents = [
        ButtonTest,
        IconButtonTest,
        ButtonGroupTest,
        ToggleButtonTest,
        SwitchTest,
        TextFieldTest,
        AutocompleteTest,
        SelectTest,
        TypographyTest,
    ];

    return (
        <ThemeProvider theme={extendedTheme}>
            <Box>
                <Stack spacing={2} m={2}>
                    {testComponents.map((Component) => (
                        <Paper sx={{ p: 2, m: 2 }} elevation={1}>
                            <Component />
                        </Paper>
                    ))}
                </Stack>
            </Box>
        </ThemeProvider>
    );
}
