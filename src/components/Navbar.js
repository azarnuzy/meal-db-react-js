import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <h1 className="navbar__title">Foodima</h1>
      <ul className="navbar__links">
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Latest</li>
        <li className="navbar__item">Popular</li>
        <li className="navbar__item">Country</li>
        <li className="navbar__item search open">
          <input type="text" className="searchInput" />
        </li>
      </ul>
    </nav>
  );
}
