import React from 'react';
import Image from 'next/image';
import Button from './Button';

const HeroSection = () => {
  return (
    <section className="relative bg-[#043873] px-24 py-[129px]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side */}
        <div className="text-white max-w-lg">
          <h1 className="text-5xl font-bold leading-tight mb-10">
            Get More Done with whitespace
          </h1>
          <p className="text-xl mb-10">
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks.
          </p>
        <Button
          color="4F9CF9"
          text='Try Whitespace free'
          width='120px'
          tColor='white'
          />
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <Image
            src="/images/hero-image.jpg" // Replace with your image path
            alt="Hero Image"
            width={824} // Updated to match your specified width
            height={549} // Updated to match your specified height
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
