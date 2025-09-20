import React from 'react'
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="w-full bg-cshs-800 flex flex-col justify-center mt-3 p-3 items-center">
     
        <Link className="flex flex-row gap-4 items-center" href={"/"}>
        
          <Image width={40} height={40} src="/icon.png" alt="CSHS Logo" />
          <p className="text-xl text-cshs-300">GSMST Computer Science Honor Society</p>
        </Link>
         <p className="text-cshs-300">&copy;  by 2025 CSHS Officers. All rights reserved.</p>

    </div>
  )
}

export default Footer