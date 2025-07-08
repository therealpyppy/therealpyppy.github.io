export interface CommandResponse {
    content: string;
    type: 'system' | 'error' | 'success';
    action?: 'navigate' | 'open_url';
    url?: string;
}

export interface CommandHandler {
    [key: string]: (args: string[], currentPath: string) => CommandResponse;
}

interface FileSystemNode {
    type: 'file' | 'directory';
    content?: string;
    children?: { [key: string]: FileSystemNode };
    url?: string;
}

const fileSystem: FileSystemNode = {
    type: 'directory',
    children: {
        'about.txt': {
            type: 'file',
            content: `Hi! I'm Peppy (aka Pyppy), a passionate developer who's trying to find where I fit.
When I'm not coding, I'm sleeping.`
        },
        'skills.txt': {
            type: 'file',
            content: `Skills:
Frontend: React, TypeScript, HTML/CSS, Tailwind CSS, Learning three.js
Backend: Python, Learning Rust
Tools: Git, VS Code, Vite
Other: WebSockets`
        },
        'contact.txt': {
            type: 'file',
            content: `Get in touch with me:
• Email: iainpfox@gmail.com
• GitHub: github.com/therealpyppy
• Discord: therealpeppy`
        },
        'projects': {
            type: 'directory',
            children: {
                'portfolio-website': {
                    type: 'directory',
                    children: {
                        'README.md': {
                            type: 'file',
                            content: `Portfolio Website
A personal portfolio built with React and TypeScript.
Features a terminal-inspired interface, project showcase, and more.
Tech: React, TypeScript, Tailwind CSS, Vite`
                        },
                        'repo.txt': {
                            type: 'file',
                            content: 'https://github.com/therealpyppy/Portfolio-Website'
                        }
                    }
                },
                'chatapp': {
                    type: 'directory',
                    children: {
                        'README.md': {
                            type: 'file',
                            content: `ChatApp
A real-time chat application using WebSockets and React.
Supports multiple rooms and instant messaging.
Tech: WebSocket, React, TypeScript`
                        },
                        'repo.txt': {
                            type: 'file',
                            content: 'https://github.com/therealpyppy/ChatApp'
                        }
                    }
                },
                'plotassist': {
                    type: 'directory',
                    children: {
                        'README.md': {
                            type: 'file',
                            content: `PlotAssist
A Python tool for assisting with data plotting and analysis.
Built with matplotlib and pandas for data visualization.
Tech: Python, matplotlib, pandas`
                        },
                        'repo.txt': {
                            type: 'file',
                            content: 'https://github.com/therealpyppy/PlotAssist'
                        }
                    }
                }
            }
        }
    }
};

function navigateToPath(path: string): FileSystemNode | null {
    const parts = path.split('/').filter(part => part !== '');
    let current = fileSystem;
    
    for (const part of parts) {
        if (current.type === 'directory' && current.children && current.children[part]) {
            current = current.children[part];
        } else {
            return null;
        }
    }
    
    return current;
}

function getDirectoryContents(path: string): string[] {
    const node = navigateToPath(path);
    if (node && node.type === 'directory' && node.children) {
        return Object.keys(node.children);
    }
    return [];
}

export const commands: CommandHandler = {
    help: () => ({
        content: `Commands:
help            Show this help message
clear           Clear the terminal
ls              List files and directories
cd [directory]  Change directory
cat [file]      Display file contents
open [file]     Open repository URL (if file contains URL)
pwd             Show current directory path
date            Current date and time
echo [text]     Echo back the text
refresh         Refresh the terminal`,
        type: 'system'
    }),

    clear: () => ({
        content: '',
        type: 'system'
    }),

    ls: (_args: string[], currentPath: string) => {
        const contents = getDirectoryContents(currentPath);
        if (contents.length === 0) {
            return {
                content: 'Directory is empty.',
                type: 'system'
            };
        }
        
        const formattedContents = contents.map(item => {
            const node = navigateToPath(currentPath + '/' + item);
            const type = node?.type === 'directory' ? 'd' : '-';
            return `${type} ${item}`;
        }).join('\n');
        
        return {
            content: formattedContents,
            type: 'system'
        };
    },

    cd: (args: string[], currentPath: string) => {
        if (!args.length) {
            return {
                content: 'Usage: cd [directory]\nUse cd .. to go up one directory',
                type: 'error'
            };
        }

        const target = args[0];
        let newPath = currentPath;

        if (target === '..') {
            const parts = currentPath.split('/').filter(part => part !== '');
            parts.pop();
            newPath = '/' + parts.join('/');
        } else if (target === '/') {
            newPath = '/';
        } else {
            const targetPath = currentPath === '/' ? '/' + target : currentPath + '/' + target;
            const node = navigateToPath(targetPath);
            
            if (!node || node.type !== 'directory') {
                return {
                    content: `Directory not found: ${target}`,
                    type: 'error'
                };
            }
            newPath = targetPath;
        }

        return {
            content: `Changed directory to: ${newPath}`,
            type: 'success',
            action: 'navigate',
            url: newPath
        };
    },

    cat: (args: string[], currentPath: string) => {
        if (!args.length) {
            return {
                content: "Usage: cat [file]\nExample: cat about.txt",
                type: "error"
            };
        }

        const filename = args[0];
        const filePath = currentPath === '/' ? '/' + filename : currentPath + '/' + filename;
        const node = navigateToPath(filePath);

        if (!node || node.type !== 'file') {
            return {
                content: `File not found: ${filename}`,
                type: 'error'
            };
        }

        return {
            content: node.content || 'File is empty.',
            type: 'system'
        };
    },

    open: (args: string[], currentPath: string) => {
        if (!args.length) {
            return {
                content: "Usage: open [file]\nOpens the URL contained in the specified file",
                type: "error"
            };
        }

        const filename = args[0];
        const filePath = currentPath === '/' ? '/' + filename : currentPath + '/' + filename;
        const node = navigateToPath(filePath);

        if (!node || node.type !== 'file') {
            return {
                content: `File not found: ${filename}`,
                type: 'error'
            };
        }

        const content = node.content || '';
        const urlMatch = content.match(/https?:\/\/[^\s]+/);
        
        if (!urlMatch) {
            return {
                content: `No URL found in ${filename}`,
                type: 'error'
            };
        }

        return {
            content: `Opening: ${urlMatch[0]}`,
            type: 'success',
            action: 'open_url',
            url: urlMatch[0]
        };
    },

    pwd: (_args: string[], currentPath: string) => ({
        content: currentPath,
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

export function executeCommand(command: string, currentPath: string = '/'): CommandResponse {
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
        return commands[lowerCmd](args, currentPath);
    }

    return {
        content: `Command not found: ${cmd}. Type 'help' for available commands.`,
        type: 'error'
    };
}

export function getAvailableCommands(): string[] {
    return Object.keys(commands);
} 