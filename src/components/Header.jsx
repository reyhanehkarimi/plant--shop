/*eslint-disable*/

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalPrice = useSelector((state) => state.totalPrice);
  const cartItemCount = useSelector((state) => state.items.length);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="img-of-header">
      <nav className="navbar">
        <div className="logo-container">
          <img className="logo-of-web" src="https://aps-plants-website.netlify.app/assets/APSDark-BHi096m8.png" alt="" />
          <Link to="/" className="name-of-web">Simply Natural</Link>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>


        <div className="cart-info">
          <span className="total-price">${totalPrice.toFixed(2)}</span>
          <Link to="/cart" className="cart-icon">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="itemCount">{cartItemCount}</span>
          </Link>
          
          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

      </nav>

      <div className="data-on-header">
        <p className="first-paragraph">Best Quality Plants</p>
        <h1>Amazing Variety <br />Of Plants Starting <br />Just $12</h1>
        <button className="btn-shop">Shop Now</button>
      </div>
    </header>
  );
}

export default Header;
