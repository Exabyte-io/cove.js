import { ComponentsVariants } from "@mui/material/styles";
declare module "@mui/material/SvgIcon" {
    interface SvgIconPropsSizeOverrides {
        extraLarge: true;
    }
}
declare const icons: () => {
    MuiSvgIcon: {
        variants: ComponentsVariants["MuiSvgIcon"];
    };
};
export default icons;
