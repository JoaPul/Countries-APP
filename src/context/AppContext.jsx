import { createContext, useState } from 'react'

const AppContext = createContext(null)

// el que comunica a todos los componentes
const ContextProvider = ({ children }) => {

  const [contries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState([])
  const [sms, stSms] = useState({ type: '' })

  const initialValue = {
    setCountries
  }
  return (
    <AppContext.Provider value={initialValue}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, ContextProvider }
