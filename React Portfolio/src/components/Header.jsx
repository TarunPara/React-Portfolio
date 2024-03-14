import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Make sure to create this CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Tarun Parajuli
        </NavLink>
      </div>
      <nav className="navigation">
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About Me
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
          Contact
        </NavLink>
        {/* Add more navigation links as needed */}
      </nav>
    </header>
  );
}

export default Header;
