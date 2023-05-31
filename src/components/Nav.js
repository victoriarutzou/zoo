import { NavLink } from "react-router-dom";

export default function Nav(){
    return (
        <nav className="globalnavigation">
            <NavLink to="/">Forside</NavLink>
            <NavLink to="/kort">Kort</NavLink>
            <NavLink to="/billet">Billet</NavLink>
            <NavLink to="/underholdning">Underholdning</NavLink>
        </nav>
    )
}