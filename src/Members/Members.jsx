import './Members.css'

const Members = () => {
  return (
    <div className='members'>
      <section className='members-header'>
        <h2>Miembros de la familia</h2>
        <button>Ver ranking</button>
      </section>
      <MembersCards />
      <MembersRanking />
    </div>
  )
}

export default Members