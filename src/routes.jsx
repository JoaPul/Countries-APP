import { Navigate, useRoutes } from 'react-router-dom'
import App from './pages/App'
import Country from './components/Country'
import Countries from './components/Countries'
import Search from './components/Search'
import Login from './pages/Login'

const Paths = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/login' replace />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/countries',
      element: <App />,
      children: [
        {
          element: <Countries />,
          index: true
        },
        {
          path: 'country/:name',
          element: <Country />
        },
        {
          path: 'search',
          element: <Search />
        }
      ]
    },
    // TODO hacer esto un componente "page not found"
    {
      path: '/404',
      element: <p className='text-center'>Page not found</p>
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])

  return element
}

export default Paths
