import { Link } from 'react-router-dom'

export default function TradProj() {
    return (
        <div>
            <div className="fixed z-5 flex flex-row gap-4 justify-end pt-1 px-4 pb-1">
                <Link to="/traditional">
                    <h1 className="text-xl font-semibold text-right">
                        About
                    </h1>
                </Link>
                <Link to="/traditional/projects">
                    <h1 className="text-xl font-semibold text-right underline">
                        Projects
                    </h1>
                </Link>
            </div>
        </div>
    )
}