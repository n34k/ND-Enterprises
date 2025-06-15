import React, { useState } from 'react';
import logo from '../assets/images/logo-white-transparent.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 bg-primary/60 backdrop-blur-md shadow-lg">
      <div className="relative">
        <div className="flex justify-between items-center px-5 py-3 text-text">
          {/* Logo */}
          <a href="#main" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="ND Enterprises" className="h-20 cursor-pointer transition duration-300 transform hover:scale-110"/>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-20 items-center">
            <a href="#who" className="p-3 font-bold transition duration-300 transform hover:text-pop hover:scale-110 hover:bg-white hover:bg-opacity-10 rounded-md">About Us</a>
            <a href="#services" className="p-3 font-bold transition duration-300 transform hover:text-pop hover:scale-110 hover:bg-white hover:bg-opacity-10 rounded-md">Services</a>
            <a href="#products" className="p-3 font-bold transition duration-300 transform hover:text-pop hover:scale-110 hover:bg-white hover:bg-opacity-10 rounded-md">Products</a>
          </nav>

          {/* Desktop Button */}
          <a href="#contact" className="hidden md:block">
            <button className="bg-button font-bold rounded-3xl p-3 transition duration-300 hover:text-pop hover:scale-110">Get Started</button>
          </a>

          {/* Mobile Toggle */}
          <button className="md:hidden z-50" onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen
              ? <XMarkIcon className="h-8 w-8" />
              : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`fixed flex flex-col items-center space-y-8 rounded-b-3xl md:hidden w-full bg-primary/60 backdrop-blur-md shadow-lg transition-all duration-500 ease-in-out overflow-hidden 
          ${menuOpen ? 'max-h-[60vh] p-5 ' : 'max-h-0'} `}
        >
          <a href="#who" onClick={() => setMenuOpen(false)} className="text-2xl font-bold hover:text-pop">About Us</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-2xl font-bold hover:text-pop">Services</a>
          <a href="#products" onClick={() => setMenuOpen(false)} className="text-2xl font-bold hover:text-pop">Products</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            <button className="bg-button font-bold rounded-3xl px-6 py-3 text-xl hover:text-pop transition">Get Started</button>
          </a>
        </div>
      </div>
    </header>
  );
}
