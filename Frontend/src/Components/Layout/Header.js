import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-light navbar-light sticky-top">
        <Link className="navbar-brand" to="/">
          <FaReact />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Todolist
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user">
              Create Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/exercises">
              Exercises
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
