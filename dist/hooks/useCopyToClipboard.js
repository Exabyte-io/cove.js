import { useCallback } from "react";
import { useAlert } from "../mui/components/custom/alert/hooks/useAlert";
import { copyToClipboard } from "../utils/clipboard";
export const useCopyToClipboard = (alertProps = {}) => {
    const alert = useAlert();
    return useCallback((textToCopy, content) => {
        copyToClipboard(textToCopy, () => {
            alert === null || alert === void 0 ? void 0 : alert.show({
                content,
                ...alertProps,
            });
        });
    }, []);
};
