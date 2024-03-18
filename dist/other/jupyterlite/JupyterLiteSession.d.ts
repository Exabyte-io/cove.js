import React from "react";
import MessageHandler from "./MessageHandler";
interface JupyterLiteSessionProps {
    originURL: string;
    defaultNotebookPath?: string;
    iframeId: string;
    messageHandler?: MessageHandler;
}
declare class JupyterLiteSession extends React.Component<JupyterLiteSessionProps> {
    static defaultProps: JupyterLiteSessionProps;
    constructor(props?: JupyterLiteSessionProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
export default JupyterLiteSession;
