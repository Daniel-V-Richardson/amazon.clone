import React from "react";
import AC from "../assets/img/products/ac.jpg";
import Fride from "../assets/img/products/fridge.jpg";
import Microwaves from "../assets/img/products/microwaves.jpg";
import WashingMachines from "../assets/img/products/washingmachine.jpg";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const products = [
  { imgSrc: AC, name: "Air Conditioners" },
  { imgSrc: Fride, name: "Refrigirators" },
  { imgSrc: Microwaves, name: "Microwaves" },
  { imgSrc: WashingMachines, name: "Washing Machines" },
];

const ProductCard = () => {
  return (
    <div className="product-card-container">
      <div className="product-title">
        Appliances for your home | Up to 55% off
      </div>
        <div className="products">
          {products.map((product, index) => (
            <div className="item" key={index}>
              <img src={product.imgSrc} alt="" />
              <p className="product-name">{product.name}</p>
            </div>
          ))}
        </div>
        <Link to='/products' className="see-more">
            See more
        </Link>
      </div>
  );
};

export default ProductCard;
