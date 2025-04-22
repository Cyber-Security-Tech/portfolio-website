'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import clsx from 'clsx'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 0)
      setIsScrolling(true)

      clearTimeout(timeout)
      timeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClasses = clsx(
    'fixed top-0 left-0 w-full backdrop-blur transition-all duration-300 z-50 bg-[#0a192f]/60',
    {
      'shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]': isScrolled && !isScrolling,
    }
  )

  return (
    <header className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
        {/* Left Side: Logo + Email + Icons */}
        <div className="flex flex-col items-start space-y-1 ml-[-0.5rem]">
          <span className="text-accent text-3xl font-bold tracking-wider">N</span>
          <a
            href="mailto:youremail@example.com"
            className="text-sm text-gray-400 hover:text-accent transition"
          >
            youremail@example.com
          </a>
          <div className="flex space-x-3 mt-1">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-400 hover:text-accent transition text-xl" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-gray-400 hover:text-accent transition text-xl" />
            </a>
          </div>
        </div>

        {/* Right Side: Nav Links */}
        <ul className="hidden sm:flex space-x-8 text-sm text-gray-300 items-center">
          <li>
            <Link href="#about" className="hover:text-accent transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-accent transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#blog" className="hover:text-accent transition">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-accent transition">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-accent text-accent px-4 py-1 rounded hover:bg-accent hover:text-[#0a192f] transition"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
