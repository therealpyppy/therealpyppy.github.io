import { Link } from 'react-router-dom'

export default function ProfileHeader() {
    return (
        <div className="absolute top-2 right-2 z-50 flex flex-row gap-4">
            <Link to="/traditional">
                <h1 className="text-xl font-semibold text-right underline text-white">
                    About
                </h1>
            </Link>
            <Link to="/traditional/projects">
                <h1 className="text-xl font-semibold text-right text-white">
                    Projects
                </h1>
            </Link>
        </div>
    )
} 