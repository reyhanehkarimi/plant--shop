/*eslint-disable*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const totalPrice = useSelector((state) => state.totalPrice);
  const cartItemCount = useSelector((state) => state.items.length);

  return (
    <div className="img-of-header">
      <nav>
        <ul>
        <a className="name-of-web" href="#">Simply Natural</a>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About Us</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
          <div className="cart-info">
            <span style={{ fontSize: "18px" }}>${totalPrice.toFixed(2)}</span>
            <Link to="/cart" className="cart-icon">
              <FontAwesomeIcon icon={faCartShopping} style={{ color: "rgb(252, 95, 95)", width: "20px", height: "20px" }} />
              <span className="itemCount">{cartItemCount}</span>
            </Link>
          </div>
        </ul>
      </nav>
      <div className="data-on-header">
        <p className="first-paragraph">Best Quality Plants</p>
        <h1>Amazing Variety <br />Of Plants Starting <br />Just $12</h1>
        <button className="btn-shop">Shop Now</button>
      </div>
    </div>
  );

  
}

export default Header;
