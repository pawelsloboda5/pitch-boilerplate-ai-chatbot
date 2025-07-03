import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import fonts
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/bitter/400.css'
import '@fontsource/bitter/500.css'
import '@fontsource/bitter/600.css'
import '@fontsource/bitter/700.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
