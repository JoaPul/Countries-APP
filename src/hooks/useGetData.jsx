import { useState, useEffect } from 'react'
import { getData } from '../services'

const useGetData = (name = '') => {
  const [listCountries, setListCountries] = useState(name ? [] : {})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const setData = async () => {
      try {
        const { data: countries } = await getData(name)
        // console.log(data)
        setListCountries(countries)
      } catch ({ message }) {
        setError(message)
      } finally {
        setLoading(false)
      }
    }
    setData()
  }, [name])

  return { listCountries, loading, error }
}

export default useGetData
