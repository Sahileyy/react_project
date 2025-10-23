import React from 'react';
import '../home/home.css';

import skicat1 from '../../assets/ski/skicat1.jpg';
import prot from '../../assets/ski/prot.jpg';
import shoe1 from '../../assets/ski/shoe1.jpg';
import tennis1 from '../../assets/ski/tennis1.jpg';
import asses1 from '../../assets/ski/asses1.jpg';
import skip1 from '../../assets/skicategory/skiP1.webp';
import racket1 from '../../assets/tenniscategory/tenniscat1.webp';
import bag1 from '../../assets/tenniscategory/tenniscat3.webp';
import banner1 from '../../assets/banners/banner 6.avif';

import video2 from '../../assets/bg-video/video2.mp4';
import Navbar from '../../components/navbar';

const HomePage = () => {
  const categories = [
    { name: 'SKI', img: skicat1 },
    { name: 'PROTECTION', img: prot },
    { name: 'SHOES', img: shoe1 },
    { name: 'TENNIS', img: tennis1 },
    { name: 'ACCESSORIES', img: asses1 },
  ];

  const products = [
    {
      _id: 1,
      name: 'Ski Board',
      image: skip1,
      description: 'Durable and lightweight ski board for flying.',
      price: 5999,
    },
    {
      _id: 2,
      name: 'Racket',
      image: racket1,
      description: 'For high performance.',
      price: 2999,
    },
    {
      _id: 3,
      name: 'Duffle Bag',
      image: bag1,
      description: 'Elegant white perfect for grass-court.',
      price: 1889,
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO VIDEO SECTION */}
      <div>
      <div className="video-section">
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h1 className="home-title">ALL SPORTS</h1>

        <div className="category-grid overlay">
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
      </div>
      
      {/* FEATURED PRODUCTS SECTION */}
      <section className="product-section">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product._id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">${product.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER SECTION */}
      <div className="banner">
        <img src={banner1} alt="banner" />
      </div>
    </>
  );
};

export default HomePage;
