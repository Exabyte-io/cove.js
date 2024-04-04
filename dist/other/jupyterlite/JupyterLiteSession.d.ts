import { IframeMessageSchema } from "@mat3ra/esse/dist/js/types";
import React from "react";
import IframeToFromHostMessageHandler from "../iframe-messaging/IframeToFromHostMessageHandler";
interface JupyterLiteSessionProps {
    originURL: string;
    defaultNotebookPath?: string;
    iframeId: string;
    messageHandlerConfigs?: {
        action: IframeMessageSchema["action"];
        handlers: ((...args: any) => void)[];
    }[];
}
declare class JupyterLiteSession extends React.Component<JupyterLiteSessionProps> {
    static defaultProps: JupyterLiteSessionProps;
    messageHandler: IframeToFromHostMessageHandler;
    constructor(props?: JupyterLiteSessionProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    sendData: (data: any) => void;
    render(): React.JSX.Element;
}
export default JupyterLiteSession;
