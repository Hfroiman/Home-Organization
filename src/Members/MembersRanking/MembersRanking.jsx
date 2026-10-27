import './memberranking.css'

const MembersRanking = () => {
  return (
    <section className='members-ranking'>
      <div className='member-points'>
        <div>
          <p>1</p>
        </div>
        <div>
          <img src="dd" alt="LOGUITO" />
        </div>
        <div>
          <p>Laura</p>
        </div>
        <div className="form-range">
          <input type="range" className="form-range-input" id="range1"></input>
        </div>
        <div>
          <p>320 pts</p>
        </div>
      </div>
    </section>
  )
}

export default MembersRanking