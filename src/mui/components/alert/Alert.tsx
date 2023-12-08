import Stack from "@mui/material/Stack";
import { alpha, SxProps, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";

import IconByName from "../icon/IconByName";

export enum Statuses {
    INFO = "info",
    WARNING = "warning",
    ERROR = "error",
    SUCCESS = "success",
}

enum StatusIcons {
    INFO = "status.info",
    WARNING = "status.warning",
    ERROR = "status.error",
    SUCCESS = "status.success",
}

interface QuotaAlertProps {
    variation: Statuses;
    message: string;
    sx?: SxProps;
    fontSize?: number;
}

export function Alert({ variation = Statuses.INFO, message = "", sx, fontSize }: QuotaAlertProps) {
    const theme = useTheme();
    let color: string;
    let iconName: string;
    switch (variation) {
        case Statuses.WARNING:
            color = theme.palette.warning.main;
            iconName = StatusIcons.WARNING;
            break;
        case Statuses.ERROR:
            color = theme.palette.error.main;
            iconName = StatusIcons.ERROR;
            break;
        case Statuses.SUCCESS:
            color = theme.palette.success.main;
            iconName = StatusIcons.SUCCESS;
            break;
        case Statuses.INFO:
        default:
            color = theme.palette.primary.main;
            iconName = StatusIcons.INFO;
            break;
    }

    return (
        <Stack
            direction="row"
            spacing={1}
            sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                backgroundColor: alpha(color, 0.15),
                borderRadius: 1,
                fontSize: fontSize || undefined,
                color,
                p: 1,
                m: 1,
                ...sx,
            }}>
            <IconByName
                name={iconName}
                color={variation}
                fontSize={fontSize ? "inherit" : undefined}
            />
            <Typography variant="body2" color={color} fontSize={fontSize ? "inherit" : undefined}>
                {message}
            </Typography>
        </Stack>
    );
}
export default Alert;
