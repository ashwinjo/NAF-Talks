import React from 'react'

const AboutMe = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl">👤</span>
            <h2 className="text-3xl font-bold text-terminal-green">About Me</h2>
          </div>
          <p className="text-terminal-gray font-mono text-sm">$ cat about.sh</p>
        </div>

        <div className="border border-terminal-green-dim bg-terminal-darker bg-opacity-50 rounded-lg p-8 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile section */}
            <div className="md:col-span-1 flex flex-col items-center space-y-4">
              <div className="w-48 h-48 rounded-lg border-2 border-terminal-green bg-terminal-darker overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}imageMe.png`}
                  alt="Ashwin Josh - Network Automation Engineer" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Social links */}
              <div className="flex flex-col space-y-3 w-full">
                <a 
                  href="https://www.linkedin.com/in/ashjoresume/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 border border-terminal-green-dim rounded-lg hover:bg-terminal-green hover:bg-opacity-10 transition-all"
                >
                  <svg className="w-5 h-5 text-terminal-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-sm text-terminal-white">LinkedIn</span>
                </a>
                
                <a 
                  href="mailto:ashwinjosh@gmail.com"
                  className="flex items-center space-x-2 px-4 py-2 border border-terminal-green-dim rounded-lg hover:bg-terminal-green hover:bg-opacity-10 transition-all"
                >
                  <svg className="w-5 h-5 text-terminal-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-terminal-white">Email</span>
                </a>
              </div>
            </div>

            {/* Content section */}
            <div className="md:col-span-2 space-y-6 text-terminal-white">
              <div>
                <h3 className="text-xl font-bold text-terminal-green mb-3">Professional Overview</h3>
                <p className="leading-relaxed mb-3">
                  I am a seasoned <strong className="text-terminal-green-bright">Network Automation and Solutions Engineer</strong> with over a decade of experience building intelligent, scalable automation systems across enterprise and cloud environments. My career spans:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-terminal-gray">
                  <li>Software Development</li>
                  <li>DevOps</li>
                  <li>Network Testing</li>
                  <li>Cloud-Native Architectures</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-terminal-green mb-3">Current Role</h3>
                <p className="leading-relaxed mb-3">
                  Currently, at <strong className="text-terminal-green-bright">Keysight Technologies</strong>, I work as a Solutions Engineer specializing in:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-terminal-gray mb-3">
                  <li>Network Automation</li>
                  <li>Network Test</li>
                  <li>Visibility Solutions</li>
                </ul>
                <p className="leading-relaxed text-terminal-gray">
                  In this role, I help customers modernize their testing and operational workflows using platforms like <span className="text-terminal-green-bright">IxNetwork</span>, <span className="text-terminal-green-bright">CyPerf</span>, and <span className="text-terminal-green-bright">Open Traffic Generator</span>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-terminal-green mb-3">Applied GenAI & Innovation</h3>
                <p className="leading-relaxed mb-3">
                  Over the past year, I've expanded my focus into <strong className="text-terminal-green-bright">Applied GenAI</strong>, developing:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-terminal-gray mb-3">
                  <li>Agentic Systems</li>
                  <li>RAG-based Applications</li>
                  <li>Automation Frameworks</li>
                </ul>
                <p className="leading-relaxed text-terminal-gray">
                  These solutions address practical networking challenges including BGP labs, Containerlab topologies, OTG traffic generation, MCP-driven agents, and AI-assisted troubleshooting.
                </p>
              </div>

              <div className="border-t border-terminal-green-dim pt-6">
                <h3 className="text-xl font-bold text-terminal-green mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'React', 'Ansible', 'Nornir', 'pyATS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'OpenTofu', 'GenAI', 'RAG', 'MCP'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-terminal-bg border border-terminal-green-dim rounded text-xs text-terminal-green font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-terminal-bg border border-terminal-green-dim rounded-lg p-4">
                <p className="text-sm text-terminal-gray italic">
                  <span className="text-terminal-green">$ echo</span> "Having worked across the entire network automation lifecycle—design, modeling, orchestration, configuration, testing, observability, and now AI-driven operations—I bring a holistic perspective on how AI and automation can elevate the reliability, performance, and agility of modern networked systems."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

