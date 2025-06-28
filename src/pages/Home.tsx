import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Link to="/terminal">
                <h1>
                    Click here to go to the terminal page
                </h1>
            </Link>
            <br></br>
            <Link to="/traditional">
                <h1>
                    Click here to go to the traditional page
                </h1>
            </Link>
            <br></br>
        </div>
    )
}