import React from 'react';

interface ButtonProps {
  color: string;
  text: string;
  width: string;
  tColor:string
}

const Button = ({ color, text,width,tColor }:ButtonProps) => {
  return (
    <button
      className={`py-4 px-4 w-[${width}] rounded-lg shadow-md transition-all bg-[#${color}] text-${tColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
