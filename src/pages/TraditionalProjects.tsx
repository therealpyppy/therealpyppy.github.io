import { Link } from 'react-router-dom'
import { ProjectCard } from '@/components/ProjectCard'

export default function TradProj() {
    return (
        <div className="min-h-screen relative">
            <div className="absolute top-2 right-2 z-50 flex flex-row gap-4">
                <Link to="/traditional">
                    <h1 className="text-xl font-semibold text-right text-white">
                        About
                    </h1>
                </Link>
                <Link to="/traditional/projects">
                    <h1 className="text-xl font-semibold text-right underline text-white">
                        Projects
                    </h1>
                </Link>
            </div>
            
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
                style={{
                    backgroundImage: `url('/src/assets/bg3.jpg')`
                }}>
            </div>
            
            <div className="pt-16 pb-8 relative z-10 p-5 sm:p-8 md:p-12 flex flex-col items-center">
                <div className="rounded-[10px] flex flex-col items-center bg-black/70 shadow-xl w-full max-w-3xl mx-auto p-5 sm:p-8 md:p-12">
                    <h1 className="text-white text-3xl font-bold mb-8 text-center">My Projects</h1>
                    <div className="flex flex-col gap-8 w-full items-center">
                        <ProjectCard
                            title="Portfolio Website"
                            description='My "portfolio website" is a simple web app made to showcase my work, built using React + Vite + Ts and shadcn ui components.'
                            githubUrl="https://github.com/therealpyppy/therealpyppy.github.io"
                            liveUrl="https://therealpyppy.github.io"
                            tags={[
                                { text: "React" },
                                { text: "Vite" },
                                { text: "TypeScript" },
                                { text: "LIVE •", variant: "live", size: "sm"}
                            ]}
                        />

                        <ProjectCard
                            title="JsGame"
                            description='A minimal 2D game engine inspired by PyGame. Includes basic shape rendering, input handling, etc.'
                            githubUrl="https://github.com/therealpyppy/jsGame"
                            tags={[
                                { text: "Javascript" }
                            ]}
                        />

                        <ProjectCard
                            title="ROTMG Scraper"
                            description='Python web scraper that scrapes the realmeye website for important player information'
                            githubUrl="https://github.com/therealpyppy/ROTMG-Scraper"
                            tags={[
                                { text: "Python" },
                                { text: "Requests Html" }
                            ]}
                        />

                        <ProjectCard
                            title="PokemonFightSim"
                            description='My CS1 final project: a basic Pokémon battle simulator. The goal was to mimic Pokémon battles, but we ran out of time and couldn’t implement moves.'
                            githubUrl="https://github.com/therealpyppy/PokemonFightSim"
                            tags={[
                                { text: "Java" },
                                { text: "Swing" }
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}