'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Socials() {
  return (
    <div className="fixed bottom-0 left-8 hidden lg:flex flex-col items-center gap-4 text-gray-400 z-50">
      {/* Icons */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
        aria-label="GitHub"
      >
        <FaGithub size={20} />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={20} />
      </a>

      {/* Vertical Line */}
      <div className="w-px h-24 mt-2 bg-gray-600" />
    </div>
  )
}
