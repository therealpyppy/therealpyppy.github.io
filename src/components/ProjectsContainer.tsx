import { ProjectCard } from '@/components/ProjectCard'

interface Project {
    title: string
    description: string
    githubUrl?: string
    liveUrl?: string
    externalUrl?: string
    externalUrlText?: string
    tags?: Array<{
        text: string
        variant?: 'default' | 'live'
        size?: 'default' | 'sm' | 'lg' | 'icon'
    }>
}

interface ProjectsContainerProps {
    title: string
    projects: Project[]
}

export default function ProjectsContainer({ title, projects }: ProjectsContainerProps) {
    return (
        <div className="pt-16 pb-8 relative z-10 p-5 sm:p-8 md:p-12 flex flex-col items-center">
            <div className="rounded-[10px] flex flex-col items-center bg-black/70 shadow-xl w-full max-w-3xl mx-auto p-5 sm:p-8 md:p-12">
                <h1 className="text-white text-3xl font-bold mb-8 text-center">{title}</h1>
                <div className="flex flex-col gap-8 w-full items-center">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            githubUrl={project.githubUrl}
                            liveUrl={project.liveUrl}
                            externalUrl={project.externalUrl}
                            externalUrlText={project.externalUrlText}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
} 