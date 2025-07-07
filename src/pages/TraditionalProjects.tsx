import ProfileHeader from "@/components/ProfileHeader"
import BackgroundWrapper from "@/components/BackgroundWrapper"
import ProjectsContainer from "@/components/ProjectsContainer"

export default function TradProj() {
    const projects = [
        {
            title: "Portfolio Website",
            description: 'My "portfolio website" is a simple web app made to showcase my work, built using React + Vite + Ts and shadcn ui components.',
            githubUrl: "https://github.com/therealpyppy/therealpyppy.github.io",
            liveUrl: "https://therealpyppy.github.io",
            tags: [
                { text: "React" },
                { text: "Vite" },
                { text: "TypeScript" },
                { text: "LIVE •", variant: "live" as const, size: "sm" as const }
            ]
        },
        {
            title: "JsGame",
            description: 'A minimal 2D game engine inspired by PyGame. Includes basic shape rendering, input handling, etc.',
            githubUrl: "https://github.com/therealpyppy/jsGame",
            tags: [
                { text: "Javascript" }
            ]
        },
        {
            title: "Plot Assist",
            description: "A simple tool to quickly graph data from DataFrames using Matplotlib and Pandas's",
            githubUrl: "https://github.com/therealpyppy/plotAssist",
            tags: [
                { text: "Python" },
                { text: "Tkinter" },
                { text: "Matplotlib" },
                { text: "Pandas" },
                { text: "Numpy" },
                { text: "Matplotlib" },
            ]
        },
        {
            title: "PokemonFightSim",
            description: 'My CS1 final project: a basic Pokémon battle simulator. The goal was to mimic Pokémon battles, but we ran out of time and couldn\'t implement moves.',
            githubUrl: "https://github.com/therealpyppy/PokemonFightSim",
            tags: [
                { text: "Java" },
                { text: "Swing" }
            ]
        }
    ]

    return (
        <BackgroundWrapper backgroundImage="/assets/bg3.jpg">
            <div className="min-h-screen relative">
                <ProfileHeader />
                <ProjectsContainer 
                    title="My Projects"
                    projects={projects}
                />
            </div>
        </BackgroundWrapper>
    )
}