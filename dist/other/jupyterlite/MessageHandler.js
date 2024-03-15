class MessageHandler {
    constructor() {
        this.handlers = {};
        this.originURL = "*";
        this.frameId = "";
        this.receiveMessage = (event) => {
            if (this.originURL !== "*" && event.origin !== this.originURL) {
                return;
            }
            if (event.data.type === "from-iframe-to-host") {
                const { action } = event.data.payload;
                // TODO: make action required in ESSE
                // @ts-ignore
                if (this.handlers[action]) {
                    // @ts-ignore
                    this.handlers["set-data"].forEach((handler) => {
                        handler(event.data.payload.data, event.data.payload.variableName);
                    });
                    this.handlers["get-data"].forEach((handler) => {
                        const data = handler(event.data.payload.variableName);
                        this.sendData(data, event.data.payload.variableName);
                    });
                }
            }
        };
    }
    init(originURL, frameId) {
        window.addEventListener("message", this.receiveMessage);
        this.originURL = originURL;
        this.frameId = frameId;
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
    sendData(data, variableName = "data") {
        const message = {
            type: "from-host-to-iframe",
            payload: {
                action: "set-data",
                data,
                variableName,
            },
        };
        const iframe = document.getElementById(this.frameId);
        if (iframe) {
            // @ts-ignore
            iframe.contentWindow.postMessage(message, this.originURL);
        }
    }
}
export default MessageHandler;
