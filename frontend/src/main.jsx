import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobleProvider } from './context/globleContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobleProvider>
    <App />
    </GlobleProvider>
  </StrictMode>,
)
