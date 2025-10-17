

import React from 'react'
import '../home/home.css'

import shoe_category from "../../assets/Category_shoes.avif"
import tshirt_category from "../../assets/Category_tshirts.avif"
import track_category from "../../assets/Category_shorts.avif"
import W_shoe_category from "../../assets/Category_W_shoes.avif"
import w_top_category from "../../assets/Category_w_tops.avif"
import w_bottom_category from "../../assets/Category_w_bottoms.avif"

const HomePage = () => {
  const categories = [
    { name: "Men's Shoes", img: shoe_category },
    { name: "Men's T-Shirts", img: tshirt_category },
    { name: "Men's Tracks", img: track_category },
    { name: "Women's Shoes", img: W_shoe_category },
    { name: "Women's Tops", img: w_top_category },
    { name: "Women's Bottoms", img: w_bottom_category },
  ];

  return ( 
    <div className="home">

      

      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.name}>
            <div
              className="category-image"
              style={{ backgroundImage: `url(${cat.img})` }}
            ></div>
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;