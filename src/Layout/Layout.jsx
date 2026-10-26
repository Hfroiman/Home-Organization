import { Outlet } from "react-router-dom"

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