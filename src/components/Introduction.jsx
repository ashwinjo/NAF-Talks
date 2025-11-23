import React from 'react'
import MarkdownRenderer from './MarkdownRenderer'

const Introduction = () => {
  const content = `# Network Automation Forum (NAF)

The **[Network Automation Forum (NAF)](https://networkautomation.forum/autocon4)** exists to build a strong community among network operations engineers, automation and AI subject matter experts, supporting vendors, and anyone interested in advancing the state of network operations through automation, orchestration, and observability.

NAF serves as a collaborative space for information exchange, constructive discussions, thoughtful debate, and the promotion of effective ideas, architectures, and tools that drive superior network operations through intelligent and scalable automation.

**Conference Details:** These session notes are from [AutoCon 4, Austin, TX (November 17-21, 2025)](https://networkautomation.forum/autocon4).`

  return (
    <section id="introduction" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="border border-terminal-green-dim bg-terminal-darker bg-opacity-40 rounded-lg p-8 backdrop-blur-sm">
          <div className="mb-6 flex items-center space-x-2 text-terminal-green">
            <span className="text-2xl">📚</span>
            <span className="text-sm font-mono">$ cat introduction.md</span>
          </div>
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </section>
  )
}

export default Introduction

