import './home.css'
import Navbar from "../Navbar/Navbar.jsx"

const Home = () => {
  return (
    <div className='home-content'>
      <HomeHeader/>

      <HomeTareas/>

      <HomeTareasRecientes/>

      <HomeProgreso/>
    </div>
  )
}

export default Home