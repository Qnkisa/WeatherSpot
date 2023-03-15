import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Api from "./Pages/Api"
import {Routes,Route,BrowserRouter as Router,Link} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='/api' element={<Api />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
