import { useEffect, useState } from 'react'
import { findRandomFact } from '../services/facts'

export function useFact() {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    findRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
