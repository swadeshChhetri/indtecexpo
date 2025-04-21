'use client'
import React from 'react'
import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Menu, ChevronDown } from "lucide-react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import ExhibitorForm from './BookingModal';

// import Visitors from './../app/visitors/page';

type HeaderProps = {
  onContactClick: () => void;
};

const Header = ({ onContactClick }: HeaderProps) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className="bg-white py-1 text-black text-sm md:px-6 flex justify-between items-center">

        {/* Logo */}

        <Link href={"/"} className="z-[5]" >
          <Image src="/IndtecExpologo.jpg" alt="Logo" width={198} height={4} className="w-[100%]" />
        </Link>
        <div>
          <p className="text-center font-semibold">Concurrent Show</p>

          <div className="flex items-center gap-4 px-4 py-2">
            {["l1", "l2", "l3", "l4", "l5", "l6"].map((logo, index) => (
              <Link href="/" key={index} className="z-[5]">
                <Image
                  src={`/${logo}.jpeg`}
                  alt={`Logo ${index + 1}`}
                  width={100}
                  height={100}
                  className="object-contain w-[80px] h-[60px]"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-2 items-end">
          <Link href={"/"} className="z-[5]" >
            <p className='text-center'></p>
            <Image src="/INDGT.png"
              alt="Logo"
              width={150}
              height={60}
              className="h-32 object-contain" />
          </Link>
          <Link href={"/"} className="z-[5] flex flex-col items-center justify-end h-36">
            <p className="text-xs mb-1">Organized By</p>
            <Image
              src="/KGE.png"
              alt="Logo"
              width={150}
              height={60}
              className="h-32 object-contain"
            />
          </Link>

          <Link href={"/"} className="z-[5] flex flex-col items-center justify-end h-36">
            <p className="text-xs mb-1">Marketed By</p>
            <Image
              src="/JGR.png"
              alt="Logo"
              width={140}
              height={60}
              className="h-36 object-contain"
            />
          </Link>
        </div>
        {/* <Image src="/logo.png" alt="Logo" width={80} height={4} className="w-[100%]" /> */}



      </div>

      {/* Navigation Bar */}
      <nav className="bg-black pl-12 shadow-md md:flex justify-between items-center py-3 relative ">
        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex space-x-6 text-white items-center font-[1px]">
          <li className={`${pathname === '/' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <Link className='text-[14px]' href="/">HOME</Link>
          </li>
          <li className={`${pathname === '/aboutUs' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <div className='flex'>
              <Link className='text-[14px]' href="/aboutUs">ABOUT US</Link>
            </div>
          </li>
          {/* <li className={`${pathname === '/organisers' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <Link href="/organisers">ORGANISERS</Link>
          </li> */}
          <li className={`relative group flex ${pathname === '/exhibitors' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <div className="hover:text-blue-600 cursor-pointer text-[14px]">EXHIBITORS </div>
            <ChevronDown className="w-4 h-4 mt-[2px]" />
            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-40 w-56">
              <div className="py-2 px-4 text-[14px] flex flex-col space-y-2">
                {/* <Link href={"/visitor-registration"} className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Visitor Registration</Link>
                <Link href={"/visitor-profile"} className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Visitor Profile</Link> */}
                <Link href={"/"}>Exhibitors Registration</Link>
                <Link href={"/"}>Exhibitors Profile</Link>
                <Link href={"/"}>Partcipation Fee</Link>
                <Link href={"/"}>Brochure</Link>
                <Link href={"/"}>Exhibitors Manual</Link>
                <Link href={"/"}>Hotel&apos;s & Accommodation</Link>
              </div>
            </div>
          </li>
          <li className={`relative group flex ${pathname === '/visitors' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <div className="hover:text-blue-600 cursor-pointer text-[14px]">VISITORS </div>
            <ChevronDown className="w-4 h-4 mt-[2px]" />
            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-40 w-58">
              <div className="py-2 px-4 text-[14px] flex flex-col space-y-2">
                {/* <Link href="#" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Why Exhibit</Link>
                <Link href="/exhibitors" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">
                  Exhibitor Brochure Download
                </Link>
                <Link href={"/SpaceBooking"} className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Sector Profile</Link>
                <Link href={"/SpaceBooking"} className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Stall Booking</Link> */}
                <Link href={"/"}>Visitor Registration</Link>
                <Link href={"/"}>Visitor Profile</Link>
                <Link href={"/"}>Visitor Timings</Link>
                <Link href={"/"}>List of Exhibitors</Link>
                <Link href={"/"}>How to Reach?</Link>
              </div>
            </div>
          </li>
          <li className={`relative group flex ${pathname === '/visitors' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <div className="hover:text-blue-600 cursor-pointer text-[14px]">SPONSORSHIP </div>
            <ChevronDown className="w-4 h-4 mt-[2px]" />
            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-40 w-58">
              <div className="py-2 px-4 text-[14px] flex flex-col space-y-2">
                {/* <Link href="#" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Why Exhibit</Link>
                <Link href="/exhibitors" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">
                  Exhibitor Brochure Download
                </Link>
                <Link href={"/SpaceBooking"} className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Sector Profile</Link>
                <Link href={"/SpaceBooking"} className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Stall Booking</Link> */}
                <Link href={"/"}>Title Sponsors</Link>
                <Link href={"/"}>Platinium Sponsors</Link>
                <Link href={"/"}>Diamond Sponsors</Link>
                <Link href={"/"}>Gold Sponsors</Link>
                <Link href={"/"}>Silver Sponsors</Link>
                <Link href={"/"}>Lanyard Sponsors</Link>
                <Link href={"/"}>Registration Sponsors</Link>
              </div>
            </div>
          </li>
          <li className={`relative group flex ${pathname === '/publicity' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <div className="hover:text-blue-600 cursor-pointer text-[14px]">PUBLICITY</div>
          </li>
          <li className={`relative group flex ${pathname === '/floorplan' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <Link href="/gallery" className='text-[14px]' >FLOOR PLAN</Link>
          </li>

          <li className={`relative group flex ${pathname === '/review' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <Link className='text-[14px]' href="/gallery">REVIEW</Link>

          </li>
          <li className={`relative group flex ${pathname === '/gallery' ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'}`}>
            <Link href="/gallery" className='text-[14px]'>GALLERY</Link>
            <ChevronDown className="w-4 h-4 mt-[2px]" />
            <div className="absolute top-full left-0 bg-white shadow-lg mt-2 rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-40 w-48">
              <div className="py-2 px-4 text-[14px] flex flex-col space-y-2">
                <Link href="#" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">Photos</Link>
                <Link href="/exhibitors" className="block px-4 py-2 hover:bg-blue-50 text-sm text-gray-700">
                  Videos
                </Link>
              </div>
            </div>
          </li>

          <li className="hover:text-blue-600">
            <button className='text-[14px]'
              onClick={onContactClick}
            >CONTACT US</button>
          </li>
          <li className="">
            <button onClick={() => setIsModalOpen(true)}
              className="px-3 py-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
             text-white text-base sm:text-sm font-[cursive] font-semibold rounded-full shadow-xl 
             hover:shadow-2xl transition-all duration-300"
            >
              BOOK YOUR SPACE
            </button>
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
                  <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                    onClick={() => setIsModalOpen(false)}
                  >
                    ❌
                  </button>

                  {/* Put your full form component here */}
                  <ExhibitorForm onClose={() => setIsModalOpen(false)} />
                </div>
              </div>
            )}
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