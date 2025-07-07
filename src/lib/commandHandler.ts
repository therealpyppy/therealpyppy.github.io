export interface CommandResponse {
    content: string;
    type: 'system' | 'error' | 'success';
}

export interface CommandHandler {
    [key: string]: (args: string[]) => CommandResponse;
}

export const commands: CommandHandler = {
    help: () => ({
        content: `Available commands:
• help - Show this help message
• clear - Clear the terminal
• about - About me
• skills - My technical skills
• ls - View projects
• cat [project] - View detailed info about a project
• contact - Contact information
• past - View past websites
• date - Current date and time
• echo [text] - Echo back the text
• refresh - Refresh the terminal`,
        type: 'system'
    }),

    clear: () => ({
        content: '',
        type: 'system'
    }),

    about: () => ({
        content: `Hi! I'm Peppy (aka Pyppy), a passionate developer who's trying to find where I fit.
When I'm not coding, I'm sleeping.`,
        type: 'system'
    }),

    skills: () => ({
        content: `My Technical Skills:
• Frontend: React, TypeScript, HTML/CSS, Tailwind CSS, Learning three.js
• Backend: Python, Learning Rust
• Tools: Git, VS Code, Vite
• Other: WebSockets`,
        type: 'system'
    }),

    ls: () => ({
        content: `
• /Portfolio-Website (React + TypeScript)
• /ChatApp (WebSocket + React)
• /PlotAssist (Python + mpl + pandas)

run cat [Project Name] to view more info`,
        type: 'system'
    }),

    contact: () => ({
        content: `Get in touch with me:
• Email: iainpfox@gmail.com
• GitHub: github.com/therealpyppy
• Discord: therealpeppy`,
        type: 'system'
    }),

    date: () => ({
        content: new Date().toLocaleString(),
        type: 'system'
    }),

    echo: (args: string[]) => ({
        content: args.join(' ') || 'No text provided',
        type: 'system'
    }),

    refresh: () => {
        setTimeout(() => {
            if (typeof window !== 'undefined') {
                window.location.reload();
            }
        }, 100);
        return {
            content: 'Terminal refreshing.',
            type: 'success'
        };
    }
};

export function executeCommand(command: string): CommandResponse {
    const trimmedCommand = command.trim();
    
    if (!trimmedCommand) {
        return {
            content: '',
            type: 'system'
        };
    }

    const [cmd, ...args] = trimmedCommand.split(' ');
    const lowerCmd = cmd.toLowerCase();

    if (commands[lowerCmd]) {
        return commands[lowerCmd](args);
    }

    return {
        content: `Command not found: ${cmd}. Type 'help' for available commands.`,
        type: 'error'
    };
}

export function getAvailableCommands(): string[] {
    return Object.keys(commands);
} 