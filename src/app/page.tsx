
'use client'
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useState } from 'react'
import Image from 'next/image';
import {
  Mail, Phone, MapPin, Building, Landmark
} from 'lucide-react';
import Link from 'next/link';
const YouTubeAutoSlider = dynamic(() => import('@/components/videosslider'), {
  ssr: false,
  loading: () => <p>Loading video...</p>,
});

const VisitorModal = dynamic(() => import('@/components/VisitorModel'), {
  ssr: false,
});

const images = [
  'g1.jpg',
  'g2.jpg',
  'g3.jpg',
  'g4.jpg',
  'g5.jpg',
  'g6.jpg',
];
const logos = [
  "/companylogos/1.jpg", "/companylogos/2.jpg", "/companylogos/3.jpg", "/companylogos/4.jpg",
  "/companylogos/5.jpg", "/companylogos/6.jpg", "/companylogos/7.jpg", "/companylogos/8.jpg",
  "/companylogos/9.jpg", "/companylogos/10.jpg", "/companylogos/11.jpg", "/companylogos/12.jpg",
  "/companylogos/13.jpg", "/companylogos/14.jpg", "/companylogos/15.jpg", "/companylogos/16.jpg",
  "/companylogos/17.jpg", "/companylogos/18.jpg","/companylogos/19.jpeg", "/companylogos/20.png",
  "/companylogos/21.jpg", "/companylogos/22.jpg", "/companylogos/23.jpg", "/companylogos/24.jpg",
  "/companylogos/25.jpg", "/companylogos/26.jpg", "/companylogos/27.jpg", "/companylogos/28.jpg",
  "/companylogos/29.jpg", "/companylogos/30.jpg", "/companylogos/31.jpg", "/companylogos/32.jpg",
  "/companylogos/33.jpg", "/companylogos/34.jpg", "/companylogos/35.jpg", "/companylogos/36.jpg",
  "/companylogos/37.jpg", "/companylogos/38.jpg", "/companylogos/39.jpg", "/companylogos/40.jpg",
  "/companylogos/41.jpg", "/companylogos/42.jpg", "/companylogos/43.jpg", "/companylogos/44.jpg"
];

const loopedLogos = [...logos, ...logos];


export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <>
      <section className="relative h-[90vh] pt-56 flex items-center justify-center text-white">
        {/* Background Video or Image */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="/images/hero-poster.jpg"
          >
            <source src="/konn.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative text-center max-w-4xl px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">INDTEC EXPO - 2025</h1>
          <p className="mt-2 text-xl md:text-2xl">NOVEMBER 20 – 21 - 22</p>
          <p>Hotel Hills Exhibition Center</p>
          <p>(Bangalore-Chennai-Coimbatore Highway), Hosur, Tamilnadu, India</p>
          <p className="mt-4 text-lg md:text-xl font-medium">
            India&apos;s Leading Industrial Technology Exhibition
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-9 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
             text-white text-base sm:text-lg font-[cursive] font-semibold rounded-full shadow-xl 
             hover:shadow-2xl transition-all duration-300"
            >
              REGISTER
            </button>

          </div>
          <VisitorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </motion.div>
      </section>

      <section className="relative py-12 bg-white via-red-800 to-red-900 text-white">
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-10 "
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20, // Adjust speed here
            }}
          >
            {loopedLogos.map((src, index) => (
              <div key={index} className="min-w-[100px] flex items-center ">
                <Image src={src} alt={`Logo ${index}`} width={100} height={40} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white text-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">About the Expo</h2>
            <p className="text-lg mb-6">
              INDTEC EXPO 2025 is India’s premier industrial technology event, showcasing cutting-edge innovations, machinery, and sustainable solutions. Network with top manufacturers, suppliers, and industry leaders over three dynamic days in Hosur.
            </p>
            <Link href="/aboutUs">
              <button className="px-9 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
             text-white text-base sm:text-lg font-[cursive] font-semibold rounded-full shadow-xl 
             hover:shadow-2xl transition-all duration-300">
                LEARN MORE
              </button>
            </Link>
          </motion.div>

          {/* Media: You can switch between video or image carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/aboutus.png" // Replace with your image path
              alt="About Expo"
              layout="intrinsic"
              objectFit="cover"
              width={600}
              height={400}
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Gallery Preview
          </motion.h2>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
            {images.map((img, idx) => (
              <motion.div
                key={img}
                className="overflow-hidden rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={`/${img}`}
                  alt={`Gallery ${idx + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/gallery">
              <button className="px-9 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
             text-white text-base sm:text-lg font-[cursive] font-semibold rounded-full shadow-xl 
             hover:shadow-2xl transition-all duration-300">
                VIEW FULL GALLERY
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Who Should Attend?
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Whether you&apos;re a business owner, industry professional, startup, or student —
            INDTEC EXPO 2025 is the ultimate opportunity to explore innovations,
            make connections, and grow your impact in industrial technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-9 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
             text-white text-base sm:text-lg font-[cursive] font-semibold rounded-full shadow-xl 
             hover:shadow-2xl transition-all duration-300"
            >
              REGISTER AS VISITOR
            </button>
          </motion.div>
        </div>
      </section>

      {/* <section className="bg-white py-12">
        <div className="w-full px-4"> */}
      <YouTubeAutoSlider />
      {/* </div>
      </section> */}

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Landmark className="w-6 h-6 text-blue-600" />
            VENUE & LOCATION
          </motion.h2>

          <motion.p
            className="text-center text-lg text-gray-700 mb-8 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <MapPin className="w-5 h-5 text-red-500" />
            Hotel Hills Exhibition Center, (Bangalore-Chennai-Coimbatore Highway), Hosur, Tamil Nadu, India
          </motion.p>

          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.2090746492484!2d77.82978467593387!3d12.74143792065624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6a18cd0c1ad1%3A0x4a3c1722b1f2d5b!2sHotel%20Hills%2C%20Hosur!5e0!3m2!1sen!2sin!4v1713772732981!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.div
            className="mt-6 text-gray-600 text-sm text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>🚗 Parking available at the venue. Accessible by public transport and taxis.</p>
          </motion.div>
        </div>
      </section>



      <footer className="bg-white text-black py-10 px-6 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Social Icons */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Image
              src="/IndtecExpologo.jpg"
              alt="Logo"
              width={250}
              height={250}
              className="w-[200px] h-56 object-contain"
            />
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-black transition">Download PEDC Brochure</a></li>
              <li><a href="#" className="hover:text-black transition">2017-2018 Schedule</a></li>
              <li><a href="#" className="hover:text-black transition">2017-2018 Calendar</a></li>
              <li><a href="#" className="hover:text-black transition">Account Access</a></li>
              <li><a href="#" className="hover:text-black transition">After School Pickup</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-3 text-gray-600">
              <li><Link href="/" className="hover:text-black transition">Home</Link></li>
              <li><Link href="/aboutUs" className="hover:text-black transition">About</Link></li>
              <li><Link href="/exhibitors" className="hover:text-black transition">Exhibitors</Link></li>
              <li><Link href="/visitors" className="hover:text-black transition">Visitor</Link></li>
              <li><Link href="/" className="hover:text-black transition">SPONSORSHIP
              </Link></li>
              <li><Link href="/aboutUs" className="hover:text-black transition">PUBLICITY</Link></li>
              <li><Link href="/exhibitors" className="hover:text-black transition">Contact US</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <div className="space-y-5 text-sm text-gray-700">

              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 text-red-500" />
                <p>
                  #372/1, 3rd Floor, <br /> 4th Stage, 8th Main Road,
                  Basaweshwaranagar, Bangalore,<br />
                  Karnataka, India - 560079
                </p>
              </div>
              <div className='flex items-center gap-2'><Building size={28} className="text-blue-600" />
                <span className="text-[11px]">JAGUAR MEDIA AND ENTERTAINMENTS LLP</span></div>
              <div className="flex items-start space-x-3">
                <Phone size={20} className="mt-1 text-blue-600" />
                <div className="grid grid-cols-2 gap-x-2 gap-y-1">

                  <p>+91 7406213221</p>
                  <p>+91 7406213223</p>
                  <p>+080 23238677</p>
                  <p>+080 23238699</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={20} className="mt-1 text-green-600" />
                <a
                  href="http://www.jaguarmedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline hover:text-blue-900"
                >
                  www.jaguarmedia.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-10 border-t pt-4">
          © JAGUAR MEDIA AND ENTERTAINMENTS LLP · 2025
        </div>
      </footer>
    </>
  )
}