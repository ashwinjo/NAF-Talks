import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Day1General from './components/Day1General'
import Day2General from './components/Day2General'
import Day2Advanced from './components/Day2Advanced'
import Day2Leadership from './components/Day2Leadership'
import Day3Closing from './components/Day3Closing'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import TerminalEffects from './components/TerminalEffects'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'introduction',
        'day1-general',
        'day2-general',
        'day2-advanced',
        'day2-leadership',
        'day3-closing',
        'about'
      ]

      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen terminal-scanline">
      <TerminalEffects />
      
      <Navigation 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen}
        activeSection={activeSection}
      />
      
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen}
        activeSection={activeSection}
      />
      
      <main className="relative z-10">
        <Hero />
        <Introduction />
        <Day1General />
        <Day2General />
        <Day2Advanced />
        <Day2Leadership />
        <Day3Closing />
        <AboutMe />
        <Footer />
      </main>
    </div>
  )
}

export default App

