import Alert from "@mui/lab/Alert";
import AlertTitle from "@mui/lab/AlertTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import React, { forwardRef } from "react";
const Transition = forwardRef((props, ref) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return React.createElement(Slide, { direction: "up", ref: ref, ...props });
});
export default function AlertDialog({ title, text, onCloseClick }) {
    return (React.createElement(Dialog, { open: true, TransitionComponent: Transition, keepMounted: true, onClose: onCloseClick },
        React.createElement(DialogContent, { sx: { p: 2.5 } },
            React.createElement(Alert, { severity: "error" },
                React.createElement(AlertTitle, null,
                    React.createElement("h4", null, title)),
                text))));
}
