import { DrawerProps } from "@mui/material/Drawer";
import React from "react";
export type MUIDrawerProps = Omit<DrawerProps, "variant" | "anchor" | "open" | "onClose" | "SlideProps" | "PaperProps" | "children">;
export default function ResizableDrawer({ children, open, onClose, refocusChild, childIdToRefocus, paperProps, containerRef, drawerProps, }: {
    children: React.ReactElement;
    open: boolean;
    onClose: () => void;
    refocusChild?: boolean;
    childIdToRefocus?: string;
    paperProps?: object;
    containerRef?: React.RefObject<HTMLDivElement>;
    drawerProps?: MUIDrawerProps;
}): React.JSX.Element;
