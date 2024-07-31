import { useCallback } from "react";

import { showSuccessAlert } from "../other/alerts";
import { copyToClipboard } from "../utils/clipboard";

export const useCopyToClipboard = () => {
    return useCallback((textToCopy: string, content: string) => {
        copyToClipboard(textToCopy, () => {
            showSuccessAlert(content);
        });
    }, []);
};
