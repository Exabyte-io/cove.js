import { useCallback } from "react";

import { useAlert } from "../mui/components/custom/alert/hooks/useAlert";
import { copyToClipboard } from "../utils/clipboard";

export const useCopyToClipboard = (alertProps = {}) => {
    const alert = useAlert();

    return useCallback((text: string) => {
        copyToClipboard(text, () => {
            alert?.show({
                content: `Unit flowchart id ${text} was successfully copied`,
                ...alertProps,
            });
        });
    }, []);
};
