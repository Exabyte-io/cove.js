import { useContext } from "react";

import { AlertContext } from "../AlertContextProvider";

export const useAlert = () => {
    return useContext(AlertContext);
};
