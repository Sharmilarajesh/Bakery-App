// src/pages/Products.jsx
import React, { useContext, useState, useEffect, useMemo } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const searchQuery = searchParams.get("search") || "";
  
  const [addedMessage, setAddedMessage] = useState({});
  const [searchInput, setSearchInput] = useState(searchQuery);
  const [isLoading, setIsLoading] = useState(false);

 
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      if (searchInput !== searchQuery) {
        if (searchInput.trim()) {
          searchParams.set("search", searchInput);
        } else {
          searchParams.delete("search");
        }
        setSearchParams(searchParams);
      }
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput, searchParams, setSearchParams, searchQuery]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedMessage((prev) => ({ ...prev, [product.id]: true }));
    
    setTimeout(() => {
      setAddedMessage((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  
  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    
    // Apply category filter from URL
    if (categoryFilter) {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [categoryFilter, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 min-h-screen">
    
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-[#C97C5D]">
          {categoryFilter ? `${categoryFilter}` : "All Products"}
        </h1>
        <p className="text-gray-600">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'} found
          {isLoading && "..."}
        </p>
      </div>

      {/* Search Bar with animation */}
      <div className="mb-10 relative">
        <div className="relative max-w-md mx-auto">
          <svg 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 animate-pulse" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-full 
                    focus:outline-none focus:ring-2 focus:ring-[#C97C5D] focus:border-transparent 
                    transition-all duration-300 hover:border-[#C97C5D]/50"
          />
          {searchInput && (
            <button
              onClick={() => setSearchInput("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#C97C5D] to-transparent animate-pulse"></div>
          </div>
        )}
      </div>

      {/* Products Grid with subtle animations */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((prod, index) => (
            <div
              key={prod.id}
              className="group bg-white rounded-2xl shadow-lg border border-gray-200 p-4 flex flex-col items-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image with zoom effect */}
              <div className="relative overflow-hidden rounded-xl mb-4 w-full">
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="w-full h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-[#C97C5D]">{prod.category}</span>
                </div>
              </div>
              
              {/* Product info */}
              <h3 className="text-lg font-semibold mb-1 text-center text-gray-800 group-hover:text-[#C97C5D] transition-colors">
                {prod.name}
              </h3>
              <p className="text-xl font-bold text-[#C97C5D] mb-4">₹{prod.price}</p>

              {/* Add to Cart button with animation */}
              <button
                onClick={() => handleAddToCart(prod)}
                className={`relative w-full py-3 rounded-full font-semibold overflow-hidden transition-all duration-300 ${
                  addedMessage[prod.id] 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-[#C97C5D] to-[#D4A574] text-white hover:shadow-lg'
                }`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {addedMessage[prod.id] ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Added!
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add to Cart
                    </>
                  )}
                </span>
                
                {/* Button hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#D4A574] to-[#C97C5D] transition-transform duration-300 ${
                  addedMessage[prod.id] ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
                }`} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        /* Empty state with animation */
        <div className="text-center py-16 animate-fade-in">
          <div className="text-6xl mb-4 animate-bounce">🍰</div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            No products found
          </h3>
          <p className="text-gray-500 mb-6">
            Try a different search term or browse all products
          </p>
          <button
            onClick={() => {
              setSearchInput("");
              searchParams.delete("search");
              setSearchParams(searchParams);
            }}
            className="px-6 py-3 bg-gradient-to-r from-[#C97C5D] to-[#D4A574] text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;