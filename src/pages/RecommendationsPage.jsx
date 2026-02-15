import Recommendations from '../components/Recommendations'
import useDocumentMeta from '../hooks/useDocumentMeta'

function RecommendationsPage() {
  useDocumentMeta(
    'Letters of Recommendation',
    'Professional letters of recommendation for Ben Hislop from colleagues and managers.'
  )

  return <Recommendations />
}

export default RecommendationsPage
