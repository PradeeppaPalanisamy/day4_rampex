import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Link } from "react-router-dom";

import state from './usestate.jsx'
import State from './usestate.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
