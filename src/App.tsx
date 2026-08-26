import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './pages/About'
import Experience from './pages/Experience'
import GenAI from './pages/GenAI'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/genai" element={<GenAI />} />
        </Routes>
      </main>
    </>
  )
}

export default App
