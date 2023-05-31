import { useState } from 'react';
import { NavLink } from 'react-router-dom';




export default function Navn(){
    const [name, setname] = useState ('');

    return (
        <div className="onboarding navn">
            <h2 className="orange">Hvem har armbåndet på?</h2>
            <p className="orange space32">Skriv navnet på barnet, der bærer armbåndet.</p>


            <form>
                <label>Navn</label>
                <input 
                type="text" 
                required 
                value={name}
                onChange={(e)=> setname(e.target.value)}
                placeholder="F.eks. Laura"/>
            </form>

            <div className="btnandhelp">
            <NavLink to="/Aktivearmbaand">
                <button className="orangebtn space16">Tilføj Armbånd</button>
            </NavLink>
            <p className="orange">Hjælp?</p>
            </div>

            <p> {name} </p>
        </div>
    )
}