import { Theme } from "@mui/material/styles";

// The default theme values are relative in rem per https://mui.com/material-ui/customization/default-theme/
// Only updating the body font size

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Typography = (theme: Theme): Partial<Theme["typography"]> => {
    return {
        fontFamily: ["Roboto", "-apple-system", "sans-serif"].join(","),
        body1: {
            fontSize: 12,
        },
    };
};

export default Typography;
