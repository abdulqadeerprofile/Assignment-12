import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#043873] text-white px-24 py-10">
      <div className="container mx-auto flex justify-between items-start">
        {/* Left Section with Logo and Description */}
        <div className="flex flex-col space-y-4 w-1/3">
          <div className="flex items-center">
            <Image
              src="/images/logo.png" // Replace with your logo's path
              alt="Logo"
              width={191}
              height={34}
            />
          </div>
          <p className="text-sm">
            whitespace was created for the <br />
            new ways we live and work.<br />
            We make a better workspace <br />
            around the world.
          </p>
        </div>

        {/* Middle Section with Links */}
        <div className="flex space-x-24 w-2/3 justify-between">
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold">Product</h4>
            <a href="#" className="text-sm hover:underline">Overview</a>
            <a href="#" className="text-sm hover:underline">Pricing</a>
            <a href="#" className="text-sm hover:underline">Customer stories</a>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold">Resources</h4>
            <a href="#" className="text-sm hover:underline">Blog</a>
            <a href="#" className="text-sm hover:underline">Guides & tutorials</a>
            <a href="#" className="text-sm hover:underline">Help center</a>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-bold">Company</h4>
            <a href="#" className="text-sm hover:underline">About us</a>
            <a href="#" className="text-sm hover:underline">Careers</a>
            <a href="#" className="text-sm hover:underline">Media kit</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm mt-10">
        <p>&#169; 2021 Whitespace LLC</p>
      </div>
    </footer>
  );
};

export default Footer;
