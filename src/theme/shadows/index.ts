import { Theme } from "@mui/material/styles";

const Shadows = (theme: Theme) => {
    return ["rgba(76, 78, 100, 0.22) 0px 2px 10px 0px", ...theme.shadows];
};

export default Shadows;
