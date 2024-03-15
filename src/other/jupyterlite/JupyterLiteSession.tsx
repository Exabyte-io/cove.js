import React from "react";

import MessageHandler from "./MessageHandler";

interface JupyterLiteSessionProps {
    originURL: string;
    defaultNotebookPath?: string;
    frameId: string;
    messageHandler?: MessageHandler;
}

const defaultProps: Partial<JupyterLiteSessionProps> = {
    // eslint-disable-next-line react/default-props-match-prop-types
    originURL: "https://jupyterlite.mat3ra.com",
    // eslint-disable-next-line react/default-props-match-prop-types
    frameId: "jupyter-lite-iframe",
};

class JupyterLiteSession extends React.Component<JupyterLiteSessionProps> {
    // eslint-disable-next-line react/static-property-placement
    static defaultProps = defaultProps;

    componentDidMount() {
        const { messageHandler, originURL } = this.props;
        messageHandler?.init(originURL);
    }

    componentWillUnmount() {
        const { messageHandler } = this.props;
        messageHandler?.destroy();
    }

    render() {
        const { defaultNotebookPath, originURL, frameId } = this.props;
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
