import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompPai from './components/CompPai'
import Fundo from './components/Fundo'
import BoxData from './components/BoxData'
import { QueryClient, QueryClientProvider } from 'react-query'

// temos que seguir esse padrão para usar o useQuery no nosso App

// const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <h1>Clima de Moscow</h1>
        <CompPai>
          <Fundo/>
          <BoxData/>
        </CompPai>
    </>  
  )
}

export default App
