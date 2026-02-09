// src/pages/Products.jsx
import React, { useContext, useState } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");


  const [addedMessage, setAddedMessage] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);

    // Show message for this product
    setAddedMessage((prev) => ({ ...prev, [product.id]: true }));

    // Remove message after 1.5 seconds
    setTimeout(() => {
      setAddedMessage((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  // Filter products by category if URL has query
  const filteredProducts = categoryFilter
    ? products.filter((p) => p.category === categoryFilter)
    : products;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-[#C97C5D]">
        {categoryFilter ? categoryFilter : "All Products"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((prod) => (
          <div
            key={prod.id}
            className="border rounded-2xl shadow p-4 flex flex-col items-center relative"
          >
            <img
              src={prod.img}
              alt={prod.name}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{prod.name}</h3>
            <p className="text-gray-600 mb-4">₹{prod.price}</p>

            <button
              onClick={() => handleAddToCart(prod)}
              className="px-4 py-2 rounded-full text-white w-full bg-[#C97C5D] hover:bg-[#B36A50] transition"
            >
              Add to Cart
            </button>

            {addedMessage[prod.id] && (
              <p className="text-green-600 mt-2 font-medium text-sm">
                Item added to cart
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
