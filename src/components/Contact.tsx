'use client'

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-2xl mx-auto text-center py-28 px-6 sm:px-16 md:px-20"
    >
      {/* Section Title */}
      <div className="flex items-center gap-6 justify-center mb-8">
        <div className="h-px w-20 sm:w-40 bg-gray-700" />
        <h2 className="text-xl font-semibold text-accent font-mono whitespace-nowrap">
          03. Contact
        </h2>
        <div className="h-px w-20 sm:w-40 bg-gray-700" />
      </div>

      {/* Heading & Description */}
      <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
        Let’s Talk
      </h3>
      <p className="text-gray-400 mb-10 leading-relaxed">
        I’m a recent IT graduate actively seeking <span className="text-white font-medium">internships</span> or <span className="text-white font-medium">entry-level opportunities</span> in software engineering or cybersecurity.
        <br />
        <br />
        Whether you're hiring, collaborating, or just want to say hi — feel free to reach out!
      </p>

      {/* Email Button */}
      <a
        href="mailto:youremail@example.com"
        className="inline-block border border-accent text-accent px-6 py-3 font-mono rounded hover:bg-accent hover:text-[#0a192f] transition-all"
      >
        youremail@example.com
      </a>
    </section>
  )
}
