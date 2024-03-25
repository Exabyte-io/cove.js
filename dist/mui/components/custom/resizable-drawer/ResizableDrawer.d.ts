import React from "react";
export default function ResizableDrawer({ children, open, onClose, contained, containerRef, refocusChild, childIdToRefocus, }: {
    children: React.ReactElement;
    open: boolean;
    onClose: () => void;
    contained?: boolean;
    containerRef?: React.RefObject<HTMLDivElement> | null;
    refocusChild?: boolean;
    childIdToRefocus?: string;
}): React.JSX.Element;
