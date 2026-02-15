import Projects from '../components/Projects'
import useDocumentMeta from '../hooks/useDocumentMeta'

function ProjectsPage() {
  useDocumentMeta(
    'Projects',
    'Featured projects by Ben Hislop — full-stack applications, AI-powered tools, and data-driven solutions.'
  )

  return <Projects />
}

export default ProjectsPage
