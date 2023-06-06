import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import React, { ReactNode, SyntheticEvent, useState } from "react";

import IconByName from "../../../icon/IconByName";
import { ColorBox, TotalContainer } from "./TotalWidget.styled";

export interface TotalWidgetProps {
    id?: string;
    sum: string;
    label: string;
    iconName: string;
    boxColor: string;
    isBorder?: boolean;
    textColor?: string;
    popoverContent?: ReactNode;
}

export default function TotalWidget({
    id = "",
    sum,
    label,
    iconName,
    boxColor,
    textColor = "text.primary",
    popoverContent = null,
    isBorder = true,
}: TotalWidgetProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handlePopoverOpen = (event: SyntheticEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(popoverContent) && Boolean(anchorEl);

    return (
        <TotalContainer id={id} isBorder={isBorder}>
            <ColorBox
                color={boxColor}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                isPointer={popoverContent}
            >
                <IconByName name={iconName} sx={{ color: boxColor }} />
            </ColorBox>
            <Box className="info" sx={{ pl: 1, pr: 1 }}>
                <Typography className="sum" variant="subtitle2" color={textColor}>
                    {sum}
                </Typography>
                <Typography className="total" variant="caption" color={textColor}>
                    {label}
                </Typography>
            </Box>
            <Popover
                sx={{
                    pointerEvents: "none",
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                {popoverContent}
            </Popover>
        </TotalContainer>
    );
}
