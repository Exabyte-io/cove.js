import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { styled, Theme } from "@mui/material/styles";
import React, { useCallback, useEffect, useState } from "react";

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

const StyledDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== "containerRef" && prop !== "contained",
})(({ containerRef, contained, theme }) => ({
    "& .MuiDrawer-paper":
        contained && containerRef?.current
            ? {
                  position: "absolute",
                  // Set the maximum height and width based on the container's dimensions
                  maxHeight: containerRef.current.offsetHeight,
                  maxWidth: containerRef.current.offsetWidth,
                  // You might need additional styles to handle the exact positioning within the container
              }
            : {
                  // Default styles if not contained
              },
    // ... other styles
}));

const TRANSITION_DURATION = 500;
const DRAWER_MIN_HEGHT = 20;
export default function ResizableDrawer({
    children,
    open,
    onClose,
    contained = false,
    containerRef = null,
    refocusChild = false,
    childIdToRefocus,
}: {
    children: React.ReactElement;
    open: boolean;
    onClose: () => void;
    contained?: boolean;
    containerRef?: React.RefObject<HTMLDivElement> | null;
    refocusChild?: boolean;
    childIdToRefocus?: string;
}) {
    const { height, setHeight, isResizing, enableResize, disableResize } = useResize({
        minHeight: DRAWER_MIN_HEGHT,
        refocusChild,
        childIdToRefocus,
    });

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
        <StyledDrawer
            containerRef={containerRef}
            contained={contained}
            variant="persistent"
            anchor="bottom"
            open={open}
            onClose={onClose}
            SlideProps={{
                direction: "up",
                timeout: TRANSITION_DURATION,
                in: true,
                appear: true,
            }}
            PaperProps={{ style: { height } }}>
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
        </StyledDrawer>
    );
}
