import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import Home from "./pages/Home"
import Branches from "./pages/Branches"
import Menu from "./pages/Menu"



function App() {

  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
