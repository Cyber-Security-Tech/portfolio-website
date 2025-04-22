'use client'

import { useState } from 'react'
import { featuredProjects } from '@/data/projects'
import { otherProjects } from '@/data/otherProjects'
import { FaGithub } from 'react-icons/fa'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? otherProjects : otherProjects.slice(0, 6)

  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto py-28 px-6 sm:px-16 md:px-20"
    >
      {/* Section Title */}
      <div className="flex items-center mb-10">
        <h2 className="text-xl font-semibold text-accent font-mono mr-4 whitespace-nowrap">
          02. Featured Projects
        </h2>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      {/* Featured Projects */}
      <div className="space-y-16 mb-28">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col md:flex-row md:even:flex-row-reverse gap-6 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(100,255,218,0.25)]"
          >
            {/* Media */}
            <div className="md:w-1/2 h-56 md:h-auto overflow-hidden rounded-lg bg-gray-800 flex items-center justify-center">
              {project.mediaType === 'gif' && (
                <img
                  src={project.mediaUrl}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              )}
              {project.mediaType === 'video' && (
                <video
                  src={project.mediaUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="object-cover w-full h-full"
                />
              )}
              {project.mediaType === 'image' && (
                <img
                  src={project.mediaUrl}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              )}
            </div>

            {/* Content */}
            <div className="md:w-1/2 flex flex-col justify-center space-y-4">
              <p className="text-sm text-accent font-mono">Featured Project</p>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              <ul className="flex flex-wrap text-xs text-accent font-mono gap-3">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>

              <div className="flex space-x-4 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Link"
                >
                  <FaGithub className="text-gray-400 hover:text-accent text-xl transition" />
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects */}
      <div className="mb-10">
        <h3 className="text-lg font-mono text-accent mb-6">Other Projects</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#112240] rounded-lg overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] transition-all"
            >
              {/* Media */}
              <div className="h-44 w-full bg-gray-800">
                {project.mediaType === 'gif' && (
                  <img
                    src={project.mediaUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
                {project.mediaType === 'image' && (
                  <img
                    src={project.mediaUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col space-y-3">
                <h4 className="text-white text-lg font-semibold">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                <ul className="flex flex-wrap text-xs text-accent font-mono gap-2">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <div className="flex space-x-4 pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-gray-400 hover:text-accent text-xl transition" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {otherProjects.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 font-mono border border-accent text-accent rounded hover:bg-accent hover:text-[#0a192f] transition"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
