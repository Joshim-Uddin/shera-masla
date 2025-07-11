import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Routes from './Routes/Routes.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <Routes />
    </AuthProviders>
  </StrictMode>,
)
