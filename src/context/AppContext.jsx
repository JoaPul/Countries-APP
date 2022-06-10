import { createContext, useState } from 'react'

const AppContext = createContext(null)

// el que comunica a todos los componentes
const AppProvider = ({ children }) => {
  // Estado inicial de todos los paises
  const [contries, setCountries] = useState([])
  // Estado de los paises filtrados con los que hizo match
  const [filterCountries, setFilterCountries] = useState([])
  // Mensaje de error si no encontro ningun match con la busqueda
  const [sms, setSms] = useState({ type: '' })

  const handleFilterCountries = (value) => {
    const filtered = contries.filter((country) => {
      return country.name.common.toLowerCase().match(value.toLowerCase())
    })

    if (filtered.length === 0) {
      setFilterCountries([])
      setSms({
        type: 'error',
        message: 'Search not found'
      })
    } else {
      setFilterCountries(filtered)
      setSms({
        type: 'success',
        message: 'Countries found'
      })
    }
  }

  const initialValue = {
    setCountries,
    handleFilterCountries,
    filterCountries,
    sms
  }
  return (
    <AppContext.Provider value={initialValue}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
