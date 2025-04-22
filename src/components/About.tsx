'use client'

export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-3xl mx-auto py-28 px-6 sm:px-16 md:px-20"
    >
      {/* Section Title */}
      <div className="flex items-center mb-10">
        <h2 className="text-xl font-semibold text-accent font-mono mr-4 whitespace-nowrap">
          01. About Me
        </h2>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      {/* Description */}
      <div className="space-y-4 text-gray-400 text-base leading-relaxed">
        <p>
          Hello! I’m <span className="text-white">Your Name</span>, a front-end
          developer passionate about building responsive and accessible web
          interfaces with a modern, minimal vibe.
        </p>
        <p>
          My current focus is on React, Next.js, and Tailwind CSS — but I love
          exploring anything that helps create better digital experiences.
        </p>
        <p>Here are some tools I’ve been working with recently:</p>

        {/* Tech List */}
        <ul className="grid grid-cols-2 gap-2 mt-4 text-sm font-mono text-accent">
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  )
}
