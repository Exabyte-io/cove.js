import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import MUIRadioGroup from "@mui/material/RadioGroup";
import React from "react";
export default function RadioGroup({ id, label, items, value, fontSize = 16, onChange, }) {
    return (React.createElement(FormControl, null,
        label ? React.createElement(FormLabel, { id: id }, label) : null,
        React.createElement(MUIRadioGroup, { onChange: onChange, value: value }, items.map(({ id: itemId, label: itemLabel, value: itemValue }) => {
            return (React.createElement(FormControlLabel, { label: itemLabel, value: itemValue, key: itemId, control: React.createElement(Radio, { id: itemId, size: "medium", sx: {
                        "& .MuiSvgIcon-root": {
                            fontSize,
                        },
                    } }), sx: {
                    "& .MuiFormControlLabel-label": {
                        fontSize,
                    },
                } }));
        }))));
}
