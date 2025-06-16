import React from 'react';
import businessMen from '../assets/images/businessMan.png'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Contact() {
    return (
        <section id='contact' className='flex relative items-center justify-center min-h-screen w-full scroll-mt-96 md:scroll-mt-2'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-14'>
                <div className='flex flex-col w-5/6 md:w-6/12 gap-8' >
                    <p className='text-6xl'>Let's work together.</p>
                    <p className='text-subText'>CONTACT US</p>
                    <p className='text-2xl'>
                        At ND Enterprises, we prioritize reliability and long-term success.
                        We’re committed to building lasting partnerships that benefit both sides.
                        Let’s grow together — reach out today to see how we can work with you.
                    </p>
                    <div className='flex flex-row items-center gap-3'>
                        <EnvelopeIcon className="h-6 w-6"/>
                        <a className="text-2xl text-pop underline hover:text-button transition duration-300 transform hover:scale-105 overflow-x-auto" href="mailto:sales@ndenterprisesllc.com">sales@ndenterprisesllc.com</a>
                    </div>
                    <div className='flex flex-row items-center gap-3'>
                        <PhoneIcon className="h-6 w-6" />
                        <a href='tel:5593213634' className='text-2xl text-pop underline hover:text-button transition duration-300 transform hover:scale-105'>559-321-3634</a>
                    </div>
                </div>
                <img className='w-3/4 md:w-1/4 rounded-3xl' src={businessMen} alt="" />
            </div>
        </section>
    );
}
