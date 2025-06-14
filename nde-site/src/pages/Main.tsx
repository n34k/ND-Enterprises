import React from 'react';

export default function Main() {
    return (
        <section className='flex items-center justify-center relative h-screen w-full'>
            <video src='/assets/warehouse.mp4' className="absolute top-0 left-0 w-full h-full object-cover opacity-70 z-0" autoPlay loop muted playsInline/>
            <div className="absolute w-full h-full flex flex-col justify-center text-center z-10">
                <p className="text-xl font-bold text-center px-4">ND Enterprises</p>
                <p className='text-8xl'>Your Products, Delivered with Precision.</p>
            </div>
        </section>
    );
}
