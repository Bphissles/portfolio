import { useParams } from 'react-router-dom'
import ProjectDetail from '../components/ProjectDetail'
import useDocumentMeta from '../hooks/useDocumentMeta'
import projects from '../data/projects'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useDocumentMeta(
    project ? project.title : 'Project Not Found',
    project ? project.description : undefined
  )

  return <ProjectDetail />
}

export default ProjectDetailPage
