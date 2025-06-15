import React from 'react';
import logo from '../assets/images/logo-white-transparent.png';

export default function Header() {
    return (
        <div className='flex sticky top-0 w-full shadow-lg bg-primary/60 z-50 backdrop-blur-md text-text justify-between items-center px-5'>
            <a href="#main"><img src={logo} alt="ND Enterprises" className='h-20 cursor-pointer transition duration-300 transform hover:color hover:scale-110'/></a>
            <div className='flex justify-center gap-20'>
                <a className="p-3 cursor-pointer font-bold transition duration-300 transform hover:text-pop hover:scale-110 hover:bg-white hover:bg-opacity-10 rounded-md" href="#who">About Us</a>
                <a className="p-3 cursor-pointer font-bold transition duration-300 transform hover:text-pop hover:scale-110 hover:bg-white hover:bg-opacity-10 rounded-md" href="#services">Services</a>
                <a className="p-3 cursor-pointer font-bold transition duration-300 transform hover:text-pop hover:scale-110 hover:bg-white hover:bg-opacity-10 rounded-md" href="#products">Products</a>
            </div>
            <a href="#contact"><button className='cursor-pointer bg-button font-bold rounded-3xl whitespace-nowrap p-3 transition duration-300 hover:text-pop hover:scale-110'>Get Started</button></a>
        </div>
    );
}
