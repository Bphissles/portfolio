import Work from '../components/Work'
import useDocumentMeta from '../hooks/useDocumentMeta'

function WorkPage() {
  useDocumentMeta(
    'Work Experience',
    'Professional experience of Ben Hislop — Solutions Architect and co-founder with roles spanning AI innovation, cloud and CMS architecture, and frontend leadership.'
  )

  return <Work />
}

export default WorkPage
