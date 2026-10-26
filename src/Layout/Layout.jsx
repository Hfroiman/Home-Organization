import { Outlet } from "react-router-dom"
import './Layouts.css'
import Navbar from '../Navbar/Navbar.jsx';

const Layout = () => {
  return (
    <div className="layouts">
        <Navbar className="layouts-navbar"/>
        <Outlet className="layouts-outlet"/>
    </div>
  )
}

export default Layout