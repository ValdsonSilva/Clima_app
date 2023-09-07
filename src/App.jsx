import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompPai from './components/CompPai'
import Fundo from './components/Fundo'
import BoxData from './components/BoxData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <CompPai>

        <Fundo/>
        <BoxData/>

      </CompPai>
    
    </>  
  )
}

export default App
