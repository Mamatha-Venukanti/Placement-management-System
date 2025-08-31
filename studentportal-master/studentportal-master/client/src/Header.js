import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar bg-dark justify-content-center" style={{ backgroundColor: 'grey' }}>
      <li className="nav-link ">
        <NavLink to="/dashboard" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'green' : 'white' })}>
          Companies Hub
        </NavLink>
      </li>
      <li className="nav-link ">
        <NavLink to="/ComplaintForm" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'green' : 'white' })}>
          Questions?
        </NavLink>
      </li>
      <li className="nav-link ">
        <NavLink to="/selectedcompanies" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'green' : 'white' })}>
          Preparation Kit
        </NavLink>
      </li>
      <NavDropdown title="PreparationKit" id="basic-nav-dropdown" className="nav-link" >
        <NavDropdown.Item href='./dsa'>DSA</NavDropdown.Item>
        <NavDropdown.Item href='./Dbms'>DBMS</NavDropdown.Item>
        <NavDropdown.Item href="./Os">OS</NavDropdown.Item>
      </NavDropdown>
      <li className="nav-link">
        <NavLink to="/login" className="nav-link" onClick={() => localStorage.clear()} style={({ isActive }) => ({ color: isActive ? 'green' : 'white' })}>
          Logout
        </NavLink>
      </li>
    </nav>
  );
};

export default Header;
