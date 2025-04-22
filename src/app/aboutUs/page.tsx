"use client"
import { motion } from "framer-motion";
import {
  Users, Settings, Briefcase,
  Landmark, CheckCircle, MonitorPlay, Layers,
  MessageSquare, Handshake, Rocket, Award,
  MessageCircle, CalendarCheck, Mail, MapPin,
  Ruler, Building, History, Package, Code
} from "lucide-react";
import Link from "next/link";

const attendees = [
  { label: "Manufacturers", icon: Package },
  { label: "Engineers", icon: Settings },
  { label: "Distributors", icon: Users },
  { label: "Tech Enthusiasts", icon: Code },
  { label: "Investors / Startups", icon: Briefcase },
  { label: "Policy Makers", icon: Landmark },
];

const highlights = [
  { name: "100+ Exhibitors", icon: <CheckCircle size={40} /> },
  { name: "Live Machinery Demos", icon: <MonitorPlay size={40} /> },
  { name: "Tech Showcases", icon: <Layers size={40} /> },
  { name: "Panel Discussions", icon: <MessageSquare size={40} /> },
  { name: "B2B Meetings", icon: <Handshake size={40} /> },
  { name: "Startup Zone", icon: <Rocket size={40} /> },
  { name: "Awards / Recognitions", icon: <Award size={40} /> },
];

const stats = [
  {
    icon: <Users className="h-8 w-8 text-green-600" />,
    value: '10,000+',
    label: 'Visitors',
  },
  {
    icon: <MapPin className="h-8 w-8 text-green-600" />,
    value: '50+',
    label: 'Cities Represented',
  },
  {
    icon: <Ruler className="h-8 w-8 text-green-600" />,
    value: '3000 sq. ft.',
    label: 'Exhibition Area',
  },
]


export default function AboutUs(){
  return (
    <>
      <section className="text-center py-16 bg-gray-100 pt-64">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About INDTEC EXPO 2025
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          INDTEC EXPO is a premier industrial technology event connecting innovators, manufacturers, and tech professionals under one roof.
        </motion.p>
      </section>
      <section className="py-16 bg-white text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mission & Vision
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          INDTEC EXPO exists to drive industrial innovation, foster business networking, and promote technological advancements. Our mission is to connect industry leaders, startups, and professionals, enabling collaborations that fuel growth and development.
        </motion.p>
      </section>
      <section className="py-16 bg-gray-100 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Who Should Attend?
        </motion.h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {attendees.map(({ label, icon: Icon }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Icon size={40} className="text-blue-600" />
              <p className="mt-4 text-lg font-medium text-gray-800">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What to Expect</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-100 shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {highlight.icon}
              <p className="mt-2 text-lg font-semibold">{highlight.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-12 px-4 md:px-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            <History className="h-10 w-10 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Since 2018 – A Legacy of Innovation</h2>
          <p className="text-lg text-gray-600">
            <strong>INDTEC EXPO</strong> has been a go-to platform for connecting industrial leaders, fostering innovation, and showcasing cutting-edge technology.
            Every year, it continues to grow in scale, reputation, and global relevance.
          </p>
        </motion.div>
      </section>
      <section className="py-12 px-4 md:px-12 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            <Building className="h-10 w-10 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Organized by Jaguar Media & Entertainment LLP</h2>
          <p className="text-lg text-gray-600 mb-4">
            A leading event management and media company dedicated to curating impactful industrial experiences through innovation, creativity, and collaboration.
          </p>
          <div className="space-x-4">
            <Link
              href="/contact"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              Contact the Organizer
            </Link>
            <Link
              href="/sponsor"
              className="inline-block text-indigo-600 underline hover:text-indigo-800 transition"
            >
              Sponsor Info
            </Link>
          </div>
        </motion.div>
      </section>
      <section className="py-12 px-4 md:px-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Last Year’s Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-2">{stat.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-700">{stat.value}</h3>
                <p className="text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="py-16 px-4 md:px-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to be part of INDTEC EXPO 2025?</h2>
          <p className="text-lg text-gray-600 mb-8">Join us to connect, showcase, and grow in the world of industrial tech.</p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/register">
              <span className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                Register to Attend
              </span>
            </Link>
            <Link href="/exhibitor">
              <span className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition">
                Become an Exhibitor
              </span>
            </Link>
            <Link href="/contact">
              <span className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition">
                <Mail className="w-5 h-5" />
                Contact the Organizer
              </span>
            </Link>
          </div>
        </motion.div>
      </section>
      <section className="py-16 px-4 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Quotes from Past Participants */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <MessageCircle className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What People Are Saying</h2>
            <blockquote className="italic text-gray-600">
              “INDTEC EXPO was a game-changer for our startup – the exposure, networking, and leads were phenomenal.”
            </blockquote>
            <p className="mt-2 text-sm text-gray-500">– R. Sharma, Founder of TechNova</p>
          </motion.div>

          {/* Timeline of Growth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">
              <CalendarCheck className="h-8 w-8 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Event Growth Timeline</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">2018</h3>
                <p className="text-sm text-gray-500">Inaugural edition, 1000+ attendees</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">2022</h3>
                <p className="text-sm text-gray-500">Expanded B2B zone & 5000+ visitors</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700">2024</h3>
                <p className="text-sm text-gray-500">Global exhibitors & 10,000+ attendees</p>
              </div>
            </div>
          </motion.div>

          {/* Video or Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Watch the Vibe</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg mx-auto max-w-3xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="INDTEC EXPO Promo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
