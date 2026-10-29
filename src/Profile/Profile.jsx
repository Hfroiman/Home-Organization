import './Profile.css'

const Profile = () => {
    return (
        <div className='profile-body'>
            <section className='profile-header'>
                <section className='pr-header-picture'><img src="../public/iniciosesion.png" alt="" className='pr-picture' /></section>
                <form className='pr-header-info'>
                    <label for="exampleFormControlInput" class="form-label mb-2">APELLIDO</label>
                    <input type="email" class="form-control" id="exampleFormControlInput" placeholder="name@example.com"></input>


                    <label for="exampleFormControlInput" class="form-label mb-2">NOMBRE</label>
                    <input type="email" class="form-control" id="exampleFormControlInput" placeholder="name@example.com"></input>

                    <label for="exampleFormControlInput" class="form-label mb-2">EDAD</label>
                    <input type="email" class="form-control" id="exampleFormControlInput" placeholder="name@example.com"></input>
                </form>
            </section>

            <section className='profile-info-adiccional'>
                <div className="form-field">
                    <input type="checkbox" id="checkLabel" className="check" />
                    <label for="checkLabel"> Trabajas</label>
                </div>

                <div className='range-hs'>
                    <label for="range2" className="form-label">Rango de horas el cual te encontras fuera del hogar</label>
                    <div className="form-range">
                        <input type="range" class="form-range-input" min="0" max="20" value="9" id="rangeBubble"></input>
                    </div>
                </div>

                <div className='range-hs'>
                    <label for="range2" className="form-label">Horas libre en casa</label>
                    <div className="form-range" data-bs-bubble>
                        <input type="range" class="form-range-input" min="0" max="20" value="6" id="rangeBubble"></input>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default Profile