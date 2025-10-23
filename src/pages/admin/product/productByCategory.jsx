import React from 'react';
import './ProductByCategory.css'; 
import skiP1 from '../../../assets/skicategory/skiP1.webp'
import skiP2 from '../../../assets/skicategory/skiP2.webp'
import skiP3 from '../../../assets/skicategory/skip3.webp'
import skivideo from '../../../assets/bg-video/skivideo.mp4'



const dummyProducts = [
  {
    _id: 1,
    name: 'Ski Board',
    image: skiP1,
    description: 'Durable and lightweight ski board for flying.',
    price: 5999,
  },
  {
    _id: 2,
    name: 'Racket',
    image: skiP2,
    description: 'High performance racket for professionals.',
    price: 2999,
  },
  {
    _id: 3,
    name: 'Tennis Bag',
    image:skiP3,
    description: 'Elegant white duffle bag for court essentials.',
    price: 1889,
  },
];

const ProductByCategory = () => {
  return (
    <>
      <div className="video-section">
  <video className="bg-video" autoPlay loop muted>
    <source src={skivideo} type="video/mp4" />
  </video>
  <div className="video-overlay"></div>
      <h2 className="section-title">SKI</h2>

</div>
    <div className="product-category-page">
    <div className="product-grid">
        {dummyProducts.map((product) => (
          <div className="product-card" key={product._id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <div className="product-price">₹{product.price}</div>
          </div>
        ))}
      </div>
      </div>
    </>
    
  );
};

export default ProductByCategory;

