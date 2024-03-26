import React from "react";
export default function ResizableDrawer({ children, open, onClose, refocusChild, childIdToRefocus, paperProps, }: {
    children: React.ReactElement;
    open: boolean;
    onClose: () => void;
    refocusChild?: boolean;
    childIdToRefocus?: string;
    paperProps?: object;
}): React.JSX.Element;
