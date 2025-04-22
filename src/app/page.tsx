'use client'
import Reveal from '@/components/Reveal'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
    </>
  )
}
