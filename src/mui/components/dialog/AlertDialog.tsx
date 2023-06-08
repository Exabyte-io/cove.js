import Alert from "@mui/lab/Alert";
import AlertTitle from "@mui/lab/AlertTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide, { SlideProps } from "@mui/material/Slide";
import React, { forwardRef } from "react";

const Transition = forwardRef((props: SlideProps, ref: React.Ref<HTMLDivElement>) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Slide direction="up" ref={ref} {...props} />;
});

export interface AlertDialogProps {
    title: string;
    text: string;
    onCloseClick: () => void;
}

export default function AlertDialog({ title, text, onCloseClick }: AlertDialogProps) {
    return (
        <Dialog open TransitionComponent={Transition} keepMounted onClose={onCloseClick}>
            <DialogContent sx={{ p: 2.5 }}>
                <Alert severity="error">
                    <AlertTitle>
                        <h4>{title}</h4>
                    </AlertTitle>
                    {text}
                </Alert>
            </DialogContent>
        </Dialog>
    );
}
