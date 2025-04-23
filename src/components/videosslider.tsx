'use client'
import React from 'react'
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

const videos = [
  "https://www.youtube.com/embed/Xiv0pcZwD1o",
  "https://www.youtube.com/embed/6JfSuirEHmM",
  "https://www.youtube.com/embed/dAvtwpl4XCc",
  "https://www.youtube.com/embed/Ksacpv2vqZY",
  "https://www.youtube.com/embed/D8SXE8JFUww",
  "https://www.youtube.com/embed/4XikuS_dzII",
  "https://www.youtube.com/embed/93nwR04OYiM",
  "https://www.youtube.com/embed/twZ-vGm9csw",
  "https://www.youtube.com/embed/qwLQ-Kpuw84",
  "https://www.youtube.com/embed/9O00iq5fnhs",
  "https://www.youtube.com/embed/QIDBcX9KS0A",
  "https://www.youtube.com/embed/pBYo-raXYtM",
  "https://www.youtube.com/embed/AMa2K0Gt6NY",
  "https://www.youtube.com/embed/43hOK6bclbg",
  "https://www.youtube.com/embed/51uQEK7ZQBo",
  "https://www.youtube.com/embed/3TCDvcshDRE",
  "https://www.youtube.com/embed/H7FAXEvX3nw",
  "https://www.youtube.com/embed/0DKRHRNIPcg",
  "https://www.youtube.com/embed/gItAr4bSQek",
  "https://www.youtube.com/embed/GmPyxwAa6UI"
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
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        navigation={true} // <-- this enables arrows
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        className="w-full mx-auto"
      >
        {videos.map((blog, index) => (
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