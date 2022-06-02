import { Link } from 'react-router-dom'
import useGetData from '../hooks/useGetData'
import useAppContext from '../hooks/useAppContext'

const Countries = () => {
  const { query } = useAppContext()
  const { listCountries, loading, error } = useGetData(query)

  if (error) {
    return (<p>{error}</p>)
  }
  // TODO añadir spiner
  if (loading) {
    return (<p>...Loading</p>)
  }

  return (
    // ToDo poner estilos
    <section className='row py-5 gy-4'>
      {listCountries.map((index, key) => (
        <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
          <Link to={`/country/${index.name.common}`}>
            <article className='card'>
              <img className='card-img-top' src={index.flags.svg} alt={index.name.common} />
              <p>{index.name.common}</p>
            </article>
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Countries
