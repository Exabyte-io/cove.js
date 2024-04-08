import React from "react";
import IframeToFromHostMessageHandler from "../iframe-messaging/IframeToFromHostMessageHandler";
const defaultProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    originURL: "https://jupyterlite.mat3ra.com",
    // eslint-disable-next-line react/default-props-match-prop-types
    iframeId: "jupyter-lite-iframe",
};
class JupyterLiteSession extends React.Component {
    constructor(props = defaultProps) {
        super(props);
        this.messageHandler = new IframeToFromHostMessageHandler();
        // eslint-disable-next-line react/no-unused-class-component-methods
        this.sendData = (data) => {
            this.messageHandler.sendData(data);
        };
    }
    componentDidMount() {
        const { originURL, iframeId, messageHandlerConfigs } = this.props;
        this.messageHandler.init(originURL, iframeId);
        messageHandlerConfigs === null || messageHandlerConfigs === void 0 ? void 0 : messageHandlerConfigs.forEach((config) => {
            this.messageHandler.addHandlers(config.action, config.handlers);
        });
    }
    componentWillUnmount() {
        this.messageHandler.destroy();
    }
    render() {
        const { defaultNotebookPath, originURL, iframeId } = this.props;
        const src = defaultNotebookPath
            ? `${originURL}/lab/tree?path=${defaultNotebookPath}`
            : `${originURL}/lab`;
        return (React.createElement("iframe", { name: "jupyterlite", title: "JupyterLite", id: iframeId, src: src, sandbox: "allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-top-navigation-by-user-activation allow-downloads", width: "100%", height: "100%" }));
    }
}
// eslint-disable-next-line react/static-property-placement
JupyterLiteSession.defaultProps = defaultProps;
export default JupyterLiteSession;
