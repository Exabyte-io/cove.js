import React from "react";
class JupyterLiteSession extends React.Component {
    constructor() {
        super(...arguments);
        this.receiveMessage = (event) => {
            if (event.origin !== new URL(this.props.originURL).origin)
                return;
            const message = event.data;
            const handlerConfig = this.props.handlers.find((handler) => {
                return (handler.type === message.type &&
                    handler.filter.keys.every((key) => message.payload.hasOwnProperty(key)));
            });
            if (handlerConfig) {
                const { handler, filter, extraParameters } = handlerConfig;
                handler(message.payload);
                // TODO: make more generic
                const { requestData, variableName } = message.payload;
                if (requestData && variableName) {
                    const data = handler(variableName)();
                    this.sendMessage(data, variableName);
                }
            }
        };
        this.sendMessage = (data, variableName) => {
            const message = {
                type: "from-host-to-iframe",
                payload: { data, variableName },
            };
            const iframe = document.getElementById(this.props.frameId);
            if (iframe && iframe.contentWindow) {
                iframe.contentWindow.postMessage(message, this.props.originURL);
            }
            else {
                console.error("JupyterLite iframe not found");
            }
        };
    }
    componentDidMount() {
        window.addEventListener("message", this.receiveMessage, false);
    }
    componentWillUnmount() {
        window.removeEventListener("message", this.receiveMessage, false);
    }
    render() {
        const { defaultNotebookPath, originURL, frameId } = this.props;
        const src = defaultNotebookPath
            ? `${originURL}/lab/tree?path=${defaultNotebookPath}`
            : `${originURL}/lab`;
        return (React.createElement("iframe", { name: "jupyterlite", title: "JupyterLite", id: frameId, src: src, sandbox: "allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-top-navigation-by-user-activation allow-downloads", width: "100%", height: "100%" }));
    }
}
JupyterLiteSession.defaultProps = {
    originURL: "https://jupyterlite.mat3ra.com",
    frameId: "jupyter-lite-iframe",
};
export default JupyterLiteSession;
