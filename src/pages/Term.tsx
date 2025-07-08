import { Input } from "@/components/ui/input"
import { MessageContainer } from "@/components/MessageContainer";
import { executeCommand } from "@/lib/commandHandler";

import { useState, useRef, useEffect } from "react";

interface MessageData {
    id: string;
    content: string;
    type: 'user' | 'system' | 'error' | 'success';
    timestamp: Date;
}

export default function Term() {
    const [messages, setMessages] = useState<MessageData[]>([
        {
            id: '1',
            content: 'PyppyShell v1.0.0',
            type: 'system',
            timestamp: new Date()
        },
        {
            id: '2',
            content: 'Welcome to the file system! Use ls to see files, cd to navigate, and cat to read files.',
            type: 'system',
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState("");
    const [currentPath, setCurrentPath] = useState("/");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleCommand = (command: string) => {
        const userMessage: MessageData = {
            id: Date.now().toString(),
            content: command,
            type: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);

        const response = executeCommand(command, currentPath);
        
        if (response.content) {
            const systemMessage: MessageData = {
                id: (Date.now() + 1).toString(),
                content: response.content,
                type: response.type,
                timestamp: new Date()
            };
            setMessages(prev => [...prev, systemMessage]);
        }

        if (response.action === 'navigate' && response.url) {
            setCurrentPath(response.url);
        } else if (response.action === 'open_url' && response.url) {
            window.open(response.url, '_blank');
        }

        if (command.trim().toLowerCase() === 'clear') {
            setMessages([]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && input.trim() !== "") {
            e.preventDefault();
            handleCommand(input);
            setInput("");
        }
    };

    const formatPath = (path: string) => {
        if (path === '/') return '~';
        return path.replace(/^\//, '~/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen min-w-full bg-neutral-900 text-green-400 font-mono text-base">
            <div className="w-full max-w-xl rounded-lg shadow-lg border border-neutral-700 bg-neutral-950/95 p-0 overflow-hidden h-[400px]">
                <div className="flex items-center px-4 py-2 bg-neutral-800 border-b border-neutral-700">
                    <span className="mr-auto text-xs text-neutral-400">pyppy@portfolio:{formatPath(currentPath)}</span>
                    <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-400 mr-2"></span>
                    <span className="h-3 w-3 rounded-full bg-red-500"></span>
                </div>
                <div className="flex flex-col px-4 py-6 flex-1 overflow-y-auto h-[calc(100%-48px)] [&::-webkit-scrollbar]:w-2">
                    <MessageContainer messages={messages} />
                    <div ref={messagesEndRef} />
                    <form
                        className="flex items-center w-full mt-2"
                        onSubmit={e => {
                            e.preventDefault();
                            if (input.trim() !== "") {
                                handleCommand(input);
                                setInput("");
                            }
                        }}
                    >
                        <span className="text-green-500 mr-2 select-none">$</span>
                        <Input
                            value={input}
                            autoFocus
                            spellCheck={false}
                            className="bg-transparent dark:bg-transparent border-none outline-none shadow-none text-green-400 font-mono text-base flex-1 px-0 py-1 focus:ring-0 focus:outline-none focus:shadow-none"
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}