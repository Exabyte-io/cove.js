import { enqueueSnackbar } from "notistack";
const anchorOrigin = {
    vertical: "bottom",
    horizontal: "left",
};
export function showSuccessAlert(message) {
    enqueueSnackbar(message, { variant: "success", anchorOrigin });
}
export function showErrorAlert(message) {
    enqueueSnackbar(message, { variant: "error", anchorOrigin });
}
export function showWarningAlert(message) {
    enqueueSnackbar(message, { variant: "warning", anchorOrigin });
}
export function showInfoAlert(message) {
    enqueueSnackbar(message, { variant: "info", anchorOrigin });
}
export function showAlert(message, type) {
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
