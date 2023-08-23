import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import { SxProps, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { makeStyles, styled } from "@mui/styles";
import React, { useRef, useState } from "react";

import IconByName from "../../icon/IconByName";

export const InfoIconButton = styled(IconButton)({
    "& svg": {
        /**
         *  TODO: the icon size should be controlled only through IconButton's size property
         *  @see https://mui.com/material-ui/react-button/#sizes-2
         * */
        fontSize: 20,
        color: "#adadad",
    },
});

export const PopoverTitle = styled(Typography)(({ theme }: { theme: Theme }) => ({
    fontSize: 14,
    fontWeight: "bold",
    margin: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
}));

export const PopoverText = styled(Typography)(({ theme }: { theme: Theme }) => ({
    padding: 0,
    fontSize: "inherit",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
}));

export const PopoverButton = styled(Button)(({ theme }: { theme: Theme }) => ({
    "&:hover": {
        backgroundColor: "transparent",
    },
    fontSize: "inherit",
    padding: 0,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
}));

const useStyles = makeStyles((theme: Theme) => ({
    paper: {
        minWidth: 300,
        maxWidth: 400,
        fontSize: 13,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: 0,
    },
}));

export interface InfoPopoverProps {
    id?: string;
    title?: string;
    onButtonClick?: () => void;
    children: React.ReactNode;
    iconSize?: "small" | "medium" | "large";
    sx?: SxProps;
}

export default function InfoPopover(props: InfoPopoverProps) {
    const { id = "", title = "", onButtonClick, children, iconSize = "medium", sx } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const iconRef = useRef(null);
    const classes = useStyles();
    const isOpen = Boolean(anchorEl);
    const popoverId = `docs-popover-${title.replace(/\s/g, "")}`;

    const handleIconClick = () => {
        setAnchorEl(iconRef.current);
    };

    const resetAnchor = () => {
        setAnchorEl(null);
    };

    const handleButtonClick = () => {
        resetAnchor();

        if (onButtonClick) {
            onButtonClick();
        }
    };

    return (
        <>
            <InfoIconButton
                id={id || `${popoverId}-IconButton`}
                aria-label="info"
                onClick={handleIconClick}
                ref={iconRef}
                sx={sx}
                size={iconSize}>
                <IconByName name="shapes.info" />
            </InfoIconButton>
            <Popover
                open={isOpen}
                onClose={resetAnchor}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                disableScrollLock
                classes={{ paper: classes.paper }}>
                {title ? <PopoverTitle>{title}</PopoverTitle> : null}
                <PopoverText>{children}</PopoverText>
                {onButtonClick ? (
                    <PopoverButton
                        id="docs-popover-textButton"
                        onClick={handleButtonClick}
                        color="primary"
                        disableRipple
                        disableElevation>
                        Learn more
                    </PopoverButton>
                ) : null}
            </Popover>
        </>
    );
}
