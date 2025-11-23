import React from 'react'

const Sidebar = ({ isOpen, setIsOpen, activeSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const menuItems = [
    { id: 'introduction', label: 'Introduction', icon: '📚' },
    { id: 'day1-general', label: 'Day 1 - General Track', icon: '1️⃣' },
    { id: 'day2-general', label: 'Day 2 - General Track', icon: '2️⃣' },
    { id: 'day2-advanced', label: 'Day 2 - Advanced Track', icon: '🔧' },
    { id: 'day2-leadership', label: 'Day 2 - Leadership Track', icon: '👥' },
    { id: 'day3-closing', label: 'Day 3 - Closing Notes', icon: '3️⃣' },
    { id: 'about', label: 'About Me', icon: '👤' },
  ]

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 
        bg-terminal-darker border-l border-terminal-green-dim
        transform transition-transform duration-300 z-40
        overflow-y-auto
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-terminal-green text-lg font-bold mb-2">
              {'> '}Table of Contents
            </h2>
            <div className="h-0.5 bg-terminal-green-dim w-full"></div>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full text-left px-4 py-3 rounded-lg
                  transition-all duration-200
                  flex items-center space-x-3
                  ${activeSection === item.id 
                    ? 'bg-terminal-green bg-opacity-20 text-terminal-green border border-terminal-green-dim' 
                    : 'text-terminal-white hover:bg-terminal-bg hover:text-terminal-green'
                  }
                `}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 p-4 border border-terminal-green-dim rounded-lg bg-terminal-bg">
            <p className="text-xs text-terminal-gray">
              <span className="text-terminal-green">$</span> Network Automation Forum
            </p>
            <p className="text-xs text-terminal-gray mt-1">
              Conference Notes - Terminal Edition
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

