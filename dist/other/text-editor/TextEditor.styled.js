import { styled } from "@mui/styles";
export const EditorContainer = styled("div")(() => ({
    backgroundColor: "white",
}));
export const ViewerContainer = styled("div")(({ theme }) => ({
    border: "1px solid " + theme.palette.border.dark,
    padding: theme.spacing(1),
}));
