'use client'

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-start justify-center pt-36 px-6"
    >
      <div className="max-w-3xl w-full mx-auto text-left">
        <p className="text-accent font-mono text-sm mb-4">Hi, my name is</p>

        <h1 className="text-6xl sm:text-7xl font-bold text-white leading-tight mb-4">
          Nida Ilyas.
        </h1>

        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-400 leading-tight mb-6">
          Software Engineering and Cybersecurity Enthusiast.
        </h2>

        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          I’m a recent IT graduate passionate about building secure, user-friendly software. Currently seeking internships or entry-level opportunities in software engineering or cybersecurity.
        </p>

        <div className="flex space-x-4">
          <a
            href="#projects"
            className="inline-block font-mono text-accent border border-accent px-6 py-3 rounded hover:bg-accent hover:text-background transition"
          >
            Check out my work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-accent border border-accent px-6 py-3 rounded hover:bg-accent hover:text-background transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}
