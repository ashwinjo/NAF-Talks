import React, { useState, useEffect } from 'react'

const Navigation = ({ sidebarOpen, setSidebarOpen, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-terminal-bg bg-opacity-95 backdrop-blur-sm border-b border-terminal-green-dim' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-terminal-green text-2xl">{'>'}</span>
            <span className="text-lg font-bold text-terminal-green">NAF_NOTES.sh</span>
            <span className="text-terminal-green animate-blink">_</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('introduction')}
              className={`text-sm hover:text-terminal-green-bright transition-colors ${
                activeSection === 'introduction' ? 'text-terminal-green' : 'text-terminal-white'
              }`}
            >
              Introduction
            </button>
            <button 
              onClick={() => scrollToSection('day1-general')}
              className={`text-sm hover:text-terminal-green-bright transition-colors ${
                activeSection === 'day1-general' ? 'text-terminal-green' : 'text-terminal-white'
              }`}
            >
              Day 1
            </button>
            <button 
              onClick={() => scrollToSection('day2-general')}
              className={`text-sm hover:text-terminal-green-bright transition-colors ${
                activeSection === 'day2-general' ? 'text-terminal-green' : 'text-terminal-white'
              }`}
            >
              Day 2
            </button>
            <button 
              onClick={() => scrollToSection('day3-closing')}
              className={`text-sm hover:text-terminal-green-bright transition-colors ${
                activeSection === 'day3-closing' ? 'text-terminal-green' : 'text-terminal-white'
              }`}
            >
              Day 3
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`text-sm hover:text-terminal-green-bright transition-colors ${
                activeSection === 'about' ? 'text-terminal-green' : 'text-terminal-white'
              }`}
            >
              About
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-2 text-terminal-green hover:text-terminal-green-bright transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {sidebarOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

