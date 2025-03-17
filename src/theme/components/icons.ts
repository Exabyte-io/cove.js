import { ComponentsVariants } from "@mui/material/styles";

declare module "@mui/material/SvgIcon" {
    interface SvgIconPropsSizeOverrides {
        extraLarge: true;
    }
}

const icons = (): {
    MuiSvgIcon: {
        variants: ComponentsVariants["MuiSvgIcon"];
    };
} => ({
    MuiSvgIcon: {
        variants: [
            {
                props: { fontSize: "small" },
                style: {
                    fontSize: "1.125rem",
                },
            },
            {
                props: { fontSize: "medium" },
                style: {
                    fontSize: "1.25rem",
                },
            },
            {
                props: { fontSize: "large" },
                style: {
                    fontSize: "2.1875rem",
                },
            },
            {
                props: { fontSize: "extraLarge" }, // Adding the new extraLarge variant
                style: {
                    fontSize: "3rem", // Define the font size for extraLarge
                },
            },
        ],
    },
});

export default icons;
