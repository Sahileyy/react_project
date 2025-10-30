import React from "react";
import insta from '../assets/insta.svg'
import Facebook from '../assets/facebook.svg'
const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-sm">
       
        <div>
          <h3 className="text-white font-semibold mb-2">About Us</h3>
          <p className="text-gray-400 leading-relaxed align-middle">
            We’re dedicated to bringing you the best quality and stylish products 
            at unbeatable prices. Shop smart, shop in style!
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-white">Home</a></li>

            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-2">Contact Us</h3>
          <p>Email: <a href="mailto:support@shopmate.com" className="text-blue-400 hover:underline">allsports@gmail.com</a></p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Kerala, India</p>

          <div className="flex gap-4 mt-3 justify-start">
            <a href="#" className="hover:text-white"><img src={Facebook} alt="facebook" /></a> 
            <a href="#" className="hover:text-white"> <img src={insta} alt="insta" /></a>
         
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs border-t border-gray-800 mt-6 pt-3">
        © {new Date().getFullYear()} ALLSPORTS. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
