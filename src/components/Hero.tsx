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
          Your Name.
        </h1>

        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-400 leading-tight mb-6">
          I build things for the web.
        </h2>

        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products.
        </p>

        <a
          href="#projects"
          className="inline-block font-mono text-accent border border-accent px-6 py-3 rounded hover:bg-accent hover:text-background transition"
        >
          Check out my work
        </a>
      </div>
    </section>
  )
}
