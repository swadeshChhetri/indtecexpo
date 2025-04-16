'use client'
import React from 'react'
import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Facebook, Twitter, Instagram, Menu, Phone, ChevronDown } from "lucide-react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
// import Visitors from './../app/visitors/page';

type HeaderProps = {
  onContactClick: () => void;
};

const Header = ({ onContactClick }: HeaderProps) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
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
    <header className={`w-full transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 z-20 bg-white`}>
      {/* Top Bar */}
      <div className="bg-blue-500 py-1 text-white text-sm md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"} className="z-[5]" >
          <Image src="/logo.png" alt="Logo" width={80} height={4} className="w-[100%]" />
        </Link>

        {/* Social Icons */}
        <div className="flex space-x-3 ml-28">
          <a href="#" className="hover:text-gray-300"><Facebook size={20} /></a>
          <a href="#" className="hover:text-gray-300"><Twitter size={20} /></a>
          <a href="#" className="hover:text-gray-300"><Instagram size={20} /></a>
        </div>

        {/* Contact Info */}
        <div className="hidden sm:flex items-center space-x-2">
          <Phone size={20} />
          <span className="font-semibold">CALL US : 863.424.7355</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white pl-20 shadow-md md:flex justify-between items-center py-3 relative ">
        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex space-x-6 text-black items-center">
          <li className={`${pathname === '/' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <Link href="/">HOME</Link>
          </li>
          <li className={`${pathname === '/aboutUs' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <Link href="/aboutUs">ABOUT</Link>
          </li>
          {/* <li className={`${pathname === '/organisers' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <Link href="/organisers">ORGANISERS</Link>
          </li> */}
          <li className={`relative group flex ${pathname === '/visitors' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <div className="hover:text-blue-600 cursor-pointer">VISITOR</div>
            <ChevronDown className="w-4 h-4 mt-[2px]" />
            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-40 w-48">
              <div className="py-2">
                <Link href={"/visitor-registration"} className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Visitor Registration</Link>
                <Link href={"/visitor-profile"} className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Visitor Profile</Link>
              </div>
            </div>
          </li>
          <li className={`relative group flex ${pathname === '/exhibitors' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <div className="hover:text-blue-600 cursor-pointer">EXHIBITORS</div>
            <ChevronDown className="w-4 h-4 mt-[2px]" />
            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-40 w-58">
              <div className="py-2">
                <Link href="#" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Why Exhibit</Link>
                <Link href="/exhibitors" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">
                  Exhibitor Brochure Download
                </Link>
                <Link href={"/SpaceBooking"} className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Sector Profile</Link>
                <Link href={"/SpaceBooking"} className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Stall Booking</Link>
              </div>
            </div>
          </li>
          <li className={`relative group flex ${pathname === '/sponsorship' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <Link href="/sponsorship">SPONSORSHIP</Link>
          </li>
          <li className={`relative group flex ${pathname === '/exhibitors' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <div className="hover:text-blue-600 cursor-pointer">THE FAIR</div>
          </li>
          <li className={`relative group flex ${pathname === '/gallery' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <Link href="/gallery">GALLERY</Link>
            <ChevronDown className="w-4 h-4 mt-[2px]" />
            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-40 w-48">
              <div className="py-2">
                <Link href="#" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Photos</Link>
                <Link href="/exhibitors" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">
                  Videos
                </Link>
              </div>
            </div>
          </li>
          <li className={`relative group flex ${pathname === '/press&media' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <Link href="/gallery">PRESS/MEDIA</Link>
            <ChevronDown className="w-4 h-4 mt-[2px]" />
            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-40 w-62">
              <div className="py-2">
                <Link href="#" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Registration For Media</Link>
                <Link href="/exhibitors" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">
                  Promotional Assets
                </Link>
                <Link href="/exhibitors" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">
                  Press/Media Brochure Download
                </Link>
              </div>
            </div>
          </li>
          <li className="hover:text-blue-600">
            <button
              onClick={onContactClick}
            >CONTACT US</button>
          </li>
          <li className="">
            <Link href={"/SpaceBooking"}
              className="px-4 py-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
             text-white text-base sm:text-sm font-[cursive] font-semibold rounded-full shadow-xl 
             hover:shadow-2xl transition-all duration-300"
            >
              BOOK MY STALL
            </Link>
          </li>
        </ul>

        {/* Burger Menu Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Slide Menu - Mobile */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 z-96 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex flex-col space-y-6 bg-white">
            <button className="self-end" onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
            <Link href={"/"} className={`${pathname === '/' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>HOME</Link>
            <Link href={"/aboutUs"} className={`${pathname === '/aboutUs' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>ABOUT US</Link>
            <Link href={"/aboutUs"} className={`${pathname === '/aboutUs' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>ABOUT US</Link>
            <Link href={"/aboutUs"} className={`${pathname === '/aboutUs' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>ABOUT US</Link>
            <Link href={"/exhibitors"} className={`relative group ${pathname === '/exhibitors' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>Exhibitors</Link>
            <Link href={"/aboutUs"} className={`${pathname === '/aboutUs' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>ABOUT US</Link>
            <Link href={"/visitors"} className={`relative group ${pathname === '/visitors' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>Visitors</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;