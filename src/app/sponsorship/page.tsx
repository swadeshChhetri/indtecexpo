'use client';

import { motion } from 'framer-motion';
import {
  Megaphone,
  Users,
  Mic,
  Camera,
  Lightbulb, Star,
  MonitorSpeaker,
  BadgePercent, FileDown, Mail
} from 'lucide-react';

const benefits = [
  { icon: Megaphone, title: 'Brand Exposure' },
  { icon: Users, title: 'Networking with Delegates & Visitors' },
  { icon: Mic, title: 'Speaking Opportunities' },
  { icon: Camera, title: 'Media & Social Coverage' },
  { icon: Lightbulb, title: 'Access to Industry Insights' },
];
const tiers = [
  {
    tier: 'Gold',
    price: '₹50,000',
    benefits: ['Logo on banner', 'Booth space', 'Talk slot'],
    icon: Star,
    bg: 'bg-yellow-100',
  },
  {
    tier: 'Silver',
    price: '₹30,000',
    benefits: ['Logo display', 'Booth space'],
    icon: MonitorSpeaker,
    bg: 'bg-gray-100',
  },
  {
    tier: 'Bronze',
    price: '₹15,000',
    benefits: ['Logo display only'],
    icon: BadgePercent,
    bg: 'bg-orange-50',
  },
];
const sponsors = [
  '/sponsors/logo1.png',
  '/sponsors/logo2.png',
  '/sponsors/logo3.png',
  '/sponsors/logo4.png',
  '/sponsors/logo5.png',
  '/sponsors/logo6.png',
];


const SponsorshipIntro = () => {
  return (
    <>
      <motion.section
        className="w-full px-4 py-16 bg-white text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Sponsorship Opportunities
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Partner with us to showcase your brand, connect with key industry leaders,
          and gain exposure among thousands of professionals, delegates, and media.
          Sponsoring this event is a chance to leave a lasting impact while driving
          real business opportunities.
        </p>
      </motion.section>
      <motion.section
        className="bg-gray-50 px-4 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">
          Benefits of Sponsoring
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map(({ icon: Icon, title }, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <Icon className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <p className="text-gray-700 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section
        className="py-16 px-4 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">
          Sponsorship Packages
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map(({ tier, price, benefits, icon: Icon, bg }, i) => (
            <div
              key={i}
              className={`rounded-2xl shadow p-6 ${bg} hover:shadow-lg transition text-center`}
            >
              <Icon className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-800 mb-1">{tier}</h4>
              <p className="text-indigo-600 font-semibold mb-4">{price}</p>
              <ul className="text-gray-700 space-y-1">
                {benefits.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section
        className="py-16 bg-gray-50 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-10">
          Past Sponsors
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto items-center">
          {sponsors.map((logo, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow flex items-center justify-center hover:shadow-md transition"
            >
              <img
                src={logo}
                alt={`Sponsor ${index + 1}`}
                className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </motion.section>
      <motion.section
        className="py-20 px-4 bg-indigo-50 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
          Ready to Sponsor the Event?
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Showcase your brand to industry leaders and decision-makers. Apply now or download our detailed sponsorship brochure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/sponsorship-form"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
          >
            <Mail className="w-5 h-5" />
            Apply to Sponsor
          </a>
          <a
            href="/brochures/sponsorship-brochure.pdf"
            download
            className="inline-flex items-center gap-2 bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-100 transition"
          >
            <FileDown className="w-5 h-5" />
            Download Brochure
          </a>
        </div>
      </motion.section>
      <motion.section
        className="py-20 px-4 bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Sponsorship Inquiry
          </h3>
          <p className="text-gray-600 mb-10">
            Have questions or want to discuss sponsorship opportunities? Send us a message.
          </p>
        </div>

        <form className="max-w-3xl mx-auto grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Submit Inquiry
          </button>
        </form>
      </motion.section>
    </>
  );
};

export default SponsorshipIntro;