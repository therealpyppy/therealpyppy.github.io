import { Input } from "@/components/ui/input"

import { useState } from "react";

export default function Term() {
    const [messages, setMessages] = useState<string[]>(["Go", "here"]);
    const [input, setInput] = useState("");

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && input.trim() !== "") {
            e.preventDefault();
            setMessages(prev => [...prev, input]);
            setInput("");
        }
    };

    return (
        <div className="p-4 flex flex-col min-h-screen min-w-full bg-background text-foreground">
            <div>
                <h1>Messages</h1>
                <div>
                    {messages.map((msg, idx) => (
                        <div key={idx}>{msg}</div>
                    ))}
                </div>
            </div>
            <div className="flex pt-5 align-center items-center">
                <span className="text-base font-normal text-primary">text</span>
                <Input
                    value={input}
                    className="font-normal"
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    )
}