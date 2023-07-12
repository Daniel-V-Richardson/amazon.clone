import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../assets/img/banner.jpg";
import Banner1 from "../assets/img/banner1.jpg";
import Banner2 from "../assets/img/banner2.jpg";
import Banner3 from "../assets/img/banner3.jpg";
import Banner4 from "../assets/img/banner4.jpg";
import Banner5 from "../assets/img/banner5.jpg";
import "./HomePage.css";
import SimpleImageSlider from "react-simple-image-slider";
import ProductCard from "../components/ProductCard";
import ProductCardHorizontal from "../components/ProductCardHorizontal";

const banner_images = [
  { url: Banner },
  { url: Banner1 },
  { url: Banner2 },
  { url: Banner3 },
  { url: Banner4 },
  { url: Banner5 },
];

const HomePage = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-main-container">
        <div className="banner">
          <SimpleImageSlider
            width={1520}
            height={604}
            images={banner_images}
            showNavs={true}
            slideDuration={2}
            autoPlay={true}
            useGPURender={true}
          />
        </div>
        <div className="home-content-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCardHorizontal />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCardHorizontal />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCardHorizontal />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
