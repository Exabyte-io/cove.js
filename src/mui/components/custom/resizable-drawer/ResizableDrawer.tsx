import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { PaperProps } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import { styled, Theme } from "@mui/material/styles";
import React, { CSSProperties, useCallback, useEffect, useState } from "react";

type UseResizeProps = {
    minHeight: number;
    refocusChild?: boolean;
    childIdToRefocus?: string;
};

type UseResizeReturn = {
    height: number;
    isResizing: boolean;
    setHeight: React.Dispatch<React.SetStateAction<number>>;
    enableResize: () => void;
    disableResize: () => void;
};

interface ResizeListenerProps {
    resize: (e: MouseEvent) => void;
    disableResize: () => void;
    refocusChild?: boolean;
    childIdToRefocus?: string;
}

function removeResizeListener({
    resize,
    disableResize,
    refocusChild,
    childIdToRefocus,
}: ResizeListenerProps) {
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", disableResize);
    if (refocusChild && childIdToRefocus) {
        document.getElementById(childIdToRefocus)?.focus();
    }
}

function addResizeListener({
    resize,
    disableResize,
}: Pick<ResizeListenerProps, "resize" | "disableResize">) {
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", disableResize);
}

const useResize = ({
    minHeight,
    refocusChild,
    childIdToRefocus,
}: UseResizeProps): UseResizeReturn => {
    const [isResizing, setIsResizing] = useState(false);
    const [height, setHeight] = useState(window.innerHeight / 2);
    const enableResize = useCallback(() => {
        setIsResizing(true);
    }, []);

    const disableResize = useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = useCallback(
        (e: MouseEvent) => {
            if (!isResizing) return;
            const newHeight = window.innerHeight - e.clientY;

            if (newHeight >= minHeight) setHeight(newHeight);
        },
        [isResizing],
    );

    useEffect(() => {
        addResizeListener({ resize, disableResize });

        return () =>
            removeResizeListener({ resize, disableResize, refocusChild, childIdToRefocus });
    }, [disableResize, resize]);

    useEffect(() => {
        if (isResizing) return;
        removeResizeListener({ resize, disableResize, refocusChild, childIdToRefocus });
    }, [isResizing]);

    return { height, isResizing, setHeight, enableResize, disableResize };
};

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.grey[800],
}));

const Puller = styled(Box)(({ theme, isResizing }: { theme?: Theme; isResizing: boolean }) => ({
    cursor: "row-resize",
    width: 30,
    height: 6,
    backgroundColor: isResizing ? theme?.palette.grey[300] : theme?.palette.grey[900],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
}));

const TRANSITION_DURATION = 500; // ms
const DRAWER_MIN_HEGHT = 20;

export type MUIDrawerProps = Omit<
    DrawerProps,
    "variant" | "anchor" | "onClose" | "SlideProps" | "PaperProps"
>;

export interface ResizableDrawerProps extends MUIDrawerProps {
    onClose: () => void;
    refocusChild?: boolean;
    childIdToRefocus?: string;
    paperProps?: PaperProps;
    containerRef?: React.RefObject<HTMLDivElement>;
}

export default function ResizableDrawer({
    children,
    onClose,
    refocusChild = false,
    childIdToRefocus,
    paperProps,
    containerRef,
    ...drawerProps
}: ResizableDrawerProps) {
    const { height, setHeight, isResizing, enableResize, disableResize } = useResize({
        minHeight: DRAWER_MIN_HEGHT,
        refocusChild,
        childIdToRefocus,
    });

    // Styles to make the drawer fit the container
    const drawerStyles: CSSProperties =
        containerRef && containerRef.current
            ? {
                  position: "absolute",
                  left: containerRef.current.offsetLeft,
                  bottom: window.innerHeight - containerRef.current.offsetHeight,
                  maxHeight: containerRef.current.offsetHeight,
                  width: containerRef.current.offsetWidth,
                  boxSizing: "border-box",
              }
            : {};

    const drawerPaperProps = {
        style: {
            ...drawerStyles,
            height,
            ...(paperProps?.style || {}),
        },
    };

    const maximize = () => {
        const targetHeight =
            height < window.innerHeight / 3 ? window.innerHeight / 3 : window.innerHeight;
        setHeight(targetHeight);
        if (refocusChild && childIdToRefocus) {
            document.getElementById(childIdToRefocus)?.focus();
        }
    };

    const minimize = () => {
        const targetHeight =
            height > window.innerHeight / 3 ? window.innerHeight / 3 : DRAWER_MIN_HEGHT;
        setHeight(targetHeight);
        if (refocusChild && childIdToRefocus) {
            document.getElementById(childIdToRefocus)?.focus();
        }
    };

    return (
        <Drawer
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...drawerProps}
            variant="persistent"
            anchor="bottom"
            onClose={onClose}
            SlideProps={{
                direction: "up",
                timeout: TRANSITION_DURATION,
                in: true,
                appear: true,
            }}
            PaperProps={drawerPaperProps}>
            <Box display="flex" justifyContent="right">
                <KeyboardArrowUpIcon
                    fontSize="large"
                    onClick={maximize}
                    sx={{ cursor: "pointer" }}
                />
                <KeyboardArrowDownIcon
                    fontSize="large"
                    onClick={minimize}
                    sx={{ cursor: "pointer" }}
                />
                <CloseIcon fontSize="large" onClick={onClose} sx={{ cursor: "pointer" }} />
            </Box>
            <StyledBox
                sx={{
                    position: "absolute",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    visibility: "visible",
                    right: 0,
                    left: 0,
                }}>
                <Puller
                    isResizing={isResizing}
                    onMouseDown={enableResize}
                    onMouseUp={disableResize}
                />
            </StyledBox>
            {children}
        </Drawer>
    );
}
