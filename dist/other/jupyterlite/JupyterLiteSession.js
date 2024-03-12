import React from "react";
const JupyterLiteSessionDefaultProps = {
    originURL: "https://jupyterlite.mat3ra.com",
    defaultNotebookPath: null,
    frameId: "jupyter-lite-iframe",
    onMessage: () => { },
};
class JupyterLiteSession extends React.Component {
    constructor(props = JupyterLiteSessionDefaultProps) {
        super(props);
        this.handleReceiveMessage = (event) => {
            if (event.origin !== new URL(this.props.originURL).origin)
                return;
            this.props.onMessage(event);
        };
        this.sendDataToIFrame = (data, variableName = "data") => {
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
export default JupyterLiteSession;
