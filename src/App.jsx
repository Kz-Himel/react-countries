import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

function App() {

  const fetchCountries = fetch('https://openapi.programming-hero.com/api/all').then(res => res.json())

  return(
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Countries fetchCountries = {fetchCountries} />
    </Suspense>
    </>
  )
}

export default App
