import { enqueueSnackbar } from "notistack";
import { useCallback } from "react";
import { copyToClipboard } from "../utils/clipboard";
export const useCopyToClipboard = () => {
    return useCallback((textToCopy, content) => {
        copyToClipboard(textToCopy, () => {
            enqueueSnackbar(content, { variant: "success" });
        });
    }, []);
};
