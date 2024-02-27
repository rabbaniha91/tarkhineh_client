import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'
import Home from "./pages/Home"
import Branches from "./pages/Branches"
import Menu from "./pages/Menu"
import ShoppingCart from "./pages/ShoppingCart"
import { useEffect } from "react"

import { useContentProvider } from "./Context/provider"
import { getLoginUser } from "./utils"



function App() {
  const { setIsLogin } = useContentProvider()

  useEffect(() => {
    const userLogin = getLoginUser()
    console.log(userLogin)
    if (userLogin === null || userLogin === false) {
      setIsLogin(false)
    } else if (userLogin === true) {
      setIsLogin(true)
    }
  }, [])

  return (
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
