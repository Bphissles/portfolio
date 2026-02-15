import { useParams, Link } from 'react-router-dom'
import BorderCard from './BorderCard'
import projects from '../data/projects'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="container">
        <h3 className="mega-heading-3">Not Found</h3>
        <p className="text-black/70 mt-4">This project doesn't exist.</p>
        <Link to="/projects" className="btn btn-teal mt-6 inline-block">Back to Projects</Link>
      </section>
    )
  }

  return (
    <section className="container">
      <Link to="/projects" className="text-sm text-coral font-semibold uppercase tracking-wide hover:text-teal transition-colors">&larr; All Projects</Link>

      <h3 className="mega-heading-3 mt-4">{project.title}</h3>

      <p className="text-base md:text-xl text-black/70 max-w-3xl mt-4 md:mt-6 leading-relaxed">{project.description}</p>

      <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-coral">Live Site</a>
        )}
        {project.discordUrl && (
          <a href={project.discordUrl} target="_blank" rel="noopener noreferrer" className="btn btn-coral">Discord</a>
        )}
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
        )}
      </div>

      <div className="flex flex-col gap-8 md:gap-12 mt-10 md:mt-14">
        {project.sections.map((section) => (
          <BorderCard key={section.heading} color={project.color}>
            <h4 className="text-xl md:text-2xl font-bold text-black italic mb-2 md:mb-3">{section.heading}</h4>
            <p className="text-black/80 leading-relaxed">{section.content}</p>
          </BorderCard>
        ))}
      </div>

      <div className="mt-10 md:mt-14">
        <h4 className="text-xl md:text-2xl font-bold text-black italic mb-4">Tech Stack</h4>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span key={t} className="text-sm font-semibold uppercase tracking-wide bg-teal/20 text-black px-3 py-2 border-2 border-black">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
