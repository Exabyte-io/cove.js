import { PaperProps } from "@mui/material";
import { DrawerProps } from "@mui/material/Drawer";
import React from "react";
export type MUIDrawerProps = Omit<DrawerProps, "variant" | "anchor" | "onClose" | "SlideProps" | "PaperProps">;
export interface ResizableDrawerProps extends MUIDrawerProps {
    onClose: () => void;
    refocusChild?: boolean;
    childIdToRefocus?: string;
    paperProps?: PaperProps;
    containerRef?: React.RefObject<HTMLDivElement>;
}
export default function ResizableDrawer({ children, onClose, refocusChild, childIdToRefocus, paperProps, containerRef, ...drawerProps }: ResizableDrawerProps): React.JSX.Element;
