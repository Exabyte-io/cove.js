import React from "react";
interface JupyterLiteSessionProps {
    originURL: string;
    defaultNotebookPath?: string;
    frameId: string;
    receiveData?: (data: any) => void;
}
declare class JupyterLiteSession extends React.Component<JupyterLiteSessionProps> {
    static defaultProps: Partial<JupyterLiteSessionProps>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleReceiveMessage: (event: MessageEvent) => void;
    sendDataToIFrame: (data: Record<string, unknown>[], variableName: string) => void;
    render(): React.JSX.Element;
}
export default JupyterLiteSession;
