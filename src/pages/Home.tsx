import { Link } from 'react-router-dom'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
    return (
        <div className="min-h-screen grid place-items-center">
            <div className="flex flex-col items-center gap-8">
                <ModeToggle />
                <Link to="/terminal">
                    <h1 className="text-xl font-semibold text-center">
                        Click here to go to the terminal page
                    </h1>
                </Link>
                <Link to="/traditional">
                    <h1 className="text-xl font-semibold text-center">
                        Click here to go to the traditional page
                    </h1>
                </Link>
            </div>
        </div>
    )
}