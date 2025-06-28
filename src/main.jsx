import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Comp,GeneralInfo} from './components/Addgen.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Comp />
  </StrictMode>,
)
