import { useParams } from 'react-router-dom'
import useFetcher from '../hooks/useFetcher'

const Country = () => {
  const { name = '' } = useParams()
  const { data: country, error } = useFetcher(`https://restcountries.com/v3.1/name/${name}`)

  if (error) return <p>{error}</p>

  return (
    // TODO hacer Home un componente propio
    <>
      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <img src={country[0].flags.svg} alt='Bandera' style={{ margin: '10px', height: '200px', width: '300px' }} />
      </div>
      <p style={{ textAlign: 'center' }}>Country common name: {country[0].name.common}</p>
      <p style={{ textAlign: 'center' }}>Country capital name: {country[0].capital}</p>
    </>
  )
}

export default Country
