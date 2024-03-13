import React from "react";
class JupyterLiteSession extends React.Component {
    constructor() {
        super(...arguments);
        this.receiveMessage = (event) => {
            if (event.origin !== new URL(this.props.originURL).origin)
                return;
            if (event.data) {
                if (event.data.type === "from-iframe-to-host") {
                    if (this.props.receiveData)
                        this.props.receiveData(event.data);
                }
            }
        };
        this.sendData = (data, variableName) => {
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
        window.addEventListener("message", this.receiveMessage, false);
    }
    componentWillUnmount() {
        window.removeEventListener("message", this.receiveMessage, false);
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
