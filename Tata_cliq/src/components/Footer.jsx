import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Tata Market Place</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Sell with Us</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Affiliates</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>
              {/* <a to="/shopping">Shopping</a> */}
              <Link to="/shopping">Shopping</Link>
            </li>
            <li>
              <a href="#">Offers & Promotions</a>
            </li>
            <li>
              <a href="#">Payments</a>
            </li>
            <li>
              <a href="#">Cancellations</a>
            </li>
            <li>
              <a href="#">Returns & Refunds</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>My Tata CLiQ</h3>
          <ul>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">My Orders</a>
            </li>
            <li>
              <a href="#">My Shopping Bag</a>
            </li>
            <li>
              <a href="#">My Wishlist</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Tata CLiQ Offerings</h3>
          <ul>
            <li>
              <a href="#">Watches for Men</a>
            </li>
            <li>
              <a href="#">Campus Shoes</a>
            </li>
            <li>
              <a href="#">Resbok Shoes</a>
            </li>
            <li>
              <a href="#">Cotton Kurtis</a>
            </li>
            <li>
              <a href="#">Sports Shoes for Men</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
