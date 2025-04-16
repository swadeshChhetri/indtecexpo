'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ExhibitorModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormData = {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  productCategory: string;
  message: string;
};

export default function ExhibitorModal({ isOpen, onClose }: ExhibitorModalProps) {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    productCategory: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://tradesfairs.com/indtecexpo/api/exhibitors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add the line below if your Laravel app uses sanctum/cors
          // 'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Exhibitor data submitted successfully');
        onClose(); // Close modal
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-black w-[90%] max-w-lg p-6 rounded-2xl shadow-2xl relative"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-black text-2xl font-bold hover:text-red-600"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Become an Exhibitor</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                required
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="contactPerson"
                placeholder="Contact Person"
                required
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="productCategory"
                placeholder="Product / Category"
                required
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <textarea
                name="message"
                rows={3}
                placeholder="Message (Optional)"
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
