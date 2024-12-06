import Image from 'next/image';
import React from 'react';
import Button from './Button' 

const Header = () => {

  return (
    <header className="bg-[#043873] px-24 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/logo.png" 
            alt="Logo"
            width={191}
            height={34}
          />
        </div>

        <nav className="flex space-x-8 items-center">
          <div className="space-x-8 mr-16">
            <button className="text-white hover:underline">Products</button>
            <button className="text-white hover:underline">Solutions</button>
            <button className="text-white hover:underline">Resources</button>
            <button className="text-white hover:underline">Pricing</button>
          </div>

          <Button 
            color="FFE492" 
            text="Log In"
            width='100px'
            tColor='black'
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
