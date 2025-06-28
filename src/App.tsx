import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Term from './pages/Term'
import Trad from './pages/Traditional'

function App() {
    return (
        <BrowserRouter>
        <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/terminal" element={<Term />} />
                <Route path="/traditional" element={<Trad />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
