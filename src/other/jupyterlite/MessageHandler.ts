import { IframeMessageSchema } from "@mat3ra/esse/lib/js/types";

type HandlerFunction = (...args: any[]) => void | any;

// Define a type for the handler map
type HandlersMap = {
    [action: string]: HandlerFunction[];
};

class MessageHandler {
    private handlers: HandlersMap = {};

    private originURL = "*";

    private frameId = "";

    public init(originURL: string, frameId: string): void {
        window.addEventListener("message", this.receiveMessage);
        this.originURL = originURL;
        this.frameId = frameId;
    }

    public destroy(): void {
        window.removeEventListener("message", this.receiveMessage);
    }

    public addHandlers(action: string, handlers: HandlerFunction[]): void {
        if (!this.handlers[action]) {
            this.handlers[action] = [];
        }
        this.handlers[action].push(...handlers);
    }

    private receiveMessage = (event: MessageEvent<IframeMessageSchema>) => {
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

    public sendData(data: any, variableName = "data"): void {
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
