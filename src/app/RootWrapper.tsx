"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function RootWrapper({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://tradesfairs.com/indtecexpo/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Message submitted successfully!");
        setShowModal(false);
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <>
      <Header onContactClick={() => setShowModal(true)} />
      {showModal && (
        <div className="pt-18 fixed inset-0 flex justify-center items-center bg-white/30 backdrop-blur-sm bg-opacity-80 z-50">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <X
                className="cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => setShowModal(false)}
              />
            </div>
            <p className="text-gray-600 mb-4">Nunc erat cursus tellus gravida.</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="p-3 border rounded-lg w-full"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="p-3 border rounded-lg w-full"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 border rounded-lg w-full"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-3 border rounded-lg w-full"
                />
              </div>
              <textarea
                name="message"
                placeholder="What do you have in mind?"
                value={formData.message}
                onChange={handleChange}
                className="p-3 border rounded-lg w-full h-28"
                required
              />
              <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}
      {children}
    </>
  );
}

