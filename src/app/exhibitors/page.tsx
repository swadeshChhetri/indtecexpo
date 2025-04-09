'use client'

import { motion } from "framer-motion";
import Image from "next/image";

const featured_events = [
  {
    title: "BALLET & POINTE",
    description:
      "Ballet classes consist of barre and center work and traveling exercises.",
    image: "/expo1.jpg",
  },
  {
    title: "BALLET/TAP COMBO",
    description: "A combination class of both Ballet and Tap for 4 & 5 yr olds.",
    image: "/expo2.jpg",
  },
  {
    title: "CREATIVE MOVEMENT",
    description:
      "An introduction to the art of dance. Dancers will learn coordination and motor skills.",
    image: "/expo3.jpg",
  },
  {
    title: "HIP HOP",
    description: "High-energy dance style, focusing on rhythm, and freestyle movements.",
    image: "/expo4.jpg",
  },
  {
    title: "BALLET & POINTE",
    description:
      "Ballet classes consist of barre and center work and traveling exercises.",
    image: "/expo5.jpg",
  },
  {
    title: "BALLET/TAP COMBO",
    description: "A combination class of both Ballet and Tap for 4 & 5 yr olds.",
    image: "/expo6.png",
  },
  {
    title: "CREATIVE MOVEMENT",
    description:
      "An introduction to the art of dance. Dancers will learn coordination and motor skills.",
    image: "/expo7.jpg",
  },
  {
    title: "HIP HOP",
    description: "High-energy dance style, focusing on rhythm, and freestyle movements.",
    image: "/expo8.jpg",
  },
];

const Exhibitors = () => {
  return (
    <section className="relative pt-28 py-16 px-6 md:px-12 lg:px-24 bg-white text-black">
      {/* Background Text */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-7xl text-gray-300 font-bold opacity-20">
        Featured Events
      </h1>

      {/* Title */}
      <motion.h2
        className="text-center text-4xl font-bold relative mb-6 text-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Featured Events
      </motion.h2>

      {/* Grid Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 max-w-7xl mx-auto">
        {featured_events.map((cls, index) => (
          <motion.div
            key={index}
            className="bg-white text-black rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <Image
              src={cls.image}
              alt={cls.title}
              width={300}
              height={200}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg sm:text-xl font-bold">{cls.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base my-2">{cls.description}</p>
              <motion.button
                className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
                text-white text-sm sm:text-base font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book My Stall
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Exhibitors;
