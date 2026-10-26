import './Members.css';
import MembersCards from './MembersCards/MembersCards.jsx';
import MembersRanking from './MembersRanking/MembersRanking.jsx';
import MemberRecompensa from './MembersRecompensa/MemberRecompensa.jsx'

const Members = () => {
  return (
    <div className='members'>
      <section className='members-header'>
        <h2>Miembros de la familia</h2>
        <button>Ver ranking</button>
      </section>

      <section className='members-cards'>
        <MembersCards />
      </section>

      <section className='members-ranking-recompensa'>
        <MembersRanking />
        <MemberRecompensa/>
      </section>
    </div>
  )
}

export default Members