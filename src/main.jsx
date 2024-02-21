import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from "./Context/provider"
import App from './App.jsx'
import './index.css'
import { register } from "swiper/element/bundle"
register()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
