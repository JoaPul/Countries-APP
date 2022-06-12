import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'
import useFetcher from '../hooks/useFetcher'

const Countries = () => {
  const { setCountries } = useAppContext()
  const { data: contries, error } = useFetcher('https://restcountries.com/v3.1/all')

  if (error) {
    return (<p>{error.message}</p>)
  }

  useEffect(() => {
    setCountries(contries)
  }, [])

  return (
    // ToDo poner estilos
    <section className='row gy-4'>
      {contries.map((index, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
          <Link to={`country/${index.name.common}`} style={{ height: '100%' }}>
            <article className='card' style={{ height: 'inherit' }}>
              <img loading='lazy' className='card-img-top' style={{ height: '80%', objectFit: 'cover' }} src={index.flags.svg} alt={index.name.common} />
              <p>{index.name.common}</p>
            </article>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Countries
