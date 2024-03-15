import React from "react";
const defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    originURL: "https://jupyterlite.mat3ra.com",
    // eslint-disable-next-line react/default-props-match-prop-types
    frameId: "jupyter-lite-iframe",
};
class JupyterLiteSession extends React.Component {
    componentDidMount() {
        const { messageHandler, originURL } = this.props;
        messageHandler === null || messageHandler === void 0 ? void 0 : messageHandler.init(originURL);
    }
    componentWillUnmount() {
        const { messageHandler } = this.props;
        messageHandler === null || messageHandler === void 0 ? void 0 : messageHandler.destroy();
    }
    render() {
        const { defaultNotebookPath, originURL, frameId } = this.props;
        const src = defaultNotebookPath
            ? `${originURL}/lab/tree?path=${defaultNotebookPath}`
            : `${originURL}/lab`;
        return (React.createElement("iframe", { name: "jupyterlite", title: "JupyterLite", id: frameId, src: src, sandbox: "allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-top-navigation-by-user-activation allow-downloads", width: "100%", height: "100%" }));
    }
}
// eslint-disable-next-line react/static-property-placement
JupyterLiteSession.defaultProps = defaultProps;
export default JupyterLiteSession;
