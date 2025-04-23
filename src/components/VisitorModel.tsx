
'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';
import api from '@/lib/axios';

interface VisitorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VisitorModal({ isOpen, onClose }: VisitorModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await api.post('/visitors', formData); // Change URL if deployed
      console.log('Data submitted:', formData);
      toast.success('Form submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (!isOpen) return null;

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
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black w-[90%] max-w-md p-6 rounded-xl shadow-2xl relative"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-black text-2xl font-bold hover:text-red-500"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Visitor Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="tel" name="phone" placeholder="Phone" required onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="text" name="company" placeholder="Occupation / Company" onChange={handleChange} className="w-full p-2 border rounded" />
              <select name="interest" required onChange={handleChange} className="w-full p-2 border rounded">
                <option value="">Interest Area</option>
                <option>Tech</option>
                <option>Tools</option>
                <option>Networking</option>
              </select>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700">
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
