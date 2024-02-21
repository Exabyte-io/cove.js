declare const chips: () => {
    MuiChip: {
        variants: {
            props: {
                size: string;
            };
            style: {
                fontSize: string;
            };
        }[];
    };
};
export default chips;
