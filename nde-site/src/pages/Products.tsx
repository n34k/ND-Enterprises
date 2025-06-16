import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

import { products } from '../productData';
import Product from '../components/Product';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Products() {
  const [arrowsVisible, setArrowsVisible] = useState(true);

  return (
    <section id="products" className="flex relative items-center justify-center md:min-h-[50vh] w-full">
      <div className="flex flex-col items-center justify-center gap-10 overflow-x-hidden">
        <p className="font-bold text-3xl md:text-5xl">Current Products</p>

        <div className="relative w-4/5 max-w-sm md:max-w-6xl">
          <button
            className={`custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 text-2xl transition-opacity duration-500 ${
              arrowsVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ArrowLeftIcon className='h-6 w-6'/>
          </button>
          <button
            className={`custom-next absolute right-0 top-1/2 -translate-y-1/2 z-20 text-2xl transition-opacity duration-500 ${
              arrowsVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ArrowRightIcon className='h-6 w-6'/>
          </button>

          <Swiper
            className="px-8 md:px-16"
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={1}
            loop
            speed={1000}
            autoplay={{ delay: 4000 }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            onSlideChange={() => setArrowsVisible(false)}
            onTransitionEnd={() => setArrowsVisible(true)}
            pagination={{ clickable: true }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.asin}>
                <div className="flex justify-center">
                  <Product {...product} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
