import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Link } from "react-router-dom";

// import state from './usestate.jsx'
// import State from './usestate.jsx'
// import App from './App.jsx'
// import List from './list.jsx'
// import Hooks from './hooks.jsx'

// import App1 from './App1.jsx'

import Appparam from './App_param.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <List /> */}
    {/* <Hooks /> */}
    <Appparam />
  </StrictMode>,
)
