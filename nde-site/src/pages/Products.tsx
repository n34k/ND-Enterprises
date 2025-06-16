import React from 'react';
import { products } from '../productData';
import Product from '../components/Product';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

export default function Products() {
    return (
        <section id='products' className='flex relative items-center justify-center h-[75vh] md:min-h-[50vh] w-full'>
            <div className='flex flex-col items-center justify-center gap-10 overflow-x-hidden'>
                <p className='font-bold text-3xl md:text-5xl'>Current Products</p>
                <Swiper
                    className="mt-6 w-4/5 max-w-sm md:max-w-6xl"
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 4000 }}
                    loop
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
        </section>
    );
}
