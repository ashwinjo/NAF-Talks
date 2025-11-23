import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-terminal-green-dim py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          {/* Terminal-style footer */}
          <div className="font-mono text-sm text-terminal-gray">
            <p>
              <span className="text-terminal-green">$</span> logout
            </p>
            <p className="mt-2">
              Session ended: Network Automation Forum {currentYear}
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center space-x-6 text-xs">
            <a 
              href="https://www.linkedin.com/in/ashjoresume/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-terminal-gray hover:text-terminal-green transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-terminal-gray">|</span>
            <a 
              href="mailto:ashwinjosh@gmail.com"
              className="text-terminal-gray hover:text-terminal-green transition-colors"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-terminal-gray">
            <p>Built with React + Vite • Styled with Tailwind CSS</p>
            <p className="mt-1">Terminal theme inspired by network automation workflows</p>
          </div>

          {/* Network diagram decoration */}
          <div className="flex justify-center space-x-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 rounded-full bg-terminal-green opacity-30"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

