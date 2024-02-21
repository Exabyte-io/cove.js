const chips = () => {
    return {
        MuiChip: {
            variants: [
                {
                    props: { size: "medium" },
                    style: {
                        fontSize: "12px",
                    },
                },
                {
                    props: { size: "small" },
                    style: {
                        fontSize: "8px",
                    },
                },
            ],
        },
    };
};
export default chips;
