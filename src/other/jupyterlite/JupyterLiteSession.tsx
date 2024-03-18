import React from "react";

import MessageHandler from "./MessageHandler";

interface JupyterLiteSessionProps {
    originURL: string;
    defaultNotebookPath?: string;
    iframeId: string;
    messageHandler?: MessageHandler;
}

const defaultProps: JupyterLiteSessionProps = {
    // eslint-disable-next-line react/default-props-match-prop-types
    originURL: "https://jupyterlite.mat3ra.com",
    // eslint-disable-next-line react/default-props-match-prop-types
    iframeId: "jupyter-lite-iframe",
};

class JupyterLiteSession extends React.Component<JupyterLiteSessionProps> {
    // eslint-disable-next-line react/static-property-placement
    static defaultProps = defaultProps;

    constructor(props: JupyterLiteSessionProps = defaultProps) {
        super(props);
    }

    componentDidMount() {
        const { messageHandler, originURL, iframeId } = this.props;
        messageHandler?.init(originURL, iframeId);
    }

    componentWillUnmount() {
        const { messageHandler } = this.props;
        messageHandler?.destroy();
    }

    render() {
        const { defaultNotebookPath, originURL, iframeId } = this.props;
        const src = defaultNotebookPath
            ? `${originURL}/lab/tree?path=${defaultNotebookPath}`
            : `${originURL}/lab`;

        return (
            <iframe
                name="jupyterlite"
                title="JupyterLite"
                id={iframeId}
                src={src}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals allow-top-navigation-by-user-activation allow-downloads"
                width="100%"
                height="100%"
            />
        );
    }
}

export default JupyterLiteSession;
