import Work from '../components/Work'
import useDocumentMeta from '../hooks/useDocumentMeta'

function WorkPage() {
  useDocumentMeta(
    'Work Experience',
    'Professional experience of Ben Hislop — Senior Frontend Developer with roles spanning AI innovation, enterprise architecture, and frontend leadership.'
  )

  return <Work />
}

export default WorkPage
