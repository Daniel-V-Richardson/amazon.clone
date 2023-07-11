import React from "react";
import "./Navbar2.css";
import Ad from "../assets/img/ad.jpg";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar2() {
  return (
    <div className="second-nav-container">
      <div className="first">
        <GiHamburgerMenu size={ 30} color="white" className="menu-icon" />
        <p>All</p>
      </div>
      <ul className="list">
        <li>Amazon miniTV</li>
        <li>Sell</li>
        <li>Best Sellers</li>
        <li>Today's Deals</li>
        <li>Mobiles</li>
        <li>New Releases</li>
        <li>Customer Service</li>
        <li>Prime</li>
        <li>Electronics</li>
        <li>Home & Kitchen</li>
        <li>Gift Ideas</li>
        <li>Amazon Pay</li>
        <li>Fashion</li>
        <li>Computers</li>
        <li>Books</li>
      </ul>
      <img src={Ad} alt="" />
    </div>
  );
}

export default Navbar2;
