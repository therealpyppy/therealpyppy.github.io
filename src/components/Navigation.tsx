import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

export default function Navigation() {
    return (
        <nav className="fixed top-2 left-2 z-50">
            <Button asChild size="sm">
                <Link to="/">
                    Home
                </Link>
            </Button>
        </nav>
    )
}