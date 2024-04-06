import { IframeMessageSchema } from "@mat3ra/esse/dist/js/types";
import React from "react";

import IframeToFromHostMessageHandler from "../iframe-messaging/IframeToFromHostMessageHandler";

export { ActionEnum } from "../iframe-messaging/IframeToFromHostMessageHandler";

export interface IMessageHandlerConfigItem {
    action: IframeMessageSchema["action"];
    handlers: ((...args: any[]) => void)[];
}

export interface JupyterLiteSessionProps {
    originURL: string;
    defaultNotebookPath?: string;
    iframeId: string;
    messageHandlerConfigs?: IMessageHandlerConfigItem[];
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

    messageHandler = new IframeToFromHostMessageHandler();

    constructor(props: JupyterLiteSessionProps = defaultProps) {
        super(props);
    }

    componentDidMount() {
        const { originURL, iframeId, messageHandlerConfigs } = this.props;
        this.messageHandler.init(originURL, iframeId);
        messageHandlerConfigs?.forEach((config: any) => {
            this.messageHandler.addHandlers(config.action, config.handlers);
        });
    }

    componentWillUnmount() {
        this.messageHandler.destroy();
    }

    // eslint-disable-next-line react/no-unused-class-component-methods
    sendData = (data: any) => {
        this.messageHandler.sendData(data);
    };

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
