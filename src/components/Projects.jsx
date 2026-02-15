import { Link } from 'react-router-dom'
import BorderCard from './BorderCard'
import projects from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="container">
      <h3 className="mega-heading-3">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
        {projects.map((project) => (
          <div key={project.slug} className="bg-black/5 rounded-lg p-5 md:p-6 flex flex-col gap-4 hover:bg-black/10 transition-colors">
            <BorderCard color={project.color}>
              <h4 className="text-xl md:text-2xl font-bold text-black italic">{project.title}</h4>
              <p className="text-coral font-semibold text-sm md:text-base mt-1">{project.tagline}</p>
            </BorderCard>
            <p className="text-black/70 leading-relaxed text-sm md:text-base">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 5).map((t) => (
                <span key={t} className="text-xs font-semibold uppercase tracking-wide bg-teal/20 text-black px-2 py-1">{t}</span>
              ))}
              {project.tech.length > 5 && (
                <span className="text-xs font-semibold uppercase tracking-wide bg-black/10 text-black/60 px-2 py-1">+{project.tech.length - 5} more</span>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-2">
              <Link to={`/projects/${project.slug}`} className="btn btn-teal text-sm">Read More</Link>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-coral text-sm">Live Site</a>
              )}
              {project.discordUrl && (
                <a href={project.discordUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline text-sm">Discord</a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline text-sm">GitHub</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
