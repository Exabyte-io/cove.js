const icons = () => ({
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
                props: { fontSize: "extraLarge" },
                style: {
                    fontSize: "3.5rem", // Define the font size for extraLarge
                },
            },
        ],
    },
});
export default icons;
