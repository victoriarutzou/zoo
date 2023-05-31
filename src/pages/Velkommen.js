import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Velkommen() {
  return (
    <div className="onboarding velkommen">
      <h1 className="white">VELKOMMEN!</h1>
      <p className="white space32">Er du ny bruger eller har du allerede en profil?</p>

      <NavLink to="/Lavprofil">
        <button className="square space24">
          <h3>Ny bruger</h3>
        </button>
      </NavLink>

      <NavLink to="/Fejlside">
        <button className="square space24">
          <h3>Login</h3>
        </button>
      </NavLink>
    </div>
  );
}
