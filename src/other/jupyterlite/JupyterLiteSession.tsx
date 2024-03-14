import {JupyterliteMessageSchema} from "@mat3ra/esse/lib/js/types";
import React from "react";

interface JupyterLiteSessionProps {
    originURL: string;
    defaultNotebookPath?: string;
    frameId: string;
    handlers: {
        type: string; // from-iframe-to-host
        filter: {
            keys: string[]; // ["data"] or ["requestData", "variableName"]
        };
        extraParameters: any[];
        handler: (data: any) => void;
    }[];
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
        const message = event.data;

        const handlerConfig = this.props.handlers.find(handler => {
            return handler.type === message.type &&
                handler.filter.keys.every(key => message.payload.hasOwnProperty(key));
        });

        if (handlerConfig) {
            const {handler, filter, extraParameters} = handlerConfig;
            handler(message.payload);
            // TODO: make more generic
            const requestData = message.payload.requestData;
            const variableName = message.payload.variableName;
            if (requestData && variableName) {
                // @ts-ignore
                const data = handler(variableName)();
                this.sendMessage(data, variableName);
            }
        }
    };


    sendMessage = (data: any, variableName: string) => {
        const message: JupyterliteMessageSchema = {
            type: "from-host-to-iframe",
            payload: {data, variableName},
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
