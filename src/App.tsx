import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Term from './pages/Term'
import Trad from './pages/Traditional'
import { ThemeProvider } from "@/components/theme-provider"

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/terminal" element={<Term />} />
                    <Route path="/traditional" element={<Trad />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
