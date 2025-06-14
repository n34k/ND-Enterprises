import React from 'react';
import logo from '../assets/images/logo-white-transparent.png';

export default function Header() {
    return (
        <div className='flex sticky top-0 w-screen bg-primary/60 z-50 backdrop-blur-md text-text justify-between items-center px-5'>
            <img src={logo} alt="ND Enterprises" className='h-20 cursor-pointer transition duration-300 transform hover:color hover:scale-110'/>
            <div className='flex justify-center gap-20'>
                <p className="cursor-pointer font-bold transition duration-300 transform hover:text-pop hover:scale-110">
                    Why Us
                </p>
                <p className="cursor-pointer font-bold transition duration-300 transform hover:text-pop hover:scale-110">
                    Services
                </p>
                <p className="cursor-pointer font-bold transition duration-300 transform hover:text-pop hover:scale-110">
                    Products
                </p>
            </div>
            <button className='cursor-pointer bg-button font-bold rounded-3xl whitespace-nowrap p-3 transition duration-300 hover:text-pop hover:scale-110'>Get Started</button>
        </div>
    );
}
