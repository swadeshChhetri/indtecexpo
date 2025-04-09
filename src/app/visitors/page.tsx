'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Users, CheckCircle, MonitorPlay, Briefcase, Tag, Mic,
  Rocket,
  PanelTopOpen,
  Lightbulb,
  Pizza, CalendarDays, MapPin, Car, Train, Store, Camera, ChevronDown, Mail, Phone, MessageCircle, Facebook, Twitter, Instagram
} from 'lucide-react';
import Link from 'next/link';

const points = [
  {
    icon: <Lightbulb className="text-indigo-600 w-6 h-6" />,
    text: 'Discover the latest trends and innovations',
  },
  {
    icon: <Users className="text-indigo-600 w-6 h-6" />,
    text: 'Meet industry leaders and experts',
  },
  {
    icon: <MonitorPlay className="text-indigo-600 w-6 h-6" />,
    text: 'Attend live demos and workshops',
  },
  {
    icon: <Briefcase className="text-indigo-600 w-6 h-6" />,
    text: 'Network with businesses, startups, and professionals',
  },
  {
    icon: <Tag className="text-indigo-600 w-6 h-6" />,
    text: 'Exclusive deals and offers available only on-site',
  },
];

const highlights = [
  {
    icon: <Mic className="w-6 h-6 text-indigo-600" />,
    title: 'Keynote Speakers',
    description: 'Get inspired by global industry leaders and visionaries sharing exclusive insights.',
  },
  {
    icon: <Rocket className="w-6 h-6 text-indigo-600" />,
    title: 'Live Demos & Product Launches',
    description: 'Be the first to witness breakthrough tech and hands-on product demos.',
  },
  {
    icon: <PanelTopOpen className="w-6 h-6 text-indigo-600" />,
    title: 'Panel Discussions & Workshops',
    description: 'Engage in thought-provoking sessions and interactive learning experiences.',
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-indigo-600" />,
    title: 'Startups & Innovation Zones',
    description: 'Explore the freshest ideas and disruptive startups shaping the future.',
  },
  {
    icon: <Pizza className="w-6 h-6 text-indigo-600" />,
    title: 'Entertainment & Food Courts',
    description: 'Enjoy live music, entertainment zones, and diverse food experiences.',
  },
];

const passes = [
  {
    name: 'Free Pass',
    price: 'Free',
    deadline: 'Register by May 15, 2025',
    features: [
      'Expo Hall Access',
      'Live Demos',
      'Startup Showcase',
    ],
  },
  {
    name: 'Premium Pass',
    price: '$49',
    deadline: 'Register by May 15, 2025',
    features: [
      'All Free Pass Features',
      'Access to Workshops',
      'Speaker Sessions',
      'Exclusive Deals',
    ],
  },
  {
    name: 'VIP Pass',
    price: '$129',
    deadline: 'Register by May 10, 2025',
    features: [
      'All Premium Pass Features',
      'VIP Lounge Access',
      'Priority Seating',
      'Meet & Greet with Speakers',
    ],
  },
];

const stats = [
  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    label: 'Visitors',
    value: '20,000+',
  },
  {
    icon: <Store className="w-6 h-6 text-indigo-600" />,
    label: 'Exhibitors',
    value: '500+',
  },
  {
    icon: <Camera className="w-6 h-6 text-indigo-600" />,
    label: 'Photos & Videos Captured',
    value: '5,000+',
  },
];

const testimonials = [
  {
    name: 'Samantha Lee',
    quote: "Absolutely incredible! The energy, innovation, and networking were unmatched.",
  },
  {
    name: 'Rahul Verma',
    quote: "I discovered three startups I now work with — amazing exposure and connections!",
  },
];

const faqs = [
  {
    question: 'Is registration free?',
    answer: 'Yes! A Free Visitor Pass is available. Premium and VIP passes include extra perks at a small cost.',
  },
  {
    question: 'Can I bring kids?',
    answer: 'Children under 12 are allowed with an accompanying adult. Some areas may be restricted.',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, paid on-site parking is available. Nearby public parking garages are also accessible.',
  },
  {
    question: 'What are the timings?',
    answer: 'The expo runs from 10 AM to 6 PM daily from June 12 to June 14, 2025.',
  },
  {
    question: 'How to get a visitor badge?',
    answer: 'After registering, you’ll receive a confirmation email. Show it at the registration desk to collect your badge.',
  },
];

const Visitors = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      <section className="w-full min-h-screen bg-gradient-to-br from-[#bbd0ff] via-[#b8c0ff] to-[#c8b6ff] flex items-center justify-center px-4">
        <motion.div
          className="max-w-4xl text-center space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Experience the Future of Technology at TechVerse Expo 2025
          </h1>
          <p className="text-lg md:text-xl text-gray-800">
            Join thousands of visitors at the most anticipated technology expo of the year.
          </p>
          <Link href="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-indigo-700 font-semibold shadow-lg hover:bg-indigo-100 transition"
            >
              Get Free Visitor Pass <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </section>
      <section className="w-full py-20 bg-white px-4">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Why Attend?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mt-6">
            {points.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
                whileHover={{ scale: 1.02 }}
              >
                {item.icon}
                <p className="text-gray-800 font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="w-full py-20 bg-gray-50 px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Event Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="w-full py-20 bg-white px-4">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Visitor Registration
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {passes.map((pass, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-xl font-semibold text-indigo-700">{pass.name}</h3>
                <p className="text-2xl font-bold text-gray-900 mt-2">{pass.price}</p>
                <p className="text-sm text-gray-600 mb-4">{pass.deadline}</p>

                <ul className="space-y-2 text-left flex-1">
                  {pass.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={18} className="text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/register" className="mt-6">
                  <button className="w-full bg-indigo-600 text-white font-medium py-2 rounded-xl hover:bg-indigo-700 transition">
                    Register Now
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="w-full py-20 bg-gray-50 px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Venue & Date Info
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Info Box */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CalendarDays className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Event Dates</h4>
                  <p className="text-gray-700">June 12 – June 14, 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-700">
                    Tech Convention Center, San Francisco, CA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Car className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Parking</h4>
                  <p className="text-gray-700">
                    On-site paid parking is available. Public parking garages are also nearby.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Train className="w-6 h-6 text-indigo-600 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Travel Tips</h4>
                  <p className="text-gray-700">
                    Accessible via BART, Caltrain, and airport shuttles. Hotels within walking distance.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019653189171!2d-122.41990628467835!3d37.77492977975925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f89a7b69%3A0x9230c2a2f4a5c5e1!2sMoscone%20Center!5e0!3m2!1sen!2sus!4v1689800311111"
                width="100%"
                height="350"
                allowFullScreen
                loading="lazy"
                className="border-0 w-full h-[350px]"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="w-full py-20 bg-white px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Past Event Recap
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">
              A glimpse into last year’s unforgettable experience.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
            {stats.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow">
                <div className="flex justify-center mb-2">{item.icon}</div>
                <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-full h-56 rounded-xl overflow-hidden shadow-sm"
              >
                <img
                  src={`https://source.unsplash.com/600x400/?expo,event,tech&sig=${i}`}
                  alt={`Event photo ${i}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow">
                <p className="italic text-gray-700">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-indigo-600">
                  — {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="w-full py-20 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
                  onClick={() => toggle(index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-4 text-gray-600 overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-20 bg-white px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Contact & Support
            </h2>
            <p className="text-gray-600 mt-2">
              We’re here to help with any questions or assistance you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-indigo-600 w-5 h-5" />
                <p>contact@expoevent.com</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-indigo-600 w-5 h-5" />
                <p>+1 (123) 456-7890</p>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle className="text-indigo-600 w-5 h-5" />
                <p>
                  <a
                    href="#live-chat"
                    className="text-indigo-600 underline hover:text-indigo-800"
                  >
                    Start Live Chat
                  </a>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="font-semibold text-gray-700">Follow us on social media:</p>
              <div className="flex items-center gap-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="text-indigo-600 hover:text-indigo-800 w-6 h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="text-indigo-600 hover:text-indigo-800 w-6 h-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="text-indigo-600 hover:text-indigo-800 w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Visitors;
