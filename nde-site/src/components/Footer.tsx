import React from 'react';

export default function Footer() {
    return (
        <div>
            <div className='flex justify-center w-screen shadow-lg bg-primary z-50 items-center p-5'>
                 <p className='text-subText'>&copy; {new Date().getFullYear()} ND Enterprises. All rights reserved.</p>
            </div>
        </div>
    );
}
