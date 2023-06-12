import { Theme } from "@mui/material/styles";
import { styled } from "@mui/styles";

export const InfoWidgetContainer = styled("div")(({ theme }: { theme: Theme }) => ({
    border: `1px solid ${theme.palette.border.dark}`,
    borderRadius: "4px",
    width: "100%",

    [theme.breakpoints.down("md")]: {
        width: "initial",
    },
}));

export const Header = styled("div")(({ theme }: { theme: Theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.border.dark}`,
    padding: theme.spacing(2),

    [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",

        ">:first-child": {
            marginBottom: theme.spacing(1),
        },
    },
}));

export const Content = styled("div")(({ theme }: { theme: Theme }) => ({
    padding: theme.spacing(2),
}));
