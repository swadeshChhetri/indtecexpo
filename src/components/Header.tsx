'use client'
import React from 'react'
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";
import Link from 'next/link';
import { usePathname } from "next/navigation";


const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos < 50) {
        setVisible(true); // always show at the top
      } else {
        setVisible(prevScrollPos > currentScrollPos); // show if scrolling up
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={`w-full pt-4 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 z-50 bg-white`}>
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md px-6 py-6 md:px-12 flex justify-between items-center h-16 relative ">
        {/* Logo */}
        <Link href={"/"} className="z-[5]" >
          <Image src="/logo.png" alt="Logo" width={100} height={20} className="rounded-[5rem] w-[73%]" />
        </Link>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex space-x-6 text-black font-semibold items-center">
          <li className={`${pathname === '/' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <Link href="/">Home</Link>
          </li>

          <li className={`${pathname === '/aboutUs' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <Link href="/aboutUs">About</Link>
          </li>

          <li className={`relative group ${pathname === '/exhibitors' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <div className="hover:text-blue-600 cursor-pointer">Exhibitors</div>
            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-40 w-48">
              <div className="py-2">
                <Link href="#" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Why Exhibit?</Link>
                <Link href="/exhibitors" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">
                  Book My Stall
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Sponsorship</Link>
              </div>
            </div>
          </li>

          <li className={`${pathname === '/visitors' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <Link href="/visitors">Visitor</Link>
          </li>
          <div className="">
            <button
              onClick={() => setIsOpen(true)}
              className="px-5 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
             text-white text-base sm:text-lg font-[cursive] font-semibold rounded-full shadow-xl 
             hover:shadow-2xl transition-all duration-300"
            >
              Contact Us
            </button>

            {isOpen && (
              <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm z-50" onClick={() => setIsOpen(false)}>
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-lg mt-96"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Get in Touch</h2>
                    <X
                      className="cursor-pointer text-gray-500 hover:text-gray-700"
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                  <p className="text-gray-600 mb-4">Nunc erat cursus tellus gravida.</p>

                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="email"
                        placeholder="Email"
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <textarea
                      placeholder="What do you have in mind?"
                      className="p-3 border border-gray-300 rounded-lg w-full h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition"
                    >
                      Submit
                    </button>
                  </form>
                </motion.div>
              </div>
            )}
          </div>
        </ul>

        {/* Burger Menu Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Slide Menu - Mobile */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 z-50 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex flex-col space-y-6">
            <button className="self-end" onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
            <a href="#" className="hover:text-blue-600">HOME</a>
            <Link href={"/aboutUs"} className="text-blue-600 border-b-2 border-blue-600">ABOUT US</Link>
            <a href="#" className="hover:text-blue-600">PROJECTS</a>
            <a href="#" className="hover:text-blue-600">CONTACT US</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;