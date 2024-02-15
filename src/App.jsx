import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import Home from "./pages/Home"
import Branches from "./pages/Branches"



function App() {

  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/branches" element={<Branches />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
