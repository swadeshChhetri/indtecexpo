'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ActivitySquare, Users, Briefcase, Mic2, GraduationCap, LayoutGrid, Ticket, Mail, Phone } from 'lucide-react';


const stats = [
  {
    icon: <ActivitySquare className="w-8 h-8 text-indigo-600" />,
    label: 'Exhibitors',
    value: '120+',
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    label: 'Delegates',
    value: '500+',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
    label: 'Business Visitors',
    value: '1,200+',
  },
  {
    icon: <Mic2 className="w-8 h-8 text-indigo-600" />,
    label: 'Sessions & Workshops',
    value: '30+',
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
    label: 'Domain Experts',
    value: '50+',
  },
  {
    icon: <LayoutGrid className="w-8 h-8 text-indigo-600" />,
    label: 'Exhibition Area (sq.mtr)',
    value: '10,000+',
  },
];

const schedule = {
  Day1: [
    {
      time: '10:00 AM',
      topic: 'Opening Ceremony',
      speaker: 'Mr. Rajiv Malhotra',
    },
    {
      time: '11:30 AM',
      topic: 'Future of Tech Exhibitions',
      speaker: 'Dr. Neha Sharma',
    },
  ],
  Day2: [
    {
      time: '10:00 AM',
      topic: 'B2B Networking Session',
      speaker: 'Ms. Priya Verma',
    },
    {
      time: '02:00 PM',
      topic: 'AI in Industry',
      speaker: 'Prof. Arun Joshi',
    },
  ],
} as const;

// 2. Extract the keys as a type
type DayKey = keyof typeof schedule;

// 3. Now initialize your state like this
const days = Object.keys(schedule) as DayKey[];

const speakers = [
  {
    name: 'Neha Sharma',
    title: 'AI Researcher, TechLabs',
    topic: 'AI in Industry',
    image: '/images/speakers/neha.jpg',
  },
  {
    name: 'Rajiv Malhotra',
    title: 'Chairman, ExpoCorp',
    topic: 'Opening Ceremony',
    image: '/images/speakers/rajiv.jpg',
  },
  {
    name: 'Priya Verma',
    title: 'Business Consultant',
    topic: 'B2B Networking Strategies',
    image: '/images/speakers/priya.jpg',
  },
];

const exhibitors = [
  { name: 'TechNova', logo: '/images/exhibitors/technova.png' },
  { name: 'GreenBot', logo: '/images/exhibitors/greenbot.png' },
  { name: 'HealthEdge', logo: '/images/exhibitors/healthedge.png' },
  { name: 'EduNext', logo: '/images/exhibitors/edunext.png' },
  { name: 'AutoCore', logo: '/images/exhibitors/autocore.png' },
  { name: 'FinSmart', logo: '/images/exhibitors/finsmart.png' },
];

const galleryImages = [
  '/images/gallery/img1.jpg',
  '/images/gallery/img2.jpg',
  '/images/gallery/img3.jpg',
  '/images/gallery/img4.jpg',
  '/images/gallery/img5.jpg',
  '/images/gallery/img6.jpg',
];

const tickets = [
  {
    type: 'Visitor Pass',
    features: ['Expo Hall Access', 'Workshops & Sessions', 'Networking Events'],
    price: '₹499',
    cta: 'Register as Visitor',
  },
  {
    type: 'Exhibitor Pass',
    features: ['Booth Space', '2 Staff Entries', 'Listing on Website'],
    price: '₹4,999',
    cta: 'Register as Exhibitor',
  },
];

const sponsors = {
  Gold: [
    '/sponsors/gold1.png',
    '/sponsors/gold2.png',
  ],
  Silver: [
    '/sponsors/silver1.png',
    '/sponsors/silver2.png',
  ],
  Bronze: [
    '/sponsors/bronze1.png',
    '/sponsors/bronze2.png',
  ],
};

const FairHero = () => {

  const [activeDay, setActiveDay] = useState<DayKey>(days[0]);


  return (
    <>
      <motion.section
        className="w-full min-h-[80vh] flex flex-col justify-center pt-64 items-center text-center bg-gradient-to-r from-indigo-50 to-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Global Tech Innovation Fair 2025
        </h1>
        <div className="flex flex-col md:flex-row gap-4 items-center text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <span>July 18–20, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-600" />
            <span>Yeshwantpur Exhibition Center, Bengaluru</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 text-lg rounded-full bg-indigo-600 hover:bg-indigo-700">
            Register Now
          </button>
          <button className="px-6 py-3 text-lg rounded-full border-indigo-600 text-indigo-600 hover:bg-indigo-50">
            Book a Stall
          </button>
          <button className="px-6 py-3 text-lg rounded-full text-indigo-600 hover:underline">
            Learn More
          </button>
        </div>
      </motion.section>
      <motion.section
        className="w-full px-4 py-16 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">
          About the Fair
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          The Global Tech Innovation Fair 2025 brings together leading minds, emerging startups, and industry veterans to explore cutting-edge advancements in technology, sustainability, and digital transformation. This event is a hub for collaboration, learning, and showcasing innovation.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Theme</h3>
            <p className="text-gray-600">Innovation, Sustainability & Future Technologies</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Target Audience</h3>
            <p className="text-gray-600">
              Tech entrepreneurs, developers, investors, researchers, policy makers, and corporate leaders.
            </p>
          </div>
        </div>
      </motion.section>
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Key Highlights
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white shadow-md rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Event Schedule
          </motion.h2>

          <div className="flex justify-center space-x-4 mb-8">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${activeDay === day
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
              >
                {day}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {schedule[activeDay].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 border border-gray-200 p-5 rounded-lg shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-sm text-gray-500">{item.time}</p>
                  <h4 className="text-lg font-semibold text-indigo-700">
                    {item.topic}
                  </h4>
                  <p className="text-gray-600">Speaker: {item.speaker}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <section className="py-16 bg-gray-50 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Domain Experts
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-indigo-500"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{speaker.title}</p>
                <p className="text-sm text-indigo-700 italic">
                  “{speaker.topic}”
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Exhibitors
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            {exhibitors.map((exhibitor, index) => (
              <motion.div
                key={index}
                className="w-36 h-20 flex items-center justify-center bg-gray-100 rounded-lg shadow-sm p-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={exhibitor.logo}
                  alt={exhibitor.name}
                  className="max-h-full max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Gallery Highlights
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={src}
                  alt={`Event image ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Registration & Ticket Info
          </motion.h2>
          <p className="text-gray-600 mb-12">
            Choose the right option below and secure your spot at the event.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tickets.map((ticket, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Ticket className="text-indigo-600 w-8 h-8 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{ticket.type}</h3>
                <ul className="text-gray-600 mb-4 space-y-1">
                  {ticket.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-indigo-700 mb-4">{ticket.price}</p>
                <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition">
                  {ticket.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact & Help
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              className="bg-white p-6 rounded-xl shadow-md space-y-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              className="space-y-6 text-gray-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p>
                Have questions about registration, sponsorship, or participation? Reach out to our
                team — we’re here to help!
              </p>
              <div className="flex items-center gap-3">
                <Mail className="text-indigo-600" />
                <span>info@fairevent.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-indigo-600" />
                <span>+91 98765 43210</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Sponsors & Partners
          </motion.h2>

          {Object.entries(sponsors).map(([tier, logos], idx) => (
            <motion.div
              key={tier}
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{tier} Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
                {logos.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={`${tier} sponsor ${i + 1}`}
                    className="h-20 w-full object-contain grayscale hover:grayscale-0 transition"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FairHero;