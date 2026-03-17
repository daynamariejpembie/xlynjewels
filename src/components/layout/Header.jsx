import React from 'react';
import { FaUser, FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between w-full">
        <div className="sm:flex sm:flex-col items-center m-5">
           <img className="hidden sm:flex sm:w-6 md:w-16" src="https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-white-pearl-necklace-png-png-image_11624730.png"/>
           <h2 className="hidden sm:flex sm:text-sm sm:font-bold sm:text-yellow-950 md:text-xl">X-Lyn Jewels</h2>
        </div>
        <div className="flex space-x-5 lg:top-20 m-5">
           <Link href=""> <FaUser className=" hidden sm:flex sm:text-md md:text-2xl"/></Link>
           <Link href="./cart"> <FaCartShopping className="hidden sm:flex sm:text-md md:text-2xl" /></Link>
        </div>
    </div>
  )
}
