import { Theme } from "@mui/material/styles";
type SizeConfig = {
    height: number;
    icon: string;
    startIcon: string;
    paddingX?: number;
};
declare const buttons: (theme: Theme, commonSettings: {
    sizes: {
        button: {
            small: SizeConfig;
            medium: SizeConfig;
            large: SizeConfig;
        };
    };
}) => {
    MuiToggleButton: {
        styleOverrides: {
            root: {
                minWidth: string;
                height: string;
            };
            sizeSmall: {
                "& .MuiSvgIcon-root": {
                    fontSize: string;
                };
                "& .MuiButton-startIcon .MuiSvgIcon-root, & .MuiButton-endIcon .MuiSvgIcon-root": {
                    fontSize: string;
                };
                paddingLeft?: string | undefined;
                paddingRight?: string | undefined;
                height?: string | undefined;
            };
            sizeMedium: {
                "& .MuiSvgIcon-root": {
                    fontSize: string;
                };
                "& .MuiButton-startIcon .MuiSvgIcon-root, & .MuiButton-endIcon .MuiSvgIcon-root": {
                    fontSize: string;
                };
                paddingLeft?: string | undefined;
                paddingRight?: string | undefined;
                height?: string | undefined;
            };
            sizeLarge: {
                "& .MuiSvgIcon-root": {
                    fontSize: string;
                };
                "& .MuiButton-startIcon .MuiSvgIcon-root, & .MuiButton-endIcon .MuiSvgIcon-root": {
                    fontSize: string;
                };
                paddingLeft?: string | undefined;
                paddingRight?: string | undefined;
                height?: string | undefined;
            };
        };
    };
    MuiButton: {
        styleOverrides: {
            root: {
                whiteSpace: string;
                minWidth: string;
                height: string;
            };
            sizeSmall: {
                "& .MuiSvgIcon-root": {
                    fontSize: string;
                };
                "& .MuiButton-startIcon .MuiSvgIcon-root, & .MuiButton-endIcon .MuiSvgIcon-root": {
                    fontSize: string;
                };
                paddingLeft?: string | undefined;
                paddingRight?: string | undefined;
                height?: string | undefined;
            };
            sizeMedium: {
                "& .MuiSvgIcon-root": {
                    fontSize: string;
                };
                "& .MuiButton-startIcon .MuiSvgIcon-root, & .MuiButton-endIcon .MuiSvgIcon-root": {
                    fontSize: string;
                };
                paddingLeft?: string | undefined;
                paddingRight?: string | undefined;
                height?: string | undefined;
            };
            sizeLarge: {
                "& .MuiSvgIcon-root": {
                    fontSize: string;
                };
                "& .MuiButton-startIcon .MuiSvgIcon-root, & .MuiButton-endIcon .MuiSvgIcon-root": {
                    fontSize: string;
                };
                paddingLeft?: string | undefined;
                paddingRight?: string | undefined;
                height?: string | undefined;
            };
        };
    };
    MuiIconButton: {
        styleOverrides: {
            root: {
                minWidth: string;
                height: string;
            };
            sizeSmall: {
                "& .MuiSvgIcon-root": {
                    fontSize: string;
                };
                "& .MuiButton-startIcon .MuiSvgIcon-root, & .MuiButton-endIcon .MuiSvgIcon-root": {
                    fontSize: string;
                };
                paddingLeft?: string | undefined;
                paddingRight?: string | undefined;
                height?: string | undefined;
            };
            sizeMedium: {
                "& .MuiSvgIcon-root": {
                    fontSize: string;
                };
                "& .MuiButton-startIcon .MuiSvgIcon-root, & .MuiButton-endIcon .MuiSvgIcon-root": {
                    fontSize: string;
                };
                paddingLeft?: string | undefined;
                paddingRight?: string | undefined;
                height?: string | undefined;
            };
            sizeLarge: {
                "& .MuiSvgIcon-root": {
                    fontSize: string;
                };
                "& .MuiButton-startIcon .MuiSvgIcon-root, & .MuiButton-endIcon .MuiSvgIcon-root": {
                    fontSize: string;
                };
                paddingLeft?: string | undefined;
                paddingRight?: string | undefined;
                height?: string | undefined;
            };
        };
    };
    MuiButtonGroup: {
        styleOverrides: {
            root: {
                minWidth: string;
                height: string;
            };
        };
    };
};
export default buttons;
