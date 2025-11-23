import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-3xl md:text-4xl font-bold text-terminal-green mb-4 mt-8 glow-text" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl md:text-3xl font-bold text-terminal-green mb-3 mt-6 glow-text" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-xl md:text-2xl font-bold text-terminal-green-bright mb-3 mt-5" {...props} />
        ),
        h4: ({ node, ...props }) => (
          <h4 className="text-lg md:text-xl font-bold text-terminal-green-bright mb-2 mt-4" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="text-terminal-white leading-relaxed mb-4" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc list-inside mb-4 space-y-2 text-terminal-white ml-4" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal list-inside mb-4 space-y-2 text-terminal-white ml-4" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="text-terminal-white leading-relaxed" {...props} />
        ),
        strong: ({ node, ...props }) => (
          <strong className="text-terminal-green-bright font-semibold" {...props} />
        ),
        em: ({ node, ...props }) => (
          <em className="text-terminal-green italic" {...props} />
        ),
        code: ({ node, inline, ...props }) => 
          inline ? (
            <code className="bg-terminal-darker text-terminal-green-bright px-2 py-1 rounded text-sm border border-terminal-green-dim" {...props} />
          ) : (
            <code className="block bg-terminal-darker text-terminal-green-bright p-4 rounded-lg overflow-x-auto text-sm border border-terminal-green-dim" {...props} />
          ),
        pre: ({ node, ...props }) => (
          <pre className="bg-terminal-darker border border-terminal-green-dim rounded-lg p-4 overflow-x-auto mb-4" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-terminal-green pl-4 italic text-terminal-gray my-4" {...props} />
        ),
        a: ({ node, ...props }) => (
          <a className="text-terminal-green hover:text-terminal-green-bright transition-colors underline" {...props} />
        ),
        hr: ({ node, ...props }) => (
          <hr className="border-terminal-green-dim my-8" {...props} />
        ),
        table: ({ node, ...props }) => (
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-terminal-green-dim" {...props} />
          </div>
        ),
        th: ({ node, ...props }) => (
          <th className="border border-terminal-green-dim bg-terminal-darker text-terminal-green font-semibold p-3 text-left" {...props} />
        ),
        td: ({ node, ...props }) => (
          <td className="border border-terminal-green-dim p-3 text-terminal-white" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownRenderer

