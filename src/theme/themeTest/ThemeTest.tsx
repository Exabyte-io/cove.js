import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Theme } from "@mui/material/styles";
import React from "react";

import { oldLightMaterialUITheme } from "../theme";
import { ButtonTest } from "./buttons/Button";
import { ButtonGroupTest } from "./buttons/ButtonGroup";
import { IconButtonTest } from "./buttons/IconButton";
import { SwitchTest } from "./buttons/Switch";
import { ToggleButtonTest } from "./buttons/ToggleButton";
import { AutocompleteTest } from "./inputs/Autocomplete";
import { SelectTest } from "./inputs/Select";
import { TextFieldTest } from "./inputs/TextField";
import { TypographyTest } from "./typography/Typography";

export default function ThemeTest({ theme = oldLightMaterialUITheme }: { theme?: Theme }) {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Stack spacing={2} m={2}>
                    <ButtonTest />
                    <IconButtonTest />
                    <ButtonGroupTest />
                    <ToggleButtonTest />
                    <SwitchTest />
                    <TextFieldTest />
                    <AutocompleteTest />
                    <SelectTest />
                    <TypographyTest />
                </Stack>
            </Box>
        </ThemeProvider>
    );
}
