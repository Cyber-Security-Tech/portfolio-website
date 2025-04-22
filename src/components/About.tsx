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
          Hello! I’m <span className="text-white">Nida Ilyas</span>, a recent graduate from <span className="text-white">George Mason University</span> with a degree in <span className="text-white">Information Technology</span> and a concentration in <span className="text-white">Cybersecurity</span>.
        </p>
        <p>
          I hold the <span className="text-white">CompTIA Security+</span> certification and am currently focused on leveling up my software engineering skills — building full-stack web apps and Python-based tools that are clean, secure, and user-friendly.
        </p>
        <p>
          My goal is to blend strong technical foundations with real-world coding experience to contribute to teams solving meaningful problems. I'm actively looking for <span className="text-white">internships</span> or <span className="text-white">entry-level roles</span> in software engineering or cybersecurity.
        </p>
        <p>Here are some tools I’ve been working with recently:</p>

        {/* Tech List */}
        <ul className="grid grid-cols-2 gap-2 mt-4 text-sm font-mono text-accent">
          <li>Python</li>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>React & Next.js</li>
          <li>PostgreSQL</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  )
}
