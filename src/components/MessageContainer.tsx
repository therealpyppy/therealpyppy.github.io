import { Message } from "./Message";

interface MessageData {
    id: string;
    content: string;
    type: 'user' | 'system' | 'error' | 'success';
    timestamp: Date;
}

interface MessageContainerProps {
    messages: MessageData[];
}

export function MessageContainer({ messages }: MessageContainerProps) {
    return (
        <div className="flex flex-col gap-1 mb-2">
            {messages.map((message) => (
                <Message
                    key={message.id}
                    content={message.content}
                    type={message.type}
                    timestamp={message.timestamp}
                />
            ))}
        </div>
    );
}