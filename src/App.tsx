import { useState, useEffect } from 'react'
import { ContactForm } from './components/ContactForm'
import './App.css'

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Update theme class when dark mode changes
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="app">
      <header>
        <h1>Art Website</h1>
        <p>Welcome to my art website</p>
        <button onClick={() => setIsContactOpen(true)}>Contact Me</button>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main>
      </main>

      <ContactForm 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  )
}

export default App
