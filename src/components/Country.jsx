// import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import useAppContext from '../hooks/useAppContext'
import useGetData from '../hooks/useGetData'

const Country = () => {
  const { name = '' } = useParams()
  const { listCountries, loading, error } = useGetData(name)
  // const { setQuery } = useAppContext()

  // useEffect(() => {
  //   return () => {
  //     setQuery('')
  //   }
  // },[])

  if (error) return <p>{error}</p>
  if (loading) return <p>...Loading</p>

  return (
    // TODO hacer Home un componente propio
    <>
      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <img src={listCountries[0].flags.svg} alt='Bandera' style={{ margin: '10px', height: '200px', width: '300px' }} />
      </div>
      <p style={{ textAlign: 'center' }}>Country common name: {listCountries[0].name.common}</p>
      <p style={{ textAlign: 'center' }}>Country capital name: {listCountries[0].capital}</p>
    </>
  )
}

export default Country
