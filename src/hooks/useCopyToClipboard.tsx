import { useCallback } from "react";

import { useAlert } from "../mui/components/custom/alert/hooks/useAlert";
import { copyToClipboard } from "../utils/clipboard";

export const useCopyToClipboard = (alertProps = {}) => {
    const alert = useAlert();

    return useCallback((textToCopy: string, content: string) => {
        copyToClipboard(textToCopy, () => {
            alert?.show({
                content,
                ...alertProps,
            });
        });
    }, []);
};
