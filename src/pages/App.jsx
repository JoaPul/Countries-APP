import '../styles/App.css'
// import Countries from '../components/Countries'
import SearchBar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { AppProvider } from '../context/AppContext'

const App = () => {
  return (
    <AppProvider>
      <SearchBar />
      <div className='App container py-5'>
        {/* {TODO añadir spiner} */}
        <Suspense fallback={<p>...loading</p>}>
          <Outlet />
        </Suspense>
      </div>
    </AppProvider>
  )
}

export default App
