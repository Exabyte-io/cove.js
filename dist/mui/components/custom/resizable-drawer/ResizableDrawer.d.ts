import React from "react";

export default function ResizableDrawer({
    children,
    open,
    onClose,
    refocusChild,
    childIdToRefocus,
    paperProps,
    containerRef,
}: {
    children: React.ReactElement;
    open: boolean;
    onClose: () => void;
    refocusChild?: boolean;
    childIdToRefocus?: string;
    paperProps?: object;
    containerRef: React.RefObject<HTMLDivElement>;
}): React.JSX.Element;
