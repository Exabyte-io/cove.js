import React from "react";
import IframeToFromHostMessageHandler from "../iframe-messaging/IframeToFromHostMessageHandler";
interface JupyterLiteSessionProps {
    originURL: string;
    defaultNotebookPath?: string;
    iframeId: string;
    messageHandler?: IframeToFromHostMessageHandler;
}
declare class JupyterLiteSession extends React.Component<JupyterLiteSessionProps> {
    static defaultProps: JupyterLiteSessionProps;
    constructor(props?: JupyterLiteSessionProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
export default JupyterLiteSession;
