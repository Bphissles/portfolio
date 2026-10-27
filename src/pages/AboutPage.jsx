import About from '../components/About'
import useDocumentMeta from '../hooks/useDocumentMeta'

function AboutPage() {
  useDocumentMeta(
    'About',
    'About Ben Hislop — Solutions Architect and hands-on engineer based in Evergreen, Colorado.'
  )

  return <About />
}

export default AboutPage
