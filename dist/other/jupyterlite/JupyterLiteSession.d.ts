import { JupyterliteMessageSchema } from "@mat3ra/esse/lib/js/types";
import React from "react";
interface JupyterLiteSessionProps {
    originURL: string;
    defaultNotebookPath?: string;
    frameId: string;
    handlers: {
        type: string;
        filter: {
            keys: string[];
        };
        extraParameters: any[];
        handler: (args: any) => void | any;
    }[];
}
declare class JupyterLiteSession extends React.Component<JupyterLiteSessionProps> {
    static defaultProps: Partial<JupyterLiteSessionProps>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    receiveMessage: (event: MessageEvent<JupyterliteMessageSchema>) => void;
    sendMessage: (data: any, variableName: string) => void;
    render(): React.JSX.Element;
}
export default JupyterLiteSession;
