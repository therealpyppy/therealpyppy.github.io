import { Link } from 'react-router-dom'
import TechStack from "@/components/tech-stack"

export default function Trad() {
    return (
        <div>
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

            <div
                className="fixed inset-0 w-full h-full bg-cover bg-center -z-10"
                style={{
                    backgroundImage: `url('assets/bg3.jpg')`
                }}>
            </div>

            <div className="fixed left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 bg-neutral-900/95 rounded p-8 w-auto h-auto flex items-center justify-center shadow-2xl">
                <div className="flex flex-col items-center gap-6 w-full">
                    <img
                        src="assets/pfp.png"
                        alt="Profile Picture"
                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mb-2"
                    />
                    <h1 className="text-3xl font-bold text-white">
                        <span className="text-blue-400">Iain Fox</span>
                    </h1>
                    <h2 className="text-lg text-neutral-300 mb-2">Software Engineer</h2>

                    <TechStack />

                    <div className="flex flex-col items-center gap-1 mt-4">
                        <h3 className="text-white text-lg font-semibold">Education</h3>
                        <p className="text-neutral-300 text-sm">Highschool Freshman - Houston, TX</p>
                    </div>

                    <div className="flex flex-row gap-4 mt-4">
                        <a
                            href="mailto:iainpfox@gmail.com"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow font-medium transition"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/resume.pdf"
                            className="bg-neutral-500 text-white px-4 py-2 rounded shadow font-medium opacity-60 cursor-not-allowed pointer-events-none"
                            tabIndex={-1}
                            aria-disabled="true"
                        >
                            View Resume
                        </a>
                    </div>

                    <div className="flex flex-row gap-4 mt-4">
                        <a
                            href="https://github.com/therealpyppy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition"
                        >
                            <img src="assets/icons/github.svg" alt="GitHub" className="w-7 h-7" />
                        </a>
                        <a
                            href="https://discord.com/users/therealpeppy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition"
                        >
                            <img src="assets/icons/discord.svg" alt="Discord" className="w-7 h-7" />
                        </a>
                        <a
                            href=""
                            className="opacity-60 pointer-events-none"
                            tabIndex={-1}
                            aria-disabled="true"
                        >
                            <img src="assets/icons/linkedin.svg" alt="LinkedIn" className="w-7 h-7" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}