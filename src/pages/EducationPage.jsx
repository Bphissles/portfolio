import Education from '../components/Education'
import useDocumentMeta from '../hooks/useDocumentMeta'

function EducationPage() {
  useDocumentMeta(
    'Education & Certifications',
    'Academic background and certifications of Ben Hislop — B.S. Computer Science (Cum Laude) and AWS Solutions Architect certification.'
  )

  return <Education />
}

export default EducationPage
