
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight, Cog,
  Cpu,
  Bolt,
  Wrench,
  Code,
  BrainCircuit,
  ShieldCheck,
  Download,
  MessageSquareQuote
} from 'lucide-react';


const exhibitors = [
  {
    id: 1,
    logo: '🔧',
    name: 'TechTools Ltd.',
    industry: 'Machinery',
    booth: 'A-12',
  },
  {
    id: 2,
    logo: '⚙️',
    name: 'PowerWorks',
    industry: 'Automation',
    booth: 'B-05',
  },
  {
    id: 3,
    logo: '🔧',
    name: 'TechTools Ltd.',
    industry: 'Machinery',
    booth: 'A-12',
  },
];

const categories = [
  { icon: <Cog className="h-8 w-8 text-blue-600" />, label: 'Industrial Machinery' },
  { icon: <Cpu className="h-8 w-8 text-green-600" />, label: 'Automation & Robotics' },
  { icon: <Bolt className="h-8 w-8 text-yellow-500" />, label: 'Electrical Equipment' },
  { icon: <Wrench className="h-8 w-8 text-red-500" />, label: 'Engineering Services' },
  { icon: <Code className="h-8 w-8 text-indigo-500" />, label: 'Software Solutions' },
  { icon: <BrainCircuit className="h-8 w-8 text-purple-500" />, label: 'AI & Smart Tech' },
  { icon: <ShieldCheck className="h-8 w-8 text-teal-500" />, label: 'Safety & PPE' },
];

export default function ExhibitorsHero() {

  const [form, setForm] = useState({
    company: '',
    email: '',
    phone: '',
    industry: '',
    boothSize: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Thank you for registering!');
  };

  return (
    <>
      <section className="bg-white py-20 px-4 text-center pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Exhibitors at <span className="text-blue-600">INDTEC EXPO 2025</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Showcasing the best in industrial technology, tools, and innovation.
          </p>

          <div className="mt-8">
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white text-base font-medium px-6 py-3 rounded-2xl hover:bg-blue-700 transition">
              Become an Exhibitor
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </section>
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-800 mb-10"
          >
            Confirmed Exhibitors
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {exhibitors.map((exhibitor) => (
              <motion.div
                key={exhibitor.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white shadow-md rounded-xl p-6 text-center"
              >
                <div className="text-4xl">{exhibitor.logo}</div>
                <h3 className="mt-3 text-xl font-semibold text-gray-800">{exhibitor.name}</h3>
                <p className="text-gray-600">{exhibitor.industry}</p>
                <p className="mt-2 font-medium text-blue-600">Booth: {exhibitor.booth}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-800 mb-10"
          >
            Exhibitor Categories
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-lg font-medium text-center text-gray-700">{category.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            Why Exhibit With Us?
          </motion.h2>

          <ul className="text-left text-gray-700 text-lg space-y-4 max-w-2xl mx-auto mb-10">
            <li>✅ Target 10,000+ B2B visitors</li>
            <li>✅ Direct access to industry buyers</li>
            <li>✅ Massive branding opportunity</li>
            <li>✅ Meet distributors, investors, and government reps</li>
            <li>✅ Lead generation & networking</li>
          </ul>

          <a
            href="/brochure.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            <Download className="w-5 h-5" />
            Download Exhibitor Brochure
          </a>
        </div>
      </section>
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-800 mb-8"
          >
            Become an Exhibitor
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-xl shadow">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="industry"
                placeholder="Industry"
                value={form.industry}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-md"
              />
            </div>

            <input
              type="text"
              name="boothSize"
              placeholder="Booth Size Request"
              value={form.boothSize}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
            >
              Register as Exhibitor
            </button>
          </form>
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mb-8"
          >
            What Our Exhibitors Say
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-md relative"
          >
            <MessageSquareQuote className="absolute top-4 left-4 text-blue-600 w-6 h-6" />
            <p className="text-lg text-gray-700 italic">
              “INDTEC EXPO helped us generate <span className="font-semibold text-gray-900">400+ leads</span> in 3 days!”
            </p>
            <p className="mt-4 text-sm text-gray-500 font-medium">– Mr. Sharma, AutoTech India</p>
          </motion.div>
        </div>
      </section>
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mb-6"
          >
            Expo Floor Plan
          </motion.h2>
          <p className="text-gray-600 mb-8">
            Get a sneak peek of the exhibition layout. Choose your preferred booth location.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="rounded-lg overflow-hidden shadow-md"
          >
            <img
              src="/expo-floorplan-preview.jpg"
              alt="Expo Floor Plan Preview"
              className="w-full object-cover"
            />
          </motion.div>

          <a
            href="/expo-floorplan.pdf"
            download
            className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-sm hover:bg-blue-700 transition duration-300"
          >
            <Download className="w-4 h-4" />
            Download Full Floor Plan
          </a>
        </div>
      </section>
    </>
  );
};
