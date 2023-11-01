import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const PositionInfoPopover = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    borderRadius: "50%",
    right: -14,
    top: -14,
}));
