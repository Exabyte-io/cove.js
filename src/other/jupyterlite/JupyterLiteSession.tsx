import React from "react";

interface IframeMessage {
    type: string;
    data: Record<string, unknown>[];
    variableName: string;
}

interface JupyterLiteSessionProps {
    originURL: string;
    defaultNotebookPath?: string;
    frameId: string;
    receiveData?: (data: any) => void;
}

class JupyterLiteSession extends React.Component<JupyterLiteSessionProps> {
    static defaultProps: Partial<JupyterLiteSessionProps> = {
        originURL: "https://jupyterlite.mat3ra.com",
        frameId: "jupyter-lite-iframe",
    };

    componentDidMount() {
        window.addEventListener("message", this.handleReceiveMessage, false);
    }

    componentWillUnmount() {
        window.removeEventListener("message", this.handleReceiveMessage, false);
    }

    handleReceiveMessage = (event: MessageEvent) => {
        if (event.origin !== new URL(this.props.originURL).origin) return;
        if (event.data.type === "from-iframe-to-host") {
            this.props.receiveData?.(event.data.data);
        }
    };

    sendDataToIFrame = (data: Record<string, unknown>[], variableName: string) => {
        const message: IframeMessage = { type: "from-host-to-iframe", data, variableName };
        const iframe = document.getElementById(this.props.frameId) as HTMLIFrameElement | null;
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(message, this.props.originURL);
        } else {
            console.error("JupyterLite iframe not found");
        }
    };

    render() {
        const src = this.props.defaultNotebookPath
            ? `${this.props.originURL}/lab/tree?path=${this.props.defaultNotebookPath}`
            : `${this.props.originURL}/lab`;
        return (
            <iframe
                name="jupyterlite"
                title="JupyterLite"
                id={this.props.frameId}
                src={src}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-top-navigation-by-user-activation allow-downloads"
                width="100%"
                height="100%"
            />
        );
    }
}

export default JupyterLiteSession;
