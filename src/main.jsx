import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// styles
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// components
// import App from './pages/App'
// import SearchBar from './components/Navbar'
// Paths
import Paths from './routes'
// Context
import { AuthProvider } from './context/AuthContext'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Paths />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
