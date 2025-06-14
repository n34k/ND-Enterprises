import React from 'react';
import logo from '../assets/images/logo.png'

export default function Wh0() {
    return (
        <section className='flex items-center justify-center relative h-screen w-full'>
            <div className='flex justify-center align-middle bg-secondary w-9/12 rounded-xl p-7 gap-7'>
                <div className=' flex flex-col gap-3 w-1/2'>
                   <p>About us</p> 
                   <p className='font-bold text-4xl'>Who we are</p>
                   <p>
                        Based in Fresno, California, ND Enterprises is a trusted wholesale distributor with a strong focus on 
                        e-commerce and Amazon fulfillment. We specialize in sourcing and delivering quality products with speed and accuracy, 
                        helping our partners grow in today’s competitive online marketplace. Our team brings deep expertise in inventory management, 
                        logistics, and wholesale strategy—ensuring your supply chain runs smoothly from warehouse to customer. At the core of our 
                        business is a commitment to reliability, long-term partnerships, and exceptional customer satisfaction.
                    </p>
                </div>
                <img src={logo} alt="ND Enterprises" className='w-1/2 rounded-xl'/>
            </div>
        </section>
    );
}