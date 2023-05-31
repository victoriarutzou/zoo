import { NavLink } from 'react-router-dom';
import elefanticon from '../photos/elefanticon.svg'
import addicon from '../photos/addicon-01.svg'


export default function Aktivearmbaand(){
  
    return (
        <div className="aktivearmbaand onboarding">
            <h2 className="orange space32">Tilføj flere armbånd?</h2>
            <p className="beige space16">Aktive armbånd</p>
            <button className="square space24">
                <img src={elefanticon} className="elefanticon" alt="elefantikon"></img>
                <p> Navn</p>
            </button>

            <NavLink to="/Scanarmbaand">
                <button className="square space24">
                    <img src={addicon} className="addicon" alt="tilføj ikon"></img>
                    <p>Tilføj armbånd</p>
                </button>
            </NavLink>


            <div className="btnandhelp">
            <NavLink to="/Armbaand">
                <button className="orangebtn space16">Færdig</button>
            </NavLink>
            
            
            <p className="orange">Hjælp?</p>
            </div>
        </div> 
    )
}