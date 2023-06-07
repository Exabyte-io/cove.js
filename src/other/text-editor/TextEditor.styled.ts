import { Theme } from "@mui/material/styles";
import { styled } from "@mui/styles";

export const EditorContainer = styled("div")(() => ({
    backgroundColor: "white",
}));

export const ViewerContainer = styled("div")(({ theme }: { theme: Theme }) => ({
    border: "1px solid " + theme.palette.border.dark,
    padding: theme.spacing(1),
}));
