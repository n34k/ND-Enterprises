import React, { ReactNode } from 'react';

type ServiceProps = {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  children: ReactNode; 
};

export default function Service({ title, Icon, children }:ServiceProps) {
    return (
        <div className='flex gap-5 md:gap-0 md:flex-col'>
            <div className='w-1/2 md:w-full flex items-center gap-5'>
                <Icon className='h-12 w-12'/>
                <p className='md:text-xl'>{title}</p>
            </div>
            <p className='text-subText w-1/2 md:w-full text-sm md:text-lg'>{children}</p>
        </div>
    );
}
