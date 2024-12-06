import React from 'react';
import Image from 'next/image';
import Button from './Button';

const ProjectManagement = () => {
  return (
    <section className="relative bg-white px-24 py-[129px]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side */}
        <div className="text-[#212529] max-w-lg"> {/* Updated text color */}
          <h1 className="text-5xl font-bold leading-tight mb-10">
            Project Management
          </h1>
          <p className="text-xl mb-10">
            Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <Button
          color="4F9CF9"
          text='Get Started →'
          width='120px'
          tColor='white'
          />
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <Image
            src="/images/hero-image2.jpg" // Replace with your image path
            alt="Hero Image"
            width={824} // Updated to match your specified width
            height={549} // Updated to match your specified height
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;
