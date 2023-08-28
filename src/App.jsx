import { useFact } from './hooks/useFact'
import { useImage } from './hooks/useImage'
import { catApiUrl } from './services/images'

import './App.css'

function App() {
  const { fact, refreshFact } = useFact()
  const { image } = useImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <div>
        {fact && <p>{fact}</p>}
        {image && <img src={`${catApiUrl}${image}`} alt='' />}
      </div>
      <button onClick={handleClick}>Refresh fact</button>
    </main>
  )
}

export default App
