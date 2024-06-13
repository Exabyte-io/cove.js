import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import React, { useCallback, useEffect, useState } from "react";
function removeResizeListener({ resize, disableResize, refocusChild, childIdToRefocus, }) {
    var _a;
    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", disableResize);
    if (refocusChild && childIdToRefocus) {
        (_a = document.getElementById(childIdToRefocus)) === null || _a === void 0 ? void 0 : _a.focus();
    }
}
function addResizeListener({ resize, disableResize, }) {
    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", disableResize);
}
const useResize = ({ minHeight, refocusChild, childIdToRefocus, }) => {
    const [isResizing, setIsResizing] = useState(false);
    const [height, setHeight] = useState(window.innerHeight / 2);
    const enableResize = useCallback(() => {
        setIsResizing(true);
    }, []);
    const disableResize = useCallback(() => {
        setIsResizing(false);
    }, []);
    const resize = useCallback((e) => {
        if (!isResizing)
            return;
        const newHeight = window.innerHeight - e.clientY;
        if (newHeight >= minHeight)
            setHeight(newHeight);
    }, [isResizing]);
    useEffect(() => {
        addResizeListener({ resize, disableResize });
        return () => removeResizeListener({ resize, disableResize, refocusChild, childIdToRefocus });
    }, [disableResize, resize]);
    useEffect(() => {
        if (isResizing)
            return;
        removeResizeListener({ resize, disableResize, refocusChild, childIdToRefocus });
    }, [isResizing]);
    return { height, isResizing, setHeight, enableResize, disableResize };
};
const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.grey[800],
}));
const Puller = styled(Box)(({ theme, isResizing }) => ({
    cursor: "row-resize",
    width: 30,
    height: 6,
    backgroundColor: isResizing ? theme === null || theme === void 0 ? void 0 : theme.palette.grey[300] : theme === null || theme === void 0 ? void 0 : theme.palette.grey[900],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
}));
const TRANSITION_DURATION = 500; // ms
const DRAWER_MIN_HEGHT = 20;
export default function ResizableDrawer({ children, open, onClose, refocusChild = false, childIdToRefocus, paperProps, containerRef, drawerProps = {}, }) {
    const { height, setHeight, isResizing, enableResize, disableResize } = useResize({
        minHeight: DRAWER_MIN_HEGHT,
        refocusChild,
        childIdToRefocus,
    });
    // Styles to make the drawer fit the container
    const drawerStyles = containerRef && containerRef.current
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
            // @ts-ignore
            ...((paperProps === null || paperProps === void 0 ? void 0 : paperProps.style) || {}),
        },
    };
    const maximize = () => {
        var _a;
        const targetHeight = height < window.innerHeight / 3 ? window.innerHeight / 3 : window.innerHeight;
        setHeight(targetHeight);
        if (refocusChild && childIdToRefocus) {
            (_a = document.getElementById(childIdToRefocus)) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    const minimize = () => {
        var _a;
        const targetHeight = height > window.innerHeight / 3 ? window.innerHeight / 3 : DRAWER_MIN_HEGHT;
        setHeight(targetHeight);
        if (refocusChild && childIdToRefocus) {
            (_a = document.getElementById(childIdToRefocus)) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    return (React.createElement(Drawer
    // eslint-disable-next-line react/jsx-props-no-spreading
    , { ...drawerProps, variant: "persistent", anchor: "bottom", open: open, onClose: onClose, SlideProps: {
            direction: "up",
            timeout: TRANSITION_DURATION,
            in: true,
            appear: true,
        }, PaperProps: drawerPaperProps },
        React.createElement(Box, { display: "flex", justifyContent: "right" },
            React.createElement(KeyboardArrowUpIcon, { fontSize: "large", onClick: maximize, sx: { cursor: "pointer" } }),
            React.createElement(KeyboardArrowDownIcon, { fontSize: "large", onClick: minimize, sx: { cursor: "pointer" } }),
            React.createElement(CloseIcon, { fontSize: "large", onClick: onClose, sx: { cursor: "pointer" } })),
        React.createElement(StyledBox, { sx: {
                position: "absolute",
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                visibility: "visible",
                right: 0,
                left: 0,
            } },
            React.createElement(Puller, { isResizing: isResizing, onMouseDown: enableResize, onMouseUp: disableResize })),
        children));
}
