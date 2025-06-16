import React from 'react';
import ecomm from '../assets/images/ecomm.png'

export default function Who() {
    return (
        <section id='who' className='flex relative items-center justify-center min-h-[50vh] w-full px-4 scroll-mt-96 md:scroll-mt-28'>
            <div className='flex flex-col md:flex-row justify-center align-middle bg-secondary w-full max-w-6xl rounded-xl p-5 md:p-7 gap-5 md:gap-7 transition duration-300 transform hover:scale-105'>
                <div className='flex flex-col gap-3 w-full md:w-1/2 text-center md:text-left'>
                    <p className='font-bold text-3xl md:text-5xl'>Who We Are</p>
                    <p className='text-subText text-sm md:text-base'>ABOUT US</p>
                    <p className='text-base md:text-lg'>
                        Based in Fresno, California, ND Enterprises is a trusted wholesale distributor with a strong focus on 
                        e-commerce and Amazon fulfillment. We specialize in sourcing and delivering quality products with speed and accuracy, 
                        helping our partners grow in today’s competitive online marketplace. Our team brings deep expertise in inventory management, 
                        logistics, and wholesale strategy—ensuring your supply chain runs smoothly from warehouse to customer. At the core of our 
                        business is a commitment to reliability, long-term partnerships, and exceptional customer satisfaction.
                    </p>
                </div>
                <img src={ecomm} alt="ND Enterprises" className='w-full md:w-1/2 rounded-xl object-cover max-h-[300px] md:max-h-none' />
            </div>
        </section>

    );
}