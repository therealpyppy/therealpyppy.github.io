export interface CommandResponse {
    content: string;
    type: 'system' | 'error' | 'success';
}

export interface CommandHandler {
    [key: string]: (args: string[]) => CommandResponse;
}

const projectDetails: { [key: string]: string } = {
    "portfolio-website": `Portfolio Website
A personal portfolio built with React and TypeScript.
Features a terminal-inspired interface, project showcase, and more.
Tech: React, TypeScript, Tailwind CSS, Vite
Repo: https://github.com/therealpyppy/Portfolio-Website`,

    "chatapp": `ChatApp
A real-time chat application using WebSockets and React.
Supports multiple rooms and instant messaging.
Tech: WebSocket, React, TypeScript
Repo: https://github.com/therealpyppy/ChatApp`,

    "plotassist": `PlotAssist
A Python tool for assisting with data plotting and analysis.
Built with matplotlib and pandas for data visualization.
Tech: Python, matplotlib, pandas
Repo: https://github.com/therealpyppy/PlotAssist`
};

export const commands: CommandHandler = {
    help: () => ({
        content: `Commands:
help            Show this help message
clear           Clear the terminal
about           About me
skills          My technical skills
ls              View projects
cat [project]   View more info about a project
contact         Contact information
past            View past websites
date            Current date and time
echo [text]     Echo back the text
refresh         Refresh the terminal`,
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
        content: `Skills:
Frontend: React, TypeScript, HTML/CSS, Tailwind CSS, Learning three.js
Backend: Python, Learning Rust
Tools: Git, VS Code, Vite
Other: WebSockets`,
        type: 'system'
    }),

    ls: () => ({
        content: `
/Portfolio-Website (React + TypeScript)
/ChatApp (WebSocket + React)
/PlotAssist (Python + mpl + pandas)

run cat [Project Name] to view more info`,
        type: 'system'
    }),

    cat: (args: string[]) => {
        if (!args.length) {
            return {
                content: "Usage: cat [project]\nExample: cat Portfolio-Website",
                type: "error"
            };
        }
        const key = args.join(' ').toLowerCase().replace(/[^a-z0-9]/gi, '');

        let matchedKey = '';
        if (key.includes('portfolio')) matchedKey = 'portfolio-website';
        else if (key.includes('chat')) matchedKey = 'chatapp';
        else if (key.includes('plot')) matchedKey = 'plotassist';

        if (matchedKey && projectDetails[matchedKey]) {
            return {
                content: projectDetails[matchedKey],
                type: 'system'
            };
        } else {
            return {
                content: `Project not found. Try: Portfolio-Website, ChatApp, or PlotAssist.`,
                type: 'error'
            };
        }
    },

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