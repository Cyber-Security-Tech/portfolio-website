'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout

    const handleScroll = () => {
      const scrolled = window.scrollY > 0
      setIsScrolled(scrolled)
      setIsScrolling(true)

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClasses = clsx(
    'fixed top-0 left-0 w-full z-50 transition-all duration-300',
    {
      'bg-transparent': !isScrolled,
      'backdrop-blur-md bg-[#0a192f]/70': isScrolled,
      'shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]': isScrolled && !isScrolling,

    }
  )

  return (
    <header className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <span className="text-white text-lg font-semibold tracking-wide">
          Your Name
        </span>
        <ul className="flex space-x-8 text-sm text-gray-400">
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
