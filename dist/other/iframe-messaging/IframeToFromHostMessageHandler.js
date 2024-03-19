class IframeToFromHostMessageHandler {
    constructor() {
        this.handlers = { "get-data": [], "set-data": [], info: [] };
        this.iframeOriginURL = "*";
        this.hostOriginURL = "*";
        this.iframeId = "";
        this.receiveMessage = (event) => {
            if (this.iframeOriginURL !== "*" &&
                event.origin !== this.iframeOriginURL &&
                event.origin !== this.hostOriginURL) {
                return;
            }
            if (event.data.type === "from-iframe-to-host") {
                const { action, payload } = event.data;
                if (this.handlers[action]) {
                    this.handlers["set-data"].forEach((handler) => {
                        handler(payload);
                    });
                    this.handlers["get-data"].forEach((handler) => {
                        const data = handler();
                        this.sendData(data);
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
            type: "from-host-to-iframe",
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
