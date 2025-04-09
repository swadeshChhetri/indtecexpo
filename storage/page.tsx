/*

'use client'

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";


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
const videos = [
  { title: "PEDC Company Auditions", url: "https://www.youtube.com/embed/VIDEO_ID_1" },
  { title: "PEDC Company Auditions", url: "https://www.youtube.com/embed/VIDEO_ID_2" },
  { title: "PEDC Company Auditions", url: "https://www.youtube.com/embed/VIDEO_ID_3" },
  { title: "PEDC Performance", url: "https://www.youtube.com/embed/VIDEO_ID_4" },
  { title: "PEDC Company Auditions", url: "https://www.youtube.com/embed/VIDEO_ID_1" },
  { title: "PEDC Company Auditions", url: "https://www.youtube.com/embed/VIDEO_ID_2" },
  { title: "PEDC Company Auditions", url: "https://www.youtube.com/embed/VIDEO_ID_3" },
  { title: "PEDC Performance", url: "https://www.youtube.com/embed/VIDEO_ID_4" },
];

const clients = [
  {
    name: "Miss Amie",
    role: "Owner/Director",
    image: "/logo_c1.jpg",
    details: "Miss Amie is an experienced director with a passion for dance.",
  },
  {
    name: "Miss Mandy",
    role: "Ballet Instructor",
    image: "/logo_c2.jpg",
    details:
      "Miss Mandy is originally from Sewell, NJ and began her dance training with Dance! by Debra DiNote.",
  },
  {
    name: "Miss Alyssa",
    role: "Tap Instructor",
    image: "/logo_c3.jpg",
    details: "Miss Alyssa has been teaching tap for over 10 years.",
  },
  {
    name: "Miss Leah",
    role: "Pre-School Class Instructor",
    image: "/logo_c4.jpg",
    details: "Miss Leah specializes in pre-school dance programs.",
  },
  {
    name: "Miss Sarah",
    role: "Jazz Instructor",
    image: "/logo_c5.jpg",
    details: "Miss Sarah has choreographed award-winning jazz performances.",
  },
  {
    name: "Miss Amie",
    role: "Owner/Director",
    image: "/logo_c6.jpg",
    details: "Miss Amie is an experienced director with a passion for dance.",
  },
  {
    name: "Miss Mandy",
    role: "Ballet Instructor",
    image: "/logo_c7.jpg",
    details:
      "Miss Mandy is originally from Sewell, NJ and began her dance training with Dance! by Debra DiNote.",
  },
  {
    name: "Miss Alyssa",
    role: "Tap Instructor",
    image: "/logo_c8.jpg",
    details: "Miss Alyssa has been teaching tap for over 10 years.",
  },
  {
    name: "Miss Leah",
    role: "Pre-School Class Instructor",
    image: "/logo_c8.jpg",
    details: "Miss Leah specializes in pre-school dance programs.",
  },
  {
    name: "Miss Sarah",
    role: "Jazz Instructor",
    image: "/logo_c9.jpg",
    details: "Miss Sarah has choreographed award-winning jazz performances.",
  },
];

const organizers = [
  {
    name: "Miss Amie",
    role: "Owner/Director",
    image: "/man1.jpg",
    details: "Miss Amie is an experienced director with a passion for dance.",
  },
  {
    name: "Miss Mandy",
    role: "Ballet Instructor",
    image: "/man2.jpg",
    details:
      "Miss Mandy is originally from Sewell, NJ and began her dance training with Dance! by Debra DiNote.",
  },
  {
    name: "Miss Alyssa",
    role: "Tap Instructor",
    image: "/man3.jpg",
    details: "Miss Alyssa has been teaching tap for over 10 years.",
  },
  {
    name: "Miss Leah",
    role: "Pre-School Class Instructor",
    image: "/man4.jpg",
    details: "Miss Leah specializes in pre-school dance programs.",
  },
  {
    name: "Miss Sarah",
    role: "Jazz Instructor",
    image: "/man5.png",
    details: "Miss Sarah has choreographed award-winning jazz performances.",
  },
  {
    name: "Miss Amie",
    role: "Owner/Director",
    image: "/man6.jpg",
    details: "Miss Amie is an experienced director with a passion for dance.",
  },
  {
    name: "Miss Mandy",
    role: "Ballet Instructor",
    image: "/man7.jpg",
    details:
      "Miss Mandy is originally from Sewell, NJ and began her dance training with Dance! by Debra DiNote.",
  },
  {
    name: "Miss Alyssa",
    role: "Tap Instructor",
    image: "/man8.jpg",
    details: "Miss Alyssa has been teaching tap for over 10 years.",
  },
  {
    name: "Miss Leah",
    role: "Pre-School Class Instructor",
    image: "/man9.jpg",
    details: "Miss Leah specializes in pre-school dance programs.",
  },
  {
    name: "Miss Sarah",
    role: "Jazz Instructor",
    image: "/man5.jpg",
    details: "Miss Sarah has choreographed award-winning jazz performances.",
  },
];

const blogs = [
  {
    date: "01",
    month: "JUN",
    img: "/man6.jpg",
    title: "Lorem Ipsum Dolor Sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    date: "01",
    month: "JUN",
    img: "/man2.jpg",
    title: "Lorem Ipsum Dolor Sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    date: "01",
    month: "JUN",
    img: "/man3.jpg",
    title: "Lorem Ipsum Dolor Sit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];

export default function Home() {

  // const [hoveredContent, setHoveredContent] = useState("");

  return (
    <>
    <main className="bg-white">
      {/* HERO SECTION */
//       <section
//         className="relative flex items-center min-h-screen bg-cover bg-center px-4 sm:px-10 lg:px-20"
//         style={{ backgroundImage: "url('/banner_image.png')" }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

//         {/* Content */}
//         <motion.div
//           className="relative z-10 text-white text-left max-w-3xl"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-bold leading-tight">
//             IND-TEC EXPO 2025 <br /> – Houston’s Premier Industrial Showcase <br />
//             <span className="text-blue-500">
//               Powered by Jaguar Media & Entertainment LLP
//             </span>
//           </h1>
//           <p className="text-lg sm:text-xl md:text-2xl mt-4">
//             Inspiring Creators, Entertaining Generations
//           </p>
//           <motion.button
//             className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
//              text-white font-[cursive] font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
//             whileHover={{ scale: 1.08 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Book My Stall
//           </motion.button>
//         </motion.div>
//       </section>

//       {/* ABOUT THE EVENT */}
//       <section className="relative py-16 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
//         {/* Background Title */}
//         <h1 className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-200 font-bold opacity-10 pointer-events-none whitespace-nowrap">
//           About The Event
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
//           {/* Left - Image */}
//           <motion.div
//             className="relative pt-12 sm:pt-16 md:pt-24"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/aboutus.png"
//               alt="About The Event"
//               width={500}
//               height={500}
//               className="w-full max-w-md mx-auto md:mx-0 object-cover rounded-lg shadow-lg"
//             />
//           </motion.div>
//           {/* Right - Text */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center md:text-left"
//           >
//             <h2 className="text-2xl sm:text-3xl text-blue-500 font-semibold mb-4">
//               JAGUAR MEDIA & ENTERTAINMENTS LLP
//             </h2>
//             <p className="text-gray-600 leading-relaxed mb-6 text-base sm:text-lg">
//               At Jaguar Media & Entertainments LLP, it’s more than just media production –
//               it’s about fueling passion, creativity, and storytelling across every screen.
//               From aspiring performers to seasoned artists, we provide a dynamic platform
//               where talent meets opportunity.
//             </p>
//             <motion.button
//               className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
//               text-white font-[cursive] font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Read More
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>

//       {/* FEATURED EVENTS */}
//       <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-white text-black">
//         {/* Background Title */}
//         <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-7xl text-gray-300 font-bold opacity-20">
//           Featured Events
//         </h1>
//         <motion.h2
//           className="text-center text-4xl font-bold relative mb-6 text-blue-600"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Featured Events
//         </motion.h2>
//         <div className="relative max-w-6xl mx-auto">
//           {/* Custom Navigation Buttons */}
//           <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-50 flex justify-between px-4">
//             <button className="prev-button bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-md">
//               ❮
//             </button>
//             <button className="next-button bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-md">
//               ❯
//             </button>
//           </div>
//           {/* Swiper Slider */}
//           <Swiper
//             modules={[Navigation, Autoplay]}
//             spaceBetween={20}
//             slidesPerView={1}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             navigation={{ nextEl: ".next-button", prevEl: ".prev-button" }}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             className="mt-8"
//           >
//             {featured_events.map((event, index) => (
//               <SwiperSlide key={index} className="flex justify-center">
//                 <motion.div
//                   className="bg-white text-black rounded-xl overflow-hidden shadow-lg max-w-xs mx-auto"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <Image
//                     src={event.image}
//                     alt={event.title}
//                     width={300}
//                     height={200}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4 text-center">
//                     <h3 className="text-lg font-bold">{event.title}</h3>
//                     <p className="text-gray-600 text-sm my-2">{event.description}</p>
//                     <motion.button
//                       className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
//                       text-white font-[cursive] font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       Book My Stall
//                     </motion.button>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>

//       {/* ORGANIZERS */}
//       <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-white text-black">
//         <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-7xl text-gray-300 font-bold opacity-20">
//           Organizers
//         </h1>
//         <motion.h2
//           className="text-center text-4xl font-bold relative mb-6 text-blue-600"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Organizers
//         </motion.h2>
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           className="max-w-6xl mx-auto"
//         >
//           {organizers.map((org, index) => (
//             <SwiperSlide key={index} className="flex justify-center">
//               <motion.div
//                 className="bg-white text-black rounded-xl overflow-hidden shadow-lg max-w-xs mx-auto"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Image
//                   src={org.image}
//                   alt={org.name}
//                   width={300}
//                   height={300}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4 text-center">
//                   <h3 className="text-lg font-bold">{org.name}</h3>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="flex justify-center mt-6">
//           <div className="swiper-pagination"></div>
//         </div>
//       </section>

//       {/* CO-SPONSORS */}
//       <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-white text-black">
//         <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-7xl text-gray-300 font-bold opacity-20">
//           Co-Sponsor
//         </h1>
//         <motion.h2
//           className="text-center text-4xl font-bold relative mb-6 text-blue-600"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Co-Sponsor
//         </motion.h2>
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           className="max-w-6xl mx-auto"
//         >
//           {organizers.map((sponsor, index) => (
//             <SwiperSlide key={index} className="flex justify-center">
//               <motion.div
//                 className="bg-white text-black rounded-xl overflow-hidden shadow-lg max-w-xs mx-auto"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Image
//                   src={sponsor.image}
//                   alt={sponsor.name}
//                   width={300}
//                   height={300}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4 text-center">
//                   <h3 className="text-lg font-bold">{sponsor.name}</h3>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="flex justify-center mt-6">
//           <div className="swiper-pagination"></div>
//         </div>
//       </section>

//       {/* MEDIA / GALLERY */}
//       <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-gray-900 text-white">
//         <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-7xl text-gray-600 font-bold opacity-20">
//           Media
//         </h1>
//         <motion.h2
//           className="text-center text-4xl font-bold relative mb-6"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Gallery
//         </motion.h2>
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           navigation={{ nextEl: ".next-button", prevEl: ".prev-button" }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           className="max-w-6xl mx-auto"
//         >
//           {videos.map((video, index) => (
//             <SwiperSlide key={index} className="flex justify-center">
//               <motion.div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm text-center">
//                 <img
//                   src="/expo8.jpg"
//                   className="w-full h-56 object-cover"
//                   alt={video.title}
//                 />
//                 <div className="p-4 text-center">
//                   <h3 className="text-lg font-semibold text-black">{video.title}</h3>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="absolute top-[40%] left-0 right-0 flex justify-between max-w-6xl mx-auto">
//           <button className="prev-button bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full">
//             ❮
//           </button>
//           <button className="next-button bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full">
//             ❯
//           </button>
//         </div>
//         <div className="text-center mt-8">
//           <Link href="/gallery">
//             <motion.button
//               className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-[cursive] font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View All
//             </motion.button>
//           </Link>
//         </div>
//       </section>

//       {/* VIDEOS */}
//       <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-gray-900 text-white">
//         <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-7xl text-gray-600 font-bold opacity-20">
//           Videos
//         </h1>
//         <motion.h2
//           className="text-center text-4xl font-bold relative mb-6"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Videos
//         </motion.h2>
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           navigation={{ nextEl: ".next-button", prevEl: ".prev-button" }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           className="max-w-6xl mx-auto"
//         >
//           {videos.map((video, index) => (
//             <SwiperSlide key={index} className="flex flex-col items-center">
//               <motion.div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-md">
//                 <iframe
//                   src={video.url}
//                   className="w-full h-56"
//                   allowFullScreen
//                   title={video.title}
//                 ></iframe>
//                 <div className="p-4 text-center">
//                   <h3 className="text-lg font-semibold text-black">{video.title}</h3>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="absolute top-[40%] left-0 right-0 flex justify-between max-w-6xl mx-auto mt-4">
//           <button className="prev-button bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full">
//             ❮
//           </button>
//           <button className="next-button bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full">
//             ❯
//           </button>
//         </div>
//         <div className="text-center mt-8">
//           <Link href="/videos">
//             <motion.button
//               className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-[cursive] font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View All
//             </motion.button>
//           </Link>
//         </div>
//       </section>

//       {/* OUR CLIENTS */}
//       <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-white text-black">
//         <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-7xl text-gray-300 font-bold opacity-20">
//           Our Clients
//         </h1>
//         <motion.h2
//           className="text-center text-4xl font-bold relative mb-6 text-blue-600"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Our Clients
//         </motion.h2>
//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 4000, disableOnInteraction: false }}
//           className="max-w-6xl mx-auto"
//         >
//           {clients.map((client, index) => (
//             <SwiperSlide key={index} className="flex justify-center">
//               <motion.div
//                 className="bg-white text-black rounded-xl overflow-hidden shadow-lg max-w-xs mx-auto"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Image
//                   src={client.image}
//                   alt={client.name}
//                   width={300}
//                   height={300}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4 text-center">
//                   <h3 className="text-lg font-bold">{client.name}</h3>
//                 </div>
//               </motion.div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="flex justify-center mt-6">
//           <div className="swiper-pagination"></div>
//         </div>
//       </section>

//       {/* RECENT BLOG */}
//       <section className="relative bg-gray-100 py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
//         <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-7xl text-gray-300 font-bold opacity-20">
//           Recent Blog
//         </h1>
//         <div className="absolute left-0 bottom-0 w-48 md:w-64 lg:w-72 -z-10">
//           <Image
//             src="/path-to-side-image.png"
//             alt="Side Decoration"
//             width={500}
//             height={500}
//             className="object-contain"
//           />
//         </div>
//         <motion.h2
//           className="text-center text-4xl font-bold text-blue-600 relative mb-6"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Recent Blog
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {blogs.map((blog, index) => (
//             <motion.div
//               key={index}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//             >
//               <div className="relative">
//                 <Image
//                   src={blog.img}
//                   alt={blog.title}
//                   width={400}
//                   height={250}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute top-0 left-0 bg-blue-600 text-white p-2 text-center w-14">
//                   <p className="text-lg font-bold">{blog.date}</p>
//                   <p className="text-xs">{blog.month}</p>
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">{blog.title}</h3>
//                 <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
//                 <a href="#" className="text-blue-600 mt-3 inline-block font-semibold">
//                   READ MORE
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-white text-black py-10 px-6 md:px-12 lg:px-24 border-t">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Logo & Social Icons */}
//           <div className="flex flex-col items-center md:items-start space-y-4">
//             <Image src="/logo.png" alt="Logo" width={150} height={80} />
//             <div className="flex space-x-3">
//               <a href="#" className="text-black hover:text-gray-600">
//                 <Facebook size={28} />
//               </a>
//               <a href="#" className="text-black hover:text-gray-600">
//                 <Twitter size={28} />
//               </a>
//               <a href="#" className="text-black hover:text-gray-600">
//                 <Instagram size={28} />
//               </a>
//             </div>
//           </div>
//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-black">
//                   Download PEDC Brochure
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-black">
//                   2017-2018 Schedule
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-black">
//                   2017-2018 Calendar
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-black">
//                   Account Access
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-black">
//                   After School Pickup
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* Navigation */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">NAVIGATION</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-black">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-black">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-black">
//                   Classes
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-black">
//                   Media
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-gray-600 hover:text-black">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/* Contact Details */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">CONTACT DETAILS</h3>
//             <div className="space-y-3">
//               <div className="flex items-center space-x-2">
//                 <MapPin size={20} />
//                 <p className="text-gray-600">
//                   2629 Waverly Barn Road Suite 125, Davenport FL 33897
//                 </p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Phone size={20} className="text-blue-600" />
//                 <p className="text-blue-600">863.424.7355</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Mail size={20} />
//                 <p className="text-gray-600">http://www.jaguarmedia.com</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-center text-gray-500 text-sm mt-8">
//           © JAGUAR MEDIA AND ENTERTAINMENTS LLP · 2019
//         </div>
//       </footer>
//     </main>
//     </>
//   );
// }

// */












'use client'

// import { motion } from "framer-motion";
// import Image from "next/image";

// const featured_events = [
//   {
//     title: "BALLET & POINTE",
//     description:
//       "Ballet classes consist of barre and center work and traveling exercises.",
//     image: "/expo1.jpg",
//   },
//   {
//     title: "BALLET/TAP COMBO",
//     description: "A combination class of both Ballet and Tap for 4 & 5 yr olds.",
//     image: "/expo2.jpg",
//   },
//   {
//     title: "CREATIVE MOVEMENT",
//     description:
//       "An introduction to the art of dance. Dancers will learn coordination and motor skills.",
//     image: "/expo3.jpg",
//   },
//   {
//     title: "HIP HOP",
//     description: "High-energy dance style, focusing on rhythm, and freestyle movements.",
//     image: "/expo4.jpg",
//   },
//   {
//     title: "BALLET & POINTE",
//     description:
//       "Ballet classes consist of barre and center work and traveling exercises.",
//     image: "/expo5.jpg",
//   },
//   {
//     title: "BALLET/TAP COMBO",
//     description: "A combination class of both Ballet and Tap for 4 & 5 yr olds.",
//     image: "/expo6.png",
//   },
//   {
//     title: "CREATIVE MOVEMENT",
//     description:
//       "An introduction to the art of dance. Dancers will learn coordination and motor skills.",
//     image: "/expo7.jpg",
//   },
//   {
//     title: "HIP HOP",
//     description: "High-energy dance style, focusing on rhythm, and freestyle movements.",
//     image: "/expo8.jpg",
//   },
// ];

// const Exhibitors = () => {
//   return (
//     <section className="relative pt-28 py-16 px-6 md:px-12 lg:px-24 bg-white text-black">
//       {/* Background Text */}
//       <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-7xl text-gray-300 font-bold opacity-20">
//         Featured Events
//       </h1>

//       {/* Title */}
//       <motion.h2
//         className="text-center text-4xl font-bold relative mb-6 text-blue-600"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Featured Events
//       </motion.h2>

//       {/* Grid Showcase */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 max-w-7xl mx-auto">
//         {featured_events.map((cls, index) => (
//           <motion.div
//             key={index}
//             className="bg-white text-black rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.4, delay: index * 0.05 }}
//           >
//             <Image
//               src={cls.image}
//               alt={cls.title}
//               width={300}
//               height={200}
//               className="w-full h-48 sm:h-56 object-cover"
//             />
//             <div className="p-4 text-center">
//               <h3 className="text-lg sm:text-xl font-bold">{cls.title}</h3>
//               <p className="text-gray-600 text-sm sm:text-base my-2">{cls.description}</p>
//               <motion.button
//                 className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
//                 text-white text-sm sm:text-base font-semibold rounded-full shadow-md hover:shadow-lg transition duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Book My Stall
//               </motion.button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Exhibitors;