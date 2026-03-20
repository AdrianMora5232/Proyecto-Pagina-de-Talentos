import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/Styles/Global.css"
import Routing from './Routes/Routing'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing/>
  </StrictMode>,
)
