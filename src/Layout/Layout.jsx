import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar.jsx"
import './Layouts.css'

const Layout = () => {
  return (
    <div className="layouts">
        <Navbar className="layouts-navbar"/>
        <Outlet className="layouts-outlet"/>
    </div>
  )
}

export default Layout