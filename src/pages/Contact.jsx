import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F1] px-6 pt-20">
      <div className="max-w-md mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold mb-4 text-[#5C3A21]">Contact Us</h2>
        <p className="text-gray-700">
          We'd love to hear from you! Reach out to us using any of the following:
        </p>

        <div className="space-y-4 text-left">
          <div className="flex items-center gap-4 p-4 bg-white rounded shadow hover:shadow-lg transition">
            <FaEnvelope className="text-[#C97C5D] text-xl" />
            <span>bakery@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white rounded shadow hover:shadow-lg transition">
            <FaPhone className="text-[#C97C5D] text-xl" />
            <span>+91 98765 43210</span>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white rounded shadow hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-[#C97C5D] text-xl" />
            <span>123, Saibaba Kovil Street, Coimbatore, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
