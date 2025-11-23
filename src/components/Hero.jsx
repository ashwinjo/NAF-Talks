import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = 'Network Automation Forum Conference Notes'

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  const scrollToContent = () => {
    document.getElementById('introduction').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background network diagram SVG */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          {/* Network topology lines */}
          <line x1="400" y1="100" x2="200" y2="300" stroke="#00ff41" strokeWidth="2"/>
          <line x1="400" y1="100" x2="600" y2="300" stroke="#00ff41" strokeWidth="2"/>
          <line x1="200" y1="300" x2="100" y2="500" stroke="#00ff41" strokeWidth="2"/>
          <line x1="200" y1="300" x2="300" y2="500" stroke="#00ff41" strokeWidth="2"/>
          <line x1="600" y1="300" x2="500" y2="500" stroke="#00ff41" strokeWidth="2"/>
          <line x1="600" y1="300" x2="700" y2="500" stroke="#00ff41" strokeWidth="2"/>
          
          {/* Network nodes */}
          <circle cx="400" cy="100" r="20" fill="#00ff41" opacity="0.3"/>
          <circle cx="200" cy="300" r="15" fill="#00ff41" opacity="0.3"/>
          <circle cx="600" cy="300" r="15" fill="#00ff41" opacity="0.3"/>
          <circle cx="100" cy="500" r="10" fill="#00ff41" opacity="0.3"/>
          <circle cx="300" cy="500" r="10" fill="#00ff41" opacity="0.3"/>
          <circle cx="500" cy="500" r="10" fill="#00ff41" opacity="0.3"/>
          <circle cx="700" cy="500" r="10" fill="#00ff41" opacity="0.3"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Terminal window header */}
        <div className="mb-8 inline-flex items-center space-x-2 text-terminal-gray">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
          <span className="ml-4 text-sm">terminal@naf-notes:~$</span>
        </div>

        {/* Main title with typing effect */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-terminal-green">
            {text}
            {showCursor && <span className="animate-blink">_</span>}
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mb-8 space-y-2">
          <p className="text-terminal-white text-lg sm:text-xl">
            <span className="text-terminal-green">$</span> cat conference_insights.md
          </p>
          <p className="text-terminal-gray text-base sm:text-lg max-w-2xl mx-auto">
            A comprehensive collection of insights, talks, and learnings from the Network Automation Forum
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="border border-terminal-green-dim bg-terminal-darker bg-opacity-50 px-6 py-3 rounded-lg">
            <div className="text-2xl font-bold text-terminal-green">3</div>
            <div className="text-sm text-terminal-gray">Days</div>
          </div>
          <div className="border border-terminal-green-dim bg-terminal-darker bg-opacity-50 px-6 py-3 rounded-lg">
            <div className="text-2xl font-bold text-terminal-green">4</div>
            <div className="text-sm text-terminal-gray">Tracks</div>
          </div>
          <div className="border border-terminal-green-dim bg-terminal-darker bg-opacity-50 px-6 py-3 rounded-lg">
            <div className="text-2xl font-bold text-terminal-green">30+</div>
            <div className="text-sm text-terminal-gray">Sessions</div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToContent}
          className="group relative inline-flex items-center space-x-2 px-8 py-4 border-2 border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-terminal-bg transition-all duration-300 rounded-lg font-semibold"
        >
          <span>Start Reading</span>
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg 
            className="w-6 h-6 mx-auto text-terminal-green opacity-50" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero

