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
            // Adding the new extraLarge variant
            {
                props: { fontSize: "xLarge" },
                style: {
                    fontSize: "3rem",
                },
            },
            {
                props: { fontSize: "xxLarge" },
                style: {
                    fontSize: "3.5rem",
                },
            },
        ],
    },
});
export default icons;
