import React from 'react';
import { SELLER_ID } from '../productData';
import Rating from 'react-rating';

type ProductProps = {
  title: string;
  price: string;
  image: string;
  rating: number;
  asin: string;
};

export default function Product({ title, price, image, rating, asin }:ProductProps) {
    return (
        <a href={`https://www.amazon.com/dp/${asin}/?m=${SELLER_ID}`} target="_blank" rel="noopener noreferrer" 
        className="flex flex-col md:w-10/12 w-3/5 p-4 mb-10 bg-white rounded-lg z-40 shadow-2xl transition ease-in-out gap-2">
            <img src={image} alt={title} className="w-full h-40 object-contain" />
            <p className="text-black text-sm md:text-xl font-semibold">{title}</p>
            <p className="text-black md:text-xl font-bold">{price}</p>
            <div className='flex items-center gap-2'>
                <p className='text-black md:text-md font-bold'>{Number.isInteger(rating) ? `${rating}.0` : rating.toFixed(1)}</p>
                <Rating readonly initialRating={rating}
                    emptySymbol={<span className="text-gray-300 text-xl">★</span>}
                    fullSymbol={<span className="text-yellow-400 text-xl">★</span>}
                    fractions={10}
                />
            </div>
        </a>
    );
}
