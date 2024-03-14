import {JupyterliteMessageSchema} from "@mat3ra/esse/lib/js/types";
import React from "react";

interface JupyterLiteSessionProps {
    originURL: string;
    defaultNotebookPath?: string;
    frameId: string;
    onMessage?: (message: JupyterliteMessageSchema) => void;
}

class JupyterLiteSession extends React.Component<JupyterLiteSessionProps> {
    static defaultProps: Partial<JupyterLiteSessionProps> = {
        originURL: "https://jupyterlite.mat3ra.com",
        frameId: "jupyter-lite-iframe",
    };

    componentDidMount() {
        window.addEventListener("message", this.receiveMessage, false);
    }

    componentWillUnmount() {
        window.removeEventListener("message", this.receiveMessage, false);
    }

    receiveMessage = (event: MessageEvent<JupyterliteMessageSchema>) => {
        if (event.origin !== new URL(this.props.originURL).origin) return;
        if (event.data) {
            if (event.data.type === "from-iframe-to-host") {
                if (this.props.onMessage) this.props.onMessage(event.data);
            }
        }
    };

    sendData = (data: never, variableName: string) => {
        const message: JupyterliteMessageSchema = {
            type: "from-host-to-iframe",
            payload: {data: data, variableName: variableName},
        };
        const iframe = document.getElementById(this.props.frameId) as HTMLIFrameElement | null;
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(message, this.props.originURL);
        } else {
            console.error("JupyterLite iframe not found");
        }
    };

    render() {
        const {defaultNotebookPath, originURL, frameId} = this.props;
        const src = defaultNotebookPath
            ? `${originURL}/lab/tree?path=${defaultNotebookPath}`
            : `${originURL}/lab`;
        return (
            <iframe
                name="jupyterlite"
                title="JupyterLite"
                id={frameId}
                src={src}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-top-navigation-by-user-activation allow-downloads"
                width="100%"
                height="100%"
            />
        );
    }
}

export default JupyterLiteSession;
