type HandlerFunction = (data?: any, variableName?: string) => void;
declare class MessageHandler {
    private handlers;
    private originURL;
    init(originURL: string): void;
    destroy(): void;
    addHandlers(action: string, handlers: HandlerFunction[]): void;
    private receiveMessage;
    sendData(data: any, variableName?: string): void;
}
export default MessageHandler;
