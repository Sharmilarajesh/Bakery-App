import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#C97C5D] text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">My Bakery</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li><Link to="/" className="hover:text-[#FFD8B1]">Home</Link></li>
          <li><Link to="/cart" className="hover:text-[#FFD8B1]">Cart</Link></li>
          <li><Link to="/about" className="hover:text-[#FFD8B1]">About</Link></li>
          <li><Link to="/contact" className="hover:text-[#FFD8B1]">Contact</Link></li>
          
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#693b19] px-6 pb-6">
          <ul className="flex flex-col gap-4 text-lg">
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/contact">Contact</Link>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
