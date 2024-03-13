import { JupyterliteMessageSchema } from "@mat3ra/esse/lib/js/types";
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
    receiveMessage: (event: MessageEvent<JupyterliteMessageSchema>) => void;
    sendData: (data: Record<string, unknown>[], variableName: string) => void;
    render(): React.JSX.Element;
}
export default JupyterLiteSession;
