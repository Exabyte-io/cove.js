import { ComponentsVariants } from "@mui/material/styles";

type IconsResult = {
    MuiSvgIcon: {
        variants: ComponentsVariants["MuiSvgIcon"];
    };
};

const icons = (): IconsResult => ({
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
                    fontSize: "3.5rem", // Define the font size for extraLarge
                },
            },
        ],
    },
});

export default icons;
