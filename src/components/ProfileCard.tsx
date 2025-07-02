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
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mb-2"
            />
            <h1 className="text-3xl font-bold text-white">
                <span className="text-blue-400">{name}</span>
            </h1>
            <h2 className="text-lg text-neutral-300 mb-2">{title}</h2>

            <TechStack />

            <div className="flex flex-col items-center gap-1 mt-4">
                <h3 className="text-white text-lg font-semibold">Education</h3>
                <p className="text-neutral-300 text-sm">{education} - {location}</p>
            </div>
        </div>
    )
} 