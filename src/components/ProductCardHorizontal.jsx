import React from "react";
import "./ProductCardHorizontal.css";
import { Link } from "react-router-dom";
import Earpods from "../assets/img/products/earpods.jpg";
import Watch from "../assets/img/products/watch.jpg";
import FormalShoe from "../assets/img/products/formalshoe.jpg";
import CasualShoe from "../assets/img/products/sportsshoe.jpg";
import Cycle from "../assets/img/products/cycle.jpg";
import Ladder from "../assets/img/products/ladders.jpg";
import Sciencekit from "../assets/img/products/sciencekit.jpg";

const products = [
  { imgSrc: Earpods, name: "Oppo Enco Air 3 Pro" },
  { imgSrc: Watch, name: "Best Selling Smart watches from Noice" },
  { imgSrc: FormalShoe, name: "Bata Shoes for Men" },
  { imgSrc: CasualShoe, name: "Deals on Red Tape" },
  { imgSrc: Cycle, name: "Cycles for Teens" },
  { imgSrc: Ladder, name: "Top Selling Ladders" },
  { imgSrc: Sciencekit, name: "Einstein Box Science Experiment Kit" },
];

const ProductCardHorizontal = () => {
  return (
    <div className="product-card-horizontal-container">
      <div className="heading">
        <div className="product-title">Today's Deals</div>
        <Link to="/" className="see-all-details">
          See all details
        </Link>
      </div>
      <div className="horizontal-products">
        {products.map((product, index) => (
          <div className="horizontal-item" key={index}>
            <img src={product.imgSrc} alt="" />
            <p className="product-name">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardHorizontal;
