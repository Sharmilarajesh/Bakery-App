import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#FFF8F1] px-6 pt-24">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#5C3A21]">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C97C5D]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C97C5D]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#C97C5D]"
          />

          <button
            type="submit"
            className="w-full bg-[#C97C5D] text-white py-2 rounded hover:bg-[#B36A50] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
