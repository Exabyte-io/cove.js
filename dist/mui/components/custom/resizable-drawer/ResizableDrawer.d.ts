import React from "react";
export default function ResizableDrawer({ children, open, onClose, refocusChild, childIdToRefocus, }: {
    children: React.ReactElement;
    open: boolean;
    onClose: () => void;
    refocusChild?: boolean;
    childIdToRefocus?: string;
}): React.JSX.Element;
