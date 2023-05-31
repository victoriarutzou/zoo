import elefant from '../photos/forsideelefant.png'

export default function Loading(){
    return (
        <div className="onboarding loading">
            <div className="logo">
                <h2 className="orange jyllandspark">Jyllands Park</h2>
                <h1 className="orange zoo">Zoo</h1>
            </div>

            
                <img src={elefant} alt="elefant" className="elefant"/>
           
           
            
        </div>
    )
}