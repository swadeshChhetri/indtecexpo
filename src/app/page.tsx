
'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'
import Image from 'next/image';
import {
  Users,
  MonitorPlay,
  Handshake,
  Mic,
  Network, CalendarClock,  Facebook, Twitter, Instagram, Mail, Phone, MapPin
} from 'lucide-react';
import Link from 'next/link';

const targetDate = new Date('2025-04-28T09:00:00') // Set your event time
const highlights = [
  {
    title: '100+ Exhibitors',
    icon: Users,
    description: 'Explore products and innovations from top industrial brands.',
  },
  {
    title: 'Live Demonstrations',
    icon: MonitorPlay,
    description: 'Experience tech in action through real-time demos.',
  },
  {
    title: 'Industry Networking',
    icon: Handshake,
    description: 'Connect with key players and grow your business.',
  },
  {
    title: 'Panel Discussions',
    icon: Mic,
    description: 'Gain insights from expert-led industry panels.',
  },
  {
    title: 'Business Matchmaking',
    icon: Network,
    description: 'Meet buyers, suppliers, and investors for growth.',
  },
  {
    title: 'Industry Networking',
    icon: Handshake,
    description: 'Connect with key players and grow your business.',
  },
];
const schedule = [
  {
    time: '10:00 AM',
    title: 'Opening Ceremony & Keynote',
    desc: 'Welcome address by industry leaders and organizers.',
  },
  {
    time: '11:30 AM',
    title: 'Live Product Demonstrations',
    desc: 'Hands-on sessions with advanced industrial machinery.',
  },
  {
    time: '02:00 PM',
    title: 'Panel: Future of Manufacturing',
    desc: 'Discussion with experts on automation and sustainability.',
  },
  {
    time: '04:00 PM',
    title: 'Networking & Matchmaking',
    desc: 'Meet exhibitors, sponsors, and fellow attendees.',
  },
]
const exhibitors = [
  {
    id: 1,
    image: "man1.jpg",
  },
  {
    id: 2,
    image: 'man2.jpg'
  },
  {
    id: 3,
    image: 'man3.jpg',
  },
  {
    id: 4,
    image: 'man4.jpg',
  },
  {
    id: 5,
    image: 'man5.png',
  },
  {
    id: 6,
    image: 'man6.jpg',
  },
  {
    id: 7,
    image: 'man7.jpg',
  },
  {
    id: 8,
    image: 'man8.jpg',
  },
];
const images = [
  'g1.jpg',
  'g2.jpg',
  'g3.jpg',
  'g4.jpg',
  'g5.jpg',
  'g6.jpg',
];


function getTimeLeft() {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / 1000 / 60) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return { days, hours, minutes, seconds };
}


export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])


  return (
    <>
      <section className="relative h-[90vh] flex items-center justify-center text-white">
        {/* Background Video or Image */}
        <div className="absolute inset-0">
          {/* <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="/images/hero-poster.jpg"
          >
            <source src="/videos/expo-loop.mp4" type="video/mp4" />
          </video> */}
          <iframe
            src="https://www.youtube.com/embed/zUTJv5-CCW4?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=zUTJv5-CCW4"
            className="w-full h-full object-cover"
            title="INDTEC Expo Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center max-w-4xl px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">INDTEC EXPO 2025</h1>
          <p className="mt-2 text-xl md:text-2xl">April 11–13 · Hosur</p>
          <p className="mt-4 text-lg md:text-xl font-medium">
            India&apos;s Leading Industrial Technology Exhibition
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="#register">
            <button
              // onClick={() => setIsOpen(true)}
              className="px-5 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
             text-white text-base sm:text-lg font-[cursive] font-semibold rounded-full shadow-xl 
             hover:shadow-2xl transition-all duration-300"
            >
              Register
            </button>
            </a>
            <a href="#schedule">
              <button className="px-6 py-2 rounded-full border border-white text-white hover:bg-white/10 transition">
                View Schedule
              </button>
            </a>
          </div>
        </motion.div>
      </section>
      <section className="relative py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-stars opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-extrabold mb-8 tracking-wide">
            Countdown to the <span className="text-blue-400">Expo</span>
          </h2>

          <div className="flex justify-center flex-wrap gap-6">
            {mounted && Object.entries(timeLeft).map(([label, value], idx) => (
              <motion.div
                key={label}
                className="w-24 h-24 flex flex-col justify-center items-center rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <span className="text-4xl font-extrabold text-blue-300 drop-shadow-lg">
                  {value.toString().padStart(2, '0')}
                </span>
                <span className="uppercase text-sm tracking-wide mt-1 opacity-80">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white text-gray-900 py-16">
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
            <Link href="/about">
              <button className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                Learn More
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
            {/* Example: Video */}
            {/* <video
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              poster="/images/about-poster.jpg"
            >
              <source src="/videos/about-expo.mp4" type="video/mp4" />
            </video> */}
            <Image
              src="/aboutus.png" // Replace with your image path
              alt="About Expo"
              layout="intrinsic"
              objectFit="cover"
              width={600}
              height={400}
              priority
            />

            {/* OR: Replace with image carousel later if preferred */}
          </motion.div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Attend INDTEC EXPO 2025?
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-4 bg-blue-50 rounded-full mb-4">
                  <item.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Event Schedule Preview
          </motion.h2>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-blue-200"></div>

            <div className="space-y-12 pl-16">
              {schedule.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative bg-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Marker on the timeline */}
                  <div className="absolute -left-10 top-6 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow">
                    <span className="text-white text-xs font-bold">{idx + 1}</span>
                  </div>

                  <time className="text-sm font-semibold text-blue-600">
                    {item.time}
                  </time>
                  <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/schedule">
              <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition">
                <CalendarClock className="w-5 h-5" />
                See Full Schedule
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Exhibitors & Partners
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
            {exhibitors.map((logo, idx) => (
              <motion.div
                key={logo.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={`/${logo.image}`}
                  // alt={logo.replace('.png', '')}
                  alt="image"
                  width={150}
                  height={80}
                  className="mx-auto object-contain"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/become-exhibitor">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Become an Exhibitor
              </button>
            </Link>
          </div>
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
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                View Full Gallery
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
            <Link href="/register">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition">
                Register as Visitor
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Venue & Location
          </motion.h2>

          <motion.p
            className="text-center text-lg text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            📍 Hosur Industrial Expo Center, 123 Tech Park Road, Hosur, Tamil Nadu, India
          </motion.p>

          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.207715266889!2d77.83063727593398!3d12.741576120655105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6a0a6ae3b019%3A0x3cc48f7c1174f5e4!2sHosur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712659108200!5m2!1sen!2sin"
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
            <p>
              🚗 Parking available at the venue.
              Accessible by public transport and taxis.
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="bg-white text-black py-10 px-6 md:px-12 lg:px-24 border-t">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Social Icons */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image src="/logo.png" alt="Logo" width={150} height={80} />
            <div className="flex space-x-3">
              <a href="#" className="text-black hover:text-gray-600">
                <Facebook size={28} />
              </a>
              <a href="#" className="text-black hover:text-gray-600">
                <Twitter size={28} />
              </a>
              <a href="#" className="text-black hover:text-gray-600">
                <Instagram size={28} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Download PEDC Brochure
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  2017-2018 Schedule
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  2017-2018 Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Account Access
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  After School Pickup
                </a>
              </li>
            </ul>
          </div>
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              <li>
                <Link href={"/"} className="text-gray-600 hover:text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/aboutUs"} className="text-gray-600 hover:text-black">
                  About
                </Link>
              </li>
              <li>
                <Link href={"/exhibitors"} className="text-gray-600 hover:text-black">
                Exhibitors
                </Link>
              </li>
              <li>
                <Link href={"/visitors"} className="text-gray-600 hover:text-black">
                Visitor
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT DETAILS</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={20} />
                <p className="text-gray-600">
                  2629 Waverly Barn Road Suite 125, Davenport FL 33897
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-blue-600" />
                <p className="text-blue-600">863.424.7355</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={20} />
                <p className="text-gray-600">http://www.jaguarmedia.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          © JAGUAR MEDIA AND ENTERTAINMENTS LLP · 2019
        </div>
      </footer>

    </>
  )
}