import { IframeMessageSchema } from "@mat3ra/esse/lib/js/types";

type HandlerFunction = (...args: IframeMessageSchema["payload"][]) => void | any;

type HandlersMap = {
    [action in IframeMessageSchema["action"]]: HandlerFunction[];
};

class MessageHandler {
    private handlers: HandlersMap = { "get-data": [], "set-data": [], info: [] };

    private iframeOriginURL = "*";

    private hostOriginURL = "*";

    private iframeId = "";

    public init(iframeOriginURL: string, iframeId: string): void {
        window.addEventListener("message", this.receiveMessage);
        this.iframeOriginURL = iframeOriginURL;
        this.hostOriginURL = window.location.origin;
        this.iframeId = iframeId;
    }

    public destroy(): void {
        window.removeEventListener("message", this.receiveMessage);
    }

    public addHandlers(action: IframeMessageSchema["action"], handlers: HandlerFunction[]): void {
        if (!this.handlers[action]) {
            this.handlers[action] = [];
        }
        this.handlers[action].push(...handlers);
    }

    private receiveMessage = (event: MessageEvent<IframeMessageSchema>) => {
        if (
            this.iframeOriginURL !== "*" &&
            event.origin !== this.iframeOriginURL &&
            event.origin !== this.hostOriginURL
        ) {
            return;
        }

        if (event.data.type === "from-iframe-to-host") {
            const { action, payload } = event.data;
            // @ts-ignore
            if (this.handlers[action]) {
                // @ts-ignore
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

    public sendData(data: object): void {
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

export default MessageHandler;
