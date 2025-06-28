import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

export default function Navigation() {
    return (
        <nav>
            <Button asChild size="sm">
                <Link to="/">
                    Home
                </Link>
            </Button>
        </nav>
    )
}