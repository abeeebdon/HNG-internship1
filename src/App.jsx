import { useState } from 'react'
import Header from './components/Header'
import Step1 from './components/Step1'

const App = () => {
  const [stepNumber, setStepNumber] = useState(1)
  return (
    <main className="h-screen py-6 px-6 lg:px-10 ">
      <Header />
      <Step1 />
    </main>
  )
}

export default App
