import { IframeMessageSchema } from "@mat3ra/esse/lib/js/types";
type HandlerFunction = (...args: IframeMessageSchema["payload"][]) => void | any;
declare class MessageHandler {
    private handlers;
    private iframeOriginURL;
    private hostOriginURL;
    private iframeId;
    init(iframeOriginURL: string, iframeId: string): void;
    destroy(): void;
    addHandlers(action: IframeMessageSchema["action"], handlers: HandlerFunction[]): void;
    private receiveMessage;
    sendData(data: JSON): void;
}
export default MessageHandler;
