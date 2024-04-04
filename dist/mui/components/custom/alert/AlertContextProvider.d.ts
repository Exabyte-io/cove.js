import { AlertProps } from "@mui/material/Alert";
import { SnackbarProps } from "@mui/material/Snackbar";
import React from "react";
export type ExtendedAlertProps = AlertProps & {
    content: string;
};
export declare const AlertContext: React.Context<{
    show: (alertProps: ExtendedAlertProps, snackbarProps?: SnackbarProps) => void;
} | null>;
export interface AlertProvider {
    children: React.ReactNode;
}
declare function AlertProvider({ children }: AlertProvider): React.JSX.Element;
export declare const AlertContextProvider: React.MemoExoticComponent<typeof AlertProvider>;
export {};
