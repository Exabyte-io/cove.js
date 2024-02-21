import { alpha } from "@mui/material/styles";
import { styled } from "@mui/styles";
export const TotalContainer = styled("div")(({ theme, isBorder }) => ({
    display: "inline-flex",
    alignItems: "center",
    border: isBorder ? `1px solid ${theme.palette.border.dark}` : "none",
    borderRadius: "4px",
    padding: theme.spacing(0.5),
    ".MuiSvgIcon-root": {
        width: "30px",
        height: "30px",
    },
}));
export const ColorBox = styled("div")(({ color, isPointer }) => ({
    height: "41px",
    width: "41px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: alpha(color || "#fff", 0.2),
    cursor: isPointer ? "pointer" : "initial",
}));
