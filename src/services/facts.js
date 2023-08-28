const factApiUrl = 'https://catfact.ninja/fact'

export const findRandomFact = async () => {
  const res = await fetch(factApiUrl)
  const data = await res.json()
  const { fact } = data
  return fact
}
