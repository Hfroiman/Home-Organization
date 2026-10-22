import './home.css'
import HomeHeader from './HomeHeader/HomeHeader.jsx'
import HomeTareas from './HomeTareas/HomeTareas.jsx'
import HomeTareasRecientes from './HomeTareasRecientes/HomeTareasRecientes.jsx'
import HomeProgreso from './HomeProgreso/HomeProgreso.jsx'


const Home = () => {
  return (
    <div className='home-content'>
      <HomeHeader/>
      <HomeTareas />
      <HomeTareasRecientes />
      <HomeProgreso/>
    </div>
  )
}

export default Home