import { useState } from "react";

export default function TechStack() {
    const [expanded, setExpanded] = useState(false);

    const mainIcons = [
        {
            src: "assets/icons/python.svg",
            alt: "Python",
            label: "Python"
        },
//        {
//            src: "assets/icons/rust.png",
//            alt: "Rust",
//            label: "Rust"
//       },
        {
            src: "assets/icons/htmlcss.png",
            alt: "HTML/CSS",
            label: "HTML CSS"
        },
        {
            src: "assets/icons/js.svg",
            alt: "JavaScript",
            label: "JavaScript"
        },
    ];

    const moreIcons = [
        {
            src: "assets/icons/java.svg",
            alt: "Java",
            label: "Java"
        },
        {
            src: "assets/icons/git.svg",
            alt: "Git",
            label: "Git"
        },
        {
            src: "assets/icons/react.svg",
            alt: "React",
            label: "React"
        },
        {
            src: "assets/icons/vite.svg",
            alt: "Vite",
            label: "Vite"
        },
    ];

    return (
        <div className="bg-secondary p-5 rounded-lg flex flex-col items-center gap-2">
            <h3 className="text-primary text-lg font-semibold">Tech Stack</h3>
            <div className="flex flex-row gap-6">
                {mainIcons.map((icon) => (
                    <div key={icon.label} className="group relative flex flex-col items-center">
                        <img src={icon.src} alt={icon.alt} className="w-8 h-8" />
                        <span className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 bg-neutral-800 text-xs text-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                            {icon.label}
                        </span>
                    </div>
                ))}
            </div>
            <div
                className={`overflow-hidden transition-all duration-300 ${expanded ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                style={{ width: "100%" }}
            >
                <div className="flex flex-row gap-6 justify-center pt-2">
                    {moreIcons.map((icon) => (
                        <div key={icon.label} className="group relative flex flex-col items-center">
                            <img src={icon.src} alt={icon.alt} className="w-8 h-8" />
                            <span className="absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 bg-neutral-800 text-xs text-primary rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                                {icon.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="mt-2 text-blue-400 hover:underline focus:outline-none"
                onClick={() => setExpanded((e) => !e)}
                aria-expanded={expanded}
            >
                {expanded ? "See Less" : "See More"}
            </button>
        </div>
    );
}
