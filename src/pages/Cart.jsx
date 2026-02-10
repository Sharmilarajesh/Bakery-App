import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"; // ADD THIS IMPORT

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, clearCart } =
    useContext(CartContext);

  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    setShowPaymentSuccess(true);

    setTimeout(() => {
      clearCart();
      setTimeout(() => {
        setShowPaymentSuccess(false);
      }, 2000);
    }, 1500);
  };

  if (cartItems.length === 0 && !showPaymentSuccess)
    return (
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="text-5xl mb-4">🛒</div>
        <h2 className="text-3xl font-bold mb-4 text-[#C97C5D]">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-6">Add some delicious treats!</p>
        {/* CHANGE THIS: Use Link instead of <a> */}
        <Link
          to="/products"
          className="px-6 py-3 bg-[#C97C5D] text-white font-medium rounded-full hover:bg-[#B36A50] transition-colors inline-block"
        >
          Browse Products
        </Link>
      </div>
    );

  // Payment Success Message
  if (showPaymentSuccess) {
    return (
      <div className="max-w-md mx-auto px-6 pt-24 pb-16 text-center">
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 mb-6">
          <div className="text-green-600 text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Payment Successful!
          </h2>
          <p className="text-green-700 mb-2">₹{total} has been paid</p>
          <p className="text-gray-600">Thank you for your order!</p>
        </div>
        {/* CHANGE THIS: Use Link instead of <a> */}
        <Link
          to="/products"
          className="px-6 py-3 bg-[#C97C5D] text-white font-medium rounded-full hover:bg-[#B36A50] transition-colors inline-block"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-[#C97C5D]">Your Cart</h1>
        <p className="text-gray-600">{cartItems.length} items</p>
      </div>

      {/* Cart Items */}
      <div className="space-y-6 mb-8">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow p-6 flex items-center justify-between border border-gray-200 hover:shadow-md transition-shadow duration-300 fade-in-up"
          >
            {/* Left: Product Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-[#C97C5D] font-semibold">₹{item.price}</p>
              </div>
            </div>

            {/* Middle: Quantity Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => decreaseQty(item.id)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700"
                disabled={item.quantity <= 1}
              >
                -
              </button>
              <span className="text-xl font-bold w-8 text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => increaseQty(item.id)}
                className="w-8 h-8 rounded-full bg-[#C97C5D] hover:bg-[#B36A50] flex items-center justify-center text-white"
              >
                +
              </button>
            </div>

            <div className="text-right">
              <p className="text-xl font-bold">₹{item.price * item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 text-sm text-red-500 hover:text-red-700 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total & Actions */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Total</h3>
          <p className="text-2xl font-bold text-[#C97C5D]">₹{total}</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="flex-1 py-3 border-2 border-red-500 text-red-500 font-medium 
                      rounded-lg hover:bg-red-50 transition-colors"
          >
            Clear Cart
          </button>
          <button
            onClick={handleCheckout}
            className="flex-1 py-3 bg-[#C97C5D] text-white font-medium rounded-lg hover:bg-[#B36A50] transition-colors"
          >
            Pay ₹{total}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;