import { IframeMessageSchema } from "@mat3ra/esse/lib/js/types";

// Define a type for the handler functions
type HandlerFunction = (data?: any, variableName?: string) => void;

// Define a type for the handler map
type HandlersMap = {
    [action: string]: HandlerFunction[];
};

class MessageHandler {
    private handlers: HandlersMap = {};

    private originURL = "*";

    public init(originURL: string): void {
        window.addEventListener("message", this.receiveMessage);
        this.originURL = originURL;
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
                this.handlers[action].forEach((handler) => {
                    handler(event.data.payload.data, event.data.payload.variableName);
                });
            }
        }
    };

    public sendData(data: any, variableName = "data"): void {
        const message: IframeMessageSchema = {
            type: "from-host-to-iframe",
            payload: {
                action: "set-data",
                data,
                variableName,
            },
        };

        window.parent.postMessage(message, this.originURL);
    }
}

export default MessageHandler;
