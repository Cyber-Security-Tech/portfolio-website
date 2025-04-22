'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

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
        Let&rsquo;s Talk
      </h3>
      <p className="text-gray-400 mb-10 leading-relaxed">
        I&rsquo;m a recent IT graduate actively seeking <span className="text-white font-medium">internships</span> or <span className="text-white font-medium">entry-level opportunities</span> in software engineering or cybersecurity.
        <br />
        <br />
        Whether you&rsquo;re hiring, collaborating, or just want to say hi &mdash; feel free to reach out!
      </p>

      {/* Email Button */}
      <a
        href="mailto:nsum280@gmail.com"
        className="inline-block border border-accent text-accent px-6 py-3 font-mono rounded hover:bg-accent hover:text-[#0a192f] transition-all"
      >
        nsum280@gmail.com
      </a>

      {/* Social Icons */}
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://github.com/Cyber-Security-Tech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-accent transition text-xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/nida-ilyas-4aa49528b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-accent transition text-xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  )
}
