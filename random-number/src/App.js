import './App.css'
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState('')
  const [random, setRandom] = useState(0)
  function randomNumber() {
    setNumber(Math.floor(Math.random() * 1000))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Press for a random number!</p>
        <button onClick={randomNumber}>Random Number</button>
        <p>{number}</p>
      </header>
    </div>
  )
}

export default App
