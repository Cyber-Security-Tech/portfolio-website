'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import LogoIconStatic from './LogoIconStatic'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [justLanded, setJustLanded] = useState(true)

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

    const glowTimeout = setTimeout(() => {
      setJustLanded(false)
    }, 1200)

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(glowTimeout)
    }
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
        {/* Logo with glowing effect if just landed */}
        <motion.div
          layoutId="logo"
          whileHover={{ scale: 1.1 }}
          initial={false}
          animate={
            justLanded
              ? { filter: 'drop-shadow(0 0 15px rgba(0,255,180,0.8))' }
              : { filter: 'none' }
          }
          transition={{ duration: 0.6 }}
          className="w-10 h-10"
        >
          <LogoIconStatic />
        </motion.div>

        {/* Nav Links */}
        <ul className="hidden sm:flex space-x-8 text-sm text-gray-300 items-center">
          <li><Link href="#about" className="hover:text-accent transition">About</Link></li>
          <li><Link href="#projects" className="hover:text-accent transition">Projects</Link></li>
          <li><Link href="#contact" className="hover:text-accent transition">Contact</Link></li>
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
