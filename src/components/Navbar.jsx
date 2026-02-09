import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#C97C5D] text-white px-6 py-6 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">Bakery Shop</div>
      <ul className="flex space-x-6">
        <li>
          <Link 
            to="/" 
            className="px-2 py-1 rounded hover:bg-[#B36A50] transition-all duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/products" 
            className="px-2 py-1 rounded hover:bg-[#B36A50] transition-all duration-200"
          >
            Products
          </Link>
        </li>
        <li>
          <Link 
            to="/cart" 
            className="px-2 py-1 rounded hover:bg-[#B36A50] transition-all duration-200"
          >
            Cart
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className="px-2 py-1 rounded hover:bg-[#B36A50] transition-all duration-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className="px-2 py-1 rounded hover:bg-[#B36A50] transition-all duration-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
