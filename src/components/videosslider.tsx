'use client'
import React from 'react'
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

const clients = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/9bZkp7q19f0",
  "https://www.youtube.com/embed/kXYiU_JCYtU",
  "https://www.youtube.com/embed/oHg5SJYRHA0",
  "https://www.youtube.com/embed/2Vv-BfVoq4g",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  "https://www.youtube.com/embed/tVj0ZTS4WF4",
  "https://www.youtube.com/embed/L_jWHffIx5E",
  "https://www.youtube.com/embed/kXYiU_JCYtU",
  "https://www.youtube.com/embed/oHg5SJYRHA0",
  "https://www.youtube.com/embed/2Vv-BfVoq4g",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  "https://www.youtube.com/embed/tVj0ZTS4WF4",
  "https://www.youtube.com/embed/L_jWHffIx5E",
];


const YouTubeAutoSlider = () => {
  return (
    <section className="relative py-18 px-6 md:px-12 lg:px-24 overflow-hidden">

    {/* Title */}
    <motion.h2
      className="text-center text-4xl font-bold relative mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Videos
    </motion.h2>

    {/* Swiper Slider */}
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full mx-auto"
    >
      {clients.map((blog, index) => (
        <SwiperSlide key={index}>
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <iframe
                src={blog}
                // title={`YouTube video ${index}-${i}`}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
  )
}

export default YouTubeAutoSlider;