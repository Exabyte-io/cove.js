class IframeToFromHostMessageHandler {
    constructor() {
        this.handlers = { "get-data": [], "set-data": [], info: [] };
        // Default values for the origin URLs  to pass the CORS policy, if not provided from the parent component
        this.iframeOriginURL = "*";
        this.hostOriginURL = "*";
        // The DOM id of the iframe that is loaded in the host page to send messages from/to
        this.iframeId = "";
        this.receiveMessage = async (event) => {
            if (this.iframeOriginURL !== "*" &&
                event.origin !== this.iframeOriginURL &&
                event.origin !== this.hostOriginURL) {
                return;
            }
            if (event.data.type === "from-iframe-to-host") {
                const { action, payload } = event.data;
                if (this.handlers[action]) {
                    // eslint-disable-next-line no-restricted-syntax
                    for (const handler of this.handlers["set-data"]) {
                        try {
                            // eslint-disable-next-line no-await-in-loop
                            await handler(payload);
                        }
                        catch (error) {
                            console.error(`Error executing handler for set-data:`, error);
                        }
                    }
                    // eslint-disable-next-line no-restricted-syntax
                    for (const handler of this.handlers["get-data"]) {
                        // eslint-disable-next-line no-await-in-loop
                        const data = await handler(payload);
                        if (data) {
                            this.sendData(data);
                        }
                    }
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
