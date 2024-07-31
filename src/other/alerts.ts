import { enqueueSnackbar, SnackbarOrigin } from "notistack";

const anchorOrigin: SnackbarOrigin = {
    vertical: "bottom",
    horizontal: "left",
};

export function showSuccessAlert(message: string) {
    enqueueSnackbar(message, { variant: "success", anchorOrigin });
}

export function showErrorAlert(message: string) {
    enqueueSnackbar(message, { variant: "error", anchorOrigin });
}

export function showWarningAlert(message: string) {
    enqueueSnackbar(message, { variant: "warning", anchorOrigin });
}

export function showInfoAlert(message: string) {
    enqueueSnackbar(message, { variant: "info", anchorOrigin });
}

export function showAlert(message: string, type: "info" | "warning" | "error" | "success") {
    switch (type) {
        case "warning":
            showWarningAlert(message);
            break;
        case "error":
            showErrorAlert(message);
            break;
        case "success":
            showSuccessAlert(message);
            break;
        case "info":
            showInfoAlert(message);
            break;
        default:
            showInfoAlert(message);
    }
}
