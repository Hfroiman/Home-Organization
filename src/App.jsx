import  { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./Login/Login.jsx"
import Navbar from "./Navbar/Navbar.jsx"
import Home from "./Home/Home.jsx"
import Layout from './Layout/Layout.jsx'
import Homework from './Homework/Homework.jsx'
import Members from './Members/Members.jsx'

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      {/*login sin navbar */}
      <Route path="/Login" element={<Login/>} />

      {/*rutas con navbar */}
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>} />
        <Route path='/Homework' element={<Homework/>}/>
        <Route path='/Members' element={<Members/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App