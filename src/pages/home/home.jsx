// import React, { useEffect, useState } from "react";
// import Navbar from "../../components/Navbar.jsx";
// import { useNavigate } from "react-router-dom";
// import HomeProductCards from '../../components/HomeProductCards.jsx'
// import HighlightCards from "../../components/Highlightcards.jsx";
// // Images
// import skicat1 from "../../assets/ski/skicat1.jpg";
// import prot from "../../assets/ski/prot.jpg";
// import shoe1 from "../../assets/ski/shoe1.jpg";
// import tennis1 from "../../assets/ski/tennis1.jpg";
// import asses1 from "../../assets/ski/asses1.jpg";
// import main1 from '../../assets/main1.jpg'


// import banner1 from "../../assets/banners/banner 6.avif";
// import banner2 from "../../assets/banners/banner 2.avif";
// import video2 from "../../assets/bg-video/video2.mp4";
// import ProductCard2 from "../../components/ProductCard2.jsx";
// import FooterSection from "../../components/Footer.jsx";
// import api from "../../axios.jsx";

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [products,setProducts] = useState([])
// console.log("hi");

//   useEffect(()=>{
//     async function fetchProducts() {
//       try{
//         const res = await api.get('/public/product');
//         setProducts(res.data);
//         console.log(res.data);
        
//       }
//       catch (err){
//         console.log("error fetching products",err);
//         res.json({message:"error fetching products"})
        
//       }
      
//     }
//     fetchProducts()
//   },[])


//   const categories = [
//     { id: "69033de0bbffeb69e60c9e56", name: "SKI", img: skicat1 },
//     { id: "68fa01e575cfd5dfea2d4a3b", name: "PROTECTION", img: prot },
//     { id: "68f8ee44791b73aebb80ac6a", name: "SHOES", img: shoe1 },
//     { id: "68f8eb27791b73aebb80ac33", name: "TENNIS", img: tennis1 },
//     { id: "68f8ec0f791b73aebb80ac37", name: "ACCESSORIES", img: asses1 },
//   ];

//   const handleCatClick = (category) => {
//     navigate(`/public/product/category/${category.id}`, {
//       state: { categoryName: category.name },
//     });
//   };

//   return (
//     <>
//       <Navbar />
     
// <section className="relative w-full h-[100vh] flex items-center justify-center bg-gray-900">
  
//   <img
//     src={main1}
//     className="absolute inset-0 w-full h-full object-cover"
//   />


//   <div className="absolute inset-0 bg-black/50"></div>

  
//   <div className="relative z-10 text-center text-white px-6 mt-20">
//     <h1 className="opacity-69 text-4xl md:text-6xl font-extrabold mb-4 tracking-wide">
//       Upgrade Your Sports Gear
//     </h1>
//     <p className="text-lg md:text-xl mb-8 text-gray-200 opacity-60">
//       Discover the latest collection of sportswear and accessories.
//     </p>
//     <button
//       onClick={() => navigate("/public/product")}
//       className="px-2 py-1 bg-white hover:bg-slate-200 text-black  text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
//     >
//       Shop Now
//     </button>
//   </div>
// </section>
//  <img
//             src={banner1}
//             alt="banner"
//             className="w-full object-cover rounded-none "
//           />
//           <HighlightCards/>

//       <div className="flex flex-col gap-16 w-full h-full bg-gray-50">
//         {/* Hero Video Section */}
//         <div className="relative w-full h-[90vh] overflow-hidden">
//           <video
//             className="absolute inset-0 w-full h-[100vh] object-cover"
//             autoPlay
//             loop
//             muted
//             playsInline
//           >
//             <source src={video2} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
//             <h1 className="text-5xl md:text-7xl text-white tracking-widest drop-shadow-lg font-extrabold font-mono">
//               NEW SPORTS
//             </h1>

//             {/* Categories Grid */}
//             <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-[90%] max-w-6xl align-bottom">
//               {categories.map((cat) => (
//                 <div
//                   key={cat.id}
//                   onClick={() => handleCatClick(cat)}
//                   className="flex flex-col items-center text-white cursor-pointer transition-transform duration-300 hover:scale-105"
//                 >
//                   <div
//                     className="w-28 h-28 md:w-36 md:h-36 rounded-md bg-cover bg-center shadow-lg"
//                     style={{ backgroundImage: `url(${cat.img})` }}
//                   ></div>
//                   <div className="mt-3 text-lg font-semibold tracking-wide">
//                     {cat.name}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Featured Products */}
//         <section className="w-full px-6 md:px-12 lg:px-20 py-10">
//           <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
//             Featured Products
//           </h2>
//           <HomeProductCards products={products} />
    
//         </section>
//               <img
//             src={banner2}
//             alt="banner"
//             className="w-full object-cover rounded-none "
//           />
        
//         <div className="w-full  ">
         
//              <ProductCard2 products={products}/>
//         </div>
//         <FooterSection/>
//       </div>
//     </>
//   );
// };

// export default HomePage;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import HomeProductCards from "../../components/HomeProductCards.jsx";
import HighlightCards from "../../components/Highlightcards.jsx";
import ProductCard2 from "../../components/ProductCard2.jsx";
import FooterSection from "../../components/Footer.jsx";
import api from "../../axios.jsx";

// Images
import skicat1 from "../../assets/ski/skicat1.jpg";
import prot from "../../assets/ski/prot.jpg";
import shoe1 from "../../assets/ski/shoe1.jpg";
import tennis1 from "../../assets/ski/tennis1.jpg";
import asses1 from "../../assets/ski/asses1.jpg";
import main1 from "../../assets/main1.jpg";
import banner1 from "../../assets/banners/banner 6.avif";
import banner2 from "../../assets/banners/banner 2.avif";
import video2 from "../../assets/bg-video/video2.mp4";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await api.get("/public/product");
        setProducts(res.data);
      } catch (err) {
        console.log("error fetching products", err);
      }
    }
    fetchProducts();
  }, []);

  const categories = [
    { id: "69033de0bbffeb69e60c9e56", name: "SKI", img: skicat1 },
    { id: "68fa01e575cfd5dfea2d4a3b", name: "PROTECTION", img: prot },
    { id: "68f8ee44791b73aebb80ac6a", name: "SHOES", img: shoe1 },
    { id: "68f8eb27791b73aebb80ac33", name: "TENNIS", img: tennis1 },
    { id: "68f8ec0f791b73aebb80ac37", name: "ACCESSORIES", img: asses1 },
  ];

  const handleCatClick = (category) => {
    navigate(`/public/product/category/${category.id}`, {
      state: { categoryName: category.name },
    });
  };

  // Smooth scroll handler
  const scrollToProducts = () => {
    const section = document.getElementById("products-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full h-[90vh] flex items-center justify-center bg-gray-900"
      >
        <img
          src={main1}
          className="absolute inset-0 w-full h-full object-cover"
          alt="main-banner"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-wide"
          >
            Upgrade Your Sports Gear
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl mb-6 text-gray-200"
          >
            Discover the latest collection of sportswear and accessories.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProducts}
            className="px-5 py-2 sm:px-8 sm:py-3 bg-white hover:bg-gray-200 text-black text-base sm:text-lg font-semibold transition-all duration-300 shadow-lg rounded-md"
          >
            Shop Now
          </motion.button>
        </div>
      </motion.section>

      {/* Banner */}
      <img
        src={banner1}
        alt="banner"
        className="w-full object-cover rounded-none"
      />

      {/* Highlight Cards */}
      <HighlightCards />

      {/* CATEGORY SECTION */}
      <section className="relative w-full h-[80vh] sm:h-[100vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video2} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=" pt-20 text-3xl sm:text-5xl md:text-7xl text-white tracking-widest drop-shadow-lg font-extrabold font-mono mb-10"
          >
            NEW SPORTS
          </motion.h1>

          <div className="block md:hidden w-[90%] max-w-6xl">
            <div
              className="
                overflow-y-scroll
                max-h-[70vh]
                snap-y snap-mandatory
                scrollbar-hide
                flex flex-col gap-6
              "
            >
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  onClick={() => handleCatClick(cat)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="snap-start flex flex-col items-center justify-center min-h-[60vh] bg-transparent"
                >
                  <div
                    className="w-44 h-44 rounded-md bg-cover bg-center shadow-2xl"
                    style={{ backgroundImage: `url(${cat.img})` }}
                  />
                  <div className="mt-4 text-xl font-semibold text-white tracking-wide">
                    {cat.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

      
          <div
            className="hidden md:grid mt-12 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-[90%] max-w-6xl align-bottom"
          >
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => handleCatClick(cat)}
                className="flex flex-col items-center text-white cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-md bg-cover bg-center shadow-lg"
                  style={{ backgroundImage: `url(${cat.img})` }}
                ></div>
                <div className="mt-3 text-sm sm:text-base md:text-lg font-semibold tracking-wide">
                  {cat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <motion.section
        id="products-section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-10 bg-gray-50"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 text-gray-800">
          Featured Products
        </h2>
        <HomeProductCards products={products} />
      </motion.section>

      {/* Banner 2 */}
      <img
        src={banner2}
        alt="banner2"
        className="w-full object-cover rounded-none"
      />

      {/* PRODUCT LIST 2 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <ProductCard2 products={products} />
      </motion.div>

      {/* FOOTER */}
      <FooterSection />
    </>
  );
};

export default HomePage;
