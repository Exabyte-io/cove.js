type HandlerFunction = (...args: any[]) => void | any;
declare class MessageHandler {
    private handlers;
    private originURL;
    private frameId;
    init(originURL: string, frameId: string): void;
    destroy(): void;
    addHandlers(action: string, handlers: HandlerFunction[]): void;
    private receiveMessage;
    sendData(data: any, variableName?: string): void;
}
export default MessageHandler;
