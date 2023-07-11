import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import IndiaFlag from "../assets/img/indiaflag.png";
import "./Navbar1.css";
import {FiShoppingCart} from "react-icons/fi"

function Navbar1() {
  return (
    <div className="main-container">
      <Link to="/" className="logo-container">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="location-container">
        <CiLocationOn size={32} color="white" className="location-icon" />
        <div className="address-container">
          <p className="address-text1">Hello</p>
          <p className="address-text2">Select Your address</p>
        </div>
      </div>
      <div className="search-container">
        <select className="select-box" name="categories" id="">
          <option value="All">All</option>
          <option value="Appliances">Appliances</option>
          <option value="Books">Books</option>
          <option value="Electronics">Electronics</option>
        </select>
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="search-input"
        />
        <Link to="/" className="search-btn">
          <BsSearch size={31} color="black" className="search-icon" />
        </Link>
      </div>
      <div className="lang-container">
        <img src={IndiaFlag} alt="flag" />
        <p>EN</p>
      </div>
      <Link to="/" className="returns-container">
        <p>
          Returns <b>& Orders</b>
        </p>
      </Link>
      <div className="cart">
      <FiShoppingCart color="white" size={32} className="cart-icon"/>
      <p className="cart-text">Cart</p>
      </div>
    </div>
  );
}

export default Navbar1;
