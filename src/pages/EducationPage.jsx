import Education from '../components/Education'
import useDocumentMeta from '../hooks/useDocumentMeta'

function EducationPage() {
  useDocumentMeta(
    'Education',
    'Academic background of Ben Hislop — B.S. Computer Science (Cum Laude) and A.S. Mathematics.'
  )

  return <Education />
}

export default EducationPage
