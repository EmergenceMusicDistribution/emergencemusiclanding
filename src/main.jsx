import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './i18n.js'
import { HelmetProvider } from 'react-helmet-async'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <Suspense fallback="loading...">
    <App />
    </Suspense>
    </HelmetProvider>
  </StrictMode>,
)
