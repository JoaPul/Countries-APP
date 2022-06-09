import { useRef } from 'react'
import { Link } from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'

// import '../assets/asteroide.png'

const SearchBar = () => {
  const searchRef = useRef()
  const { handleFilterCountries } = useAppContext()

  const handleSubmit = (event) => {
    // !Esto previene de que la pagina se recargue
    event.preventDefault()
    // con esto no dejamos que se ejcute la funcion con solo unos espacios
    const trimValue = searchRef.current.value.trim()
    // con esto impide que se ejecute si no tiene caracteres la busqueda (tambiencon un required en input html se ejecuta lo mismo)
    if (trimValue !== '') {
      handleFilterCountries(trimValue)
    }
    // reseteo del formulario
    event.target.reset()
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'><img src='src/assets/asteroide.png' alt='Mundo' style={{ height: '50px', width: '50px' }} /></Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link active' aria-current='page' to='/countries'>Home</Link>
            </li>
          </ul>
          <form className='d-flex' onSubmit={handleSubmit}>
            <input required ref={searchRef} className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
            <button className='btn btn-secondary' type='submit'>Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default SearchBar
