import { IframeMessageSchema } from "@mat3ra/esse/dist/js/types";
type HandlerFunction = (...args: IframeMessageSchema["payload"][]) => void | any;
declare class IframeToFromHostMessageHandler {
    private handlers;
    private iframeOriginURL;
    private hostOriginURL;
    private iframeId;
    init(iframeOriginURL: string, iframeId: string): void;
    destroy(): void;
    addHandlers(action: IframeMessageSchema["action"], handlers: HandlerFunction[]): void;
    private receiveMessage;
    sendData(data: object): void;
}
export default IframeToFromHostMessageHandler;
