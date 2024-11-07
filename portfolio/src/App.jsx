import { createContext, useState } from 'react'
import AllComponents from './AllComponents'
import './App.css'

export const myContext = createContext()

function App() {

  // const customStyle={
  //   background: 'linear-gradient(90deg, rgba(196,0,255,1) 0%, rgba(94,0,255,1) 100%)'
  // }

  const [dark, setDark] = useState(false)

  return (
    <>
      <myContext.Provider value={{dark,setDark}}>
        <div className={`${dark && "dark"}`}>
          <AllComponents />
        </div>
      </myContext.Provider>
    </>
  )
}

export default App
