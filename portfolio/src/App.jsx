import { createContext, useState } from 'react'
import AllComponents from './AllComponents'
import './App.css'

export const myContext = createContext()

function App() {

  const [dark, setDark] = useState(false)

  return (
    <div className='oppo' >
      <myContext.Provider value={{dark,setDark}}>
        <div className={`${dark && "dark "}`}>
          <AllComponents />
        </div>
      </myContext.Provider>
    </div>
  )
}

export default App
