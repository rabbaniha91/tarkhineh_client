import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import Home from "./pages/Home"
import Branches from "./pages/Branches"
import Menu from "./pages/Menu"
import ShoppingCart from "./pages/ShoppingCart"



function App() {

  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<ShoppingCart />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
