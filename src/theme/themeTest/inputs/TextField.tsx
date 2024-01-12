import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";

export function TextFieldTest() {
    return (
        <Stack spacing={2} alignItems="center">
            <Typography variant="subtitle1">TextField</Typography>
            <Stack spacing={2} direction="row" component="form" noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
                <TextField id="filled-basic" label="Filled" variant="filled" size="small" />
                <TextField id="standard-basic" label="Standard" variant="standard" size="small" />
            </Stack>
            <Stack spacing={2} direction="row" component="form" noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="medium" />
                <TextField id="filled-basic" label="Filled" variant="filled" size="medium" />
                <TextField id="standard-basic" label="Standard" variant="standard" size="medium" />
            </Stack>
        </Stack>
    );
}
