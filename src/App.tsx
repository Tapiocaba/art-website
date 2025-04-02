import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ContactForm } from './components/ContactForm'
import SideNav from './components/SideNav'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import './App.css'

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Dark/light mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <Router>
      <div className="app">
        <SideNav />
        <main>
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/works/drawings" element={<div>Drawings</div>} />
            <Route path="/works/photo" element={<div>Photo</div>} />
            <Route path="/works/installation" element={<div>Installation</div>} />
            <Route path="/works/film" element={<div>Film</div>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <ContactForm 
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </Router>
  )
}

export default App
