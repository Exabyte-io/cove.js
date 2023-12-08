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

const StatusConfig = {
    [Statuses.INFO]: {
        color: Statuses.INFO,
        icon: StatusIcons.INFO,
    },
    [Statuses.WARNING]: {
        color: Statuses.WARNING,
        icon: StatusIcons.WARNING,
    },
    [Statuses.ERROR]: {
        color: Statuses.ERROR,
        icon: StatusIcons.ERROR,
    },
    [Statuses.SUCCESS]: {
        color: Statuses.SUCCESS,
        icon: StatusIcons.SUCCESS,
    },
};

function Alert({ variation = Statuses.INFO, message = "", sx, fontSize }: QuotaAlertProps) {
    const theme = useTheme();

    const { color: colorPalette, icon } = StatusConfig[variation];
    const color = theme.palette[colorPalette];

    return (
        <Stack
            direction="row"
            spacing={1}
            sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                backgroundColor: alpha(color.main, 0.15),
                borderRadius: 1,
                fontSize: fontSize || undefined,
                color: color.main,
                p: 1,
                m: 1,
                ...sx,
            }}>
            <IconByName
                name={icon}
                color={colorPalette}
                fontSize={fontSize ? "inherit" : undefined}
            />
            <Typography
                variant="body2"
                color={color.dark}
                fontSize={fontSize ? "inherit" : undefined}>
                {message}
            </Typography>
        </Stack>
    );
}
export default Alert;
