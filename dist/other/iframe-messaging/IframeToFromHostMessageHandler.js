import { Action as ActionEnum, Type as TypeEnum, } from "@mat3ra/esse/dist/js/types";
class IframeToFromHostMessageHandler {
    constructor() {
        this.handlers = {
            [ActionEnum.getData]: [],
            [ActionEnum.setData]: [],
            [ActionEnum.info]: [],
        };
        // Default values for the origin URLs  to pass the CORS policy, if not provided from the parent component
        this.iframeOriginURL = "*";
        this.hostOriginURL = "*";
        // The DOM id of the iframe that is loaded in the host page to send messages from/to
        this.iframeId = "";
        this.receiveMessage = (event) => {
            if (this.iframeOriginURL !== "*" &&
                event.origin !== this.iframeOriginURL &&
                event.origin !== this.hostOriginURL) {
                return;
            }
            if (event.data.type === TypeEnum.fromIframeToHost) {
                const { action, payload } = event.data;
                if (this.handlers[action]) {
                    this.handlers[action].forEach((handler) => {
                        Promise.resolve(handler(payload))
                            .then((data) => {
                            // If the handler returns data, send it to the iframe
                            if (data !== undefined) {
                                this.sendData(data);
                            }
                        })
                            .catch((error) => {
                            console.error(`Error in handler for ${action}:`, error);
                        });
                    });
                }
            }
        };
    }
    init(iframeOriginURL, iframeId) {
        window.addEventListener("message", this.receiveMessage);
        this.iframeOriginURL = iframeOriginURL;
        this.hostOriginURL = window.location.origin;
        this.iframeId = iframeId;
    }
    destroy() {
        window.removeEventListener("message", this.receiveMessage);
    }
    addHandlers(action, handlers) {
        if (!this.handlers[action]) {
            this.handlers[action] = [];
        }
        this.handlers[action].push(...handlers);
    }
    sendData(data) {
        const message = {
            type: TypeEnum.fromHostToIframe,
            action: "set-data",
            payload: data,
        };
        const iframe = document.getElementById(this.iframeId);
        if (iframe) {
            // @ts-ignore
            iframe.contentWindow.postMessage(message, this.iframeOriginURL);
        }
    }
}
export default IframeToFromHostMessageHandler;
