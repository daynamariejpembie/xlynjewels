import React from 'react';
import { FaUser, FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="justify-between w-full hidden sm:flex p-5">
        <Link href="/home"><h1 className="text-2xl font-bold font-mono md:text-4xl lg:text-5xl">X-Lyn Jewels</h1></Link>
        <div className="flex space-x-5 lg:top-20 m-5">
           <Link href="/login"> <FaUser className=" hidden sm:flex sm:text-md md:text-2xl"/></Link>
           <Link href="/cart"> <FaCartShopping className="hidden sm:flex sm:text-md md:text-2xl" /></Link>
        </div>
    </div>
  )
}
