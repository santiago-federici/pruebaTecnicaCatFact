import { useEffect, useState } from 'react'
import { findRandomImage } from '../services/images'

export function useImage({ fact }) {
  const [image, setImage] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    findRandomImage(firstWord).then(newImage => setImage(newImage))
  }, [fact])

  return { image }
}
