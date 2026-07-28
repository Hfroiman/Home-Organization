import './Members.css'

const Members = () => {
  return (
    <div className='members'>
      <section className='members-header'>
        <h2>Miembros de la familia</h2>
        <button>Ver ranking</button>
      </section>
      <section className='members-group-cards'>
        <div className='members-card'>
          <div className='card-image'>
            <img className='home-img-logo' src="https://w7.pngwing.com/pngs/648/943/png-transparent-instagram-logo-logo-instagram-computer-icons-camera-instagram-logo-text-trademark-magenta-thumbnail.png" alt="" />
          </div>
          <div className='card-name'>
            <p>Laura</p>
          </div>
          <div className='card-points'>
            <p>320 Points</p>
          </div>
        </div>
      </section>
      <section className='members-ranking'>
        <div className='member-points'>
          <p>1</p>
          <img src="" alt="" />
          <p>Laura</p>
          <p>320 pts</p>
        </div>
      </section>
    </div>
  )
}

export default Members