import React from "react";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
        <NavLink to="/">WEB CONSEIL</NavLink>
        <div className="topbar-links">
          <NavLink to="/a-propos" className="topbar-links__link">A propos</NavLink>
          <NavLink to="/a-propos" className="topbar-links__link">Projets</NavLink>
          <NavLink to="/a-propos" className="topbar-links__link">Services</NavLink>
          <NavLink to="/a-propos" className="topbar-links__link">Forfaits et tarifs</NavLink>
          <NavLink to="/a-propos" className="topbar-links__link">Outils et conseils</NavLink>
          <NavLink to="/a-propos" className="topbar-links__link">Contact</NavLink>
          <div className="topbar-links-login">
            <NavLink to="/a-propos" className="topbar-links-login__link">Connexion</NavLink>
          </div>
        </div>
      </div>
  );
};

export default Topbar;