import React from "react";
interface JupyterLiteSessionProps {
    originURL: string;
    defaultNotebookPath: string | null;
    frameId: string;
    onMessage: (event: MessageEvent) => void;
}
declare class JupyterLiteSession extends React.Component<JupyterLiteSessionProps> {
    constructor(props?: JupyterLiteSessionProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleReceiveMessage: (event: MessageEvent) => void;
    sendDataToIFrame: (data: Record<string, unknown>[], variableName?: string) => void;
    render(): React.JSX.Element;
}
export default JupyterLiteSession;
