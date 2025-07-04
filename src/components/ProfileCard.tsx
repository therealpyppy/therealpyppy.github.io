import TechStack from "@/components/TeckStack"

interface ProfileCardProps {
    name: string
    title: string
    education: string
    location: string
    imageSrc: string
}

export default function ProfileCard({ 
    name, 
    title, 
    education, 
    location, 
    imageSrc 
}: ProfileCardProps) {
    return (
        <div className="flex flex-col items-center gap-6 w-full">
            <img
                src={imageSrc}
                alt="Profile Picture"
                className="w-32 h-32 rounded-full border-4 border-[color:var(--color-card)] shadow-lg object-cover mb-2"
            />
            <h1 className="text-3xl font-bold" style={{ color: "var(--color-card-foreground)" }}>
                <span style={{ color: "var(--color-primary)" }}>{name}</span>
            </h1>
            <h2 className="text-lg mb-2" style={{ color: "var(--color-muted-foreground)" }}>{title}</h2>

            <TechStack />

            <div className="flex flex-col items-center gap-1 mt-4">
                <h3 className="text-lg font-semibold" style={{ color: "var(--color-card-foreground)" }}>Education</h3>
                <p className="text-sm" style={{ color: "var(--color-muted-foreground)" }}>
                    {education} - {location}
                </p>
            </div>
        </div>
    )
}