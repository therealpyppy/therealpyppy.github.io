import { Link, useLocation } from 'react-router-dom'

export default function ProfileHeader() {
    const location = useLocation();
    return (
        <div className="absolute top-2 right-2 z-50 flex flex-row gap-4">
            <Link to="/traditional">
                <h1
                    className={`text-xl font-semibold text-right text-white ${
                        location.pathname === '/traditional' ? 'underline' : ''
                    }`}
                >
                    About
                </h1>
            </Link>
            <Link to="/traditional/projects">
                <h1
                    className={`text-xl font-semibold text-right text-white ${
                        location.pathname === '/traditional/projects' ? 'underline' : ''
                    }`}
                >
                    Projects
                </h1>
            </Link>
        </div>
    )
} 