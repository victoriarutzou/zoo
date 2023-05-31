import { NavLink } from 'react-router-dom';

export default function Lavprofil(){
    return (
        <div className="onboarding lavprofil">
            <div>
                <h1 className="orange">Lav en profil</h1>
                <p className="orange space32">Opret en profil for at tilslutte armbåndet.</p>
                <form>
                    <label>Email:</label>
                    <input type="text" required placeholder="jesper@gmail.com"/>
                    <label>Password</label>
                    <input type="text" required  placeholder="mindst 6 tegn"/>
                </form>
            </div>

            <div className="btnandhelp">
            <NavLink to="/Scanarmbaand">
                <button className="orangebtn space16">Opret profil</button>
            </NavLink>
            <p className="orange">Hjælp?</p>
            </div>
            
        
        
        </div>
        
    )
}