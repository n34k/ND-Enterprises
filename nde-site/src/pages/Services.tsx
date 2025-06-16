import React from 'react';
import Service from '../components/Service';
import {
  Squares2X2Icon,
  BanknotesIcon,
  MagnifyingGlassIcon,
  CubeIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from '@heroicons/react/24/solid';

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-start relative w-full min-h-screen gap-8 px-6 md:px-36 py-20 scroll-mt-80 md:scroll-mt-24"
    >
      <div className='flex flex-col items-center gap-3'>
        <p className="font-bold text-3xl md:text-5xl text-center">What We Do</p>
        <p className='text-subText text-sm md:text-base'>WHY US</p>
      </div>

      <div className="flex flex-col gap-10 w-full max-w-4xl">
        <Service title="Amazon Sales Channel Management" Icon={Squares2X2Icon}>
          We provide access to a top-performing Amazon storefront with high visibility and proven performance. Let us handle the listing, marketing, and customer service — you focus on the product.
        </Service>
        <Service title="Reliable Wholesale Purchasing" Icon={BanknotesIcon}>
          We buy in bulk directly from brands and authorized distributors. As a dependable partner, we offer consistent, high-volume purchases with timely payment and repeat orders.
        </Service>
        <Service title="Optimized Product Listings" Icon={MagnifyingGlassIcon}>
          We create and maintain optimized product listings designed to convert — using keyword research, A+ content, and professional imagery.
        </Service>
        <Service title="Inventory & Logistics Management" Icon={CubeIcon}>
          We ensure fast, efficient product movement through Amazon FBA or FBM, helping you maintain healthy inventory turnover and minimal stockouts.
        </Service>
        <Service title="Brand Representation & Protection" Icon={ShieldCheckIcon}>
          We respect your brand integrity by maintaining MAP pricing, preventing listing hijacking, and following all Amazon compliance guidelines.
        </Service>
        <Service title="Data & Insights Sharing" Icon={ChartBarIcon}>
          We share sales data, reviews, and market feedback to help you improve your product strategy and grow your Amazon presence.
        </Service>
      </div>
    </section>
  );
}


/* 1. Amazon Sales Channel Management
We provide access to a top-performing Amazon storefront with high visibility and proven performance. Let us handle the listing, marketing, and customer service — you focus on the product.

2. Reliable Wholesale Purchasing
We buy in bulk directly from brands and authorized distributors. As a dependable partner, we offer consistent, high-volume purchases with timely payment and repeat orders.

3. Optimized Product Listings
We create and maintain optimized product listings designed to convert — using keyword research, A+ content, and professional imagery.

4. Inventory & Logistics Management
We ensure fast, efficient product movement through Amazon FBA or FBM, helping you maintain healthy inventory turnover and minimal stockouts.

5. Brand Representation & Protection
We respect your brand integrity by maintaining MAP pricing, preventing listing hijacking, and following all Amazon compliance guidelines.

6. Data & Insights Sharing
We share sales data, reviews, and market feedback to help you improve your product strategy and grow your Amazon presence. */