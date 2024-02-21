import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
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
export default function ThemeTest({ theme = oldLightMaterialUITheme }) {
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(Box, null,
            React.createElement(Stack, { spacing: 2, m: 2 },
                React.createElement(ButtonTest, null),
                React.createElement(IconButtonTest, null),
                React.createElement(ButtonGroupTest, null),
                React.createElement(ToggleButtonTest, null),
                React.createElement(SwitchTest, null),
                React.createElement(TextFieldTest, null),
                React.createElement(AutocompleteTest, null),
                React.createElement(SelectTest, null),
                React.createElement(TypographyTest, null)))));
}
