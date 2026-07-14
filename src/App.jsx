import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Login/Login.jsx"
import Navbar from "./Navbar/Navbar.jsx"
import Home from "./Home/Home.jsx"

const App = () => {
  return (
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path="/" element={<Home/>} />
      <Route path="" element={} />
      <Route path="" element={} />
    </Routes>
  </BrowserRouter>
  )
}

export default App