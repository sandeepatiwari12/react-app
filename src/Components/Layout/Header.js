import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top">
        <Link className="navbar-brand" to="/">
          <img
            src="https://moneytor.in/resources/img/public/moneytor-icon.svg"
            alt="Logo"
          />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
const headerStyle = {
  padding: '10px',
  marginBottom: '10px'
};
