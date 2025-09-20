import React from "react";

interface props {
  text: string;
  className?: string;
}

const Banner = ({ text, className }: props) => {
  return (
    <div className={`text-center w-full py-10 ${className}`}>
      <h1 className="text-5xl font-bold text-cshs-300">{text}</h1>
    </div>
  );
};

export default Banner;
