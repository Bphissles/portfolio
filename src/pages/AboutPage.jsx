import About from '../components/About'
import useDocumentMeta from '../hooks/useDocumentMeta'

function AboutPage() {
  useDocumentMeta(
    'About',
    'About Ben Hislop — Senior Frontend Developer and AI Innovation Lead based in Evergreen, Colorado.'
  )

  return <About />
}

export default AboutPage
