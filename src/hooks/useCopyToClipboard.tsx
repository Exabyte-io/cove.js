import { useCallback } from "react";

import { useAlert } from "../mui/components/custom/alert/hooks/useAlert";

export const useCopyToClipboard = (alertProps = {}) => {
    const alert = useAlert();

    return useCallback((text: string) => {
        navigator.clipboard.writeText(text);
        alert?.show({
            content: `Unit flowchart id ${text} was successfully copied`,
            ...alertProps,
        });
    }, []);
};
