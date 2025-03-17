import { ComponentsVariants } from "@mui/material/styles";
declare module "@mui/material/SvgIcon" {
    interface SvgIconPropsSizeOverrides {
        extraLarge: true;
    }
}
type IconsResult = {
    MuiSvgIcon: {
        variants: ComponentsVariants["MuiSvgIcon"];
    };
};
declare const icons: () => IconsResult;
export default icons;
