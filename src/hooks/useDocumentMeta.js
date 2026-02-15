import { useEffect } from 'react'

const BASE_TITLE = 'Ben Hislop'

export default function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE

    let meta = document.querySelector('meta[name="description"]')
    if (description) {
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }
  }, [title, description])
}
