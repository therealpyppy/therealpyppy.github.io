interface MessageProps {
    content: string;
    type: 'user' | 'system' | 'error' | 'success';
    timestamp?: Date;
}

export function Message({ content, type, timestamp }: MessageProps) {
    const getMessageStyle = () => {
        switch (type) {
            case 'user':
                return 'text-green-400';
            case 'system':
                return 'text-blue-400';
            case 'error':
                return 'text-red-400';
            case 'success':
                return 'text-green-500';
            default:
                return 'text-green-400';
        }
    };

    const getPrefix = () => {
        switch (type) {
            case 'user':
                return '$';
            case 'system':
                return '>';
            case 'error':
                return '!';
            case 'success':
                return '✓';
            default:
                return '$';
        }
    };

    return (
        <div className={`flex items-start gap-2 py-1 ${getMessageStyle()}`}>
            <span className="text-green-500 select-none">{getPrefix()}</span>
            <div className="flex-1 whitespace-pre-wrap break-words font-mono">
                {content}
            </div>
            {timestamp && (
                <span className="text-neutral-500 text-xs select-none">
                    {timestamp.toLocaleTimeString()}
                </span>
            )}
        </div>
    );
}