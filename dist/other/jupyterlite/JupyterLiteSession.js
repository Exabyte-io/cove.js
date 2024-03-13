import React from "react";
class JupyterLiteSession extends React.Component {
    constructor() {
        super(...arguments);
        this.handleReceiveMessage = (event) => {
            var _a, _b;
            if (event.origin !== new URL(this.props.originURL).origin)
                return;
            if (event.data.type === "from-iframe-to-host") {
                (_b = (_a = this.props).receiveData) === null || _b === void 0 ? void 0 : _b.call(_a, event.data.data);
            }
        };
        this.sendDataToIFrame = (data, variableName) => {
            const message = { type: "from-host-to-iframe", data, variableName };
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
        window.addEventListener("message", this.handleReceiveMessage, false);
    }
    componentWillUnmount() {
        window.removeEventListener("message", this.handleReceiveMessage, false);
    }
    render() {
        const src = this.props.defaultNotebookPath
            ? `${this.props.originURL}/lab/tree?path=${this.props.defaultNotebookPath}`
            : `${this.props.originURL}/lab`;
        return (React.createElement("iframe", { name: "jupyterlite", title: "JupyterLite", id: this.props.frameId, src: src, sandbox: "allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-top-navigation-by-user-activation allow-downloads", width: "100%", height: "100%" }));
    }
}
JupyterLiteSession.defaultProps = {
    originURL: "https://jupyterlite.mat3ra.com",
    frameId: "jupyter-lite-iframe",
};
export default JupyterLiteSession;
