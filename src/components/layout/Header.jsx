import React from 'react';
import { FaUser, FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex justify-between w-full">
        <Image className="hidden sm:flex sm:w-20" src="/dark-logo.jpg" alt="logo" width={200} height={200}/>
        <div className="flex space-x-5 lg:top-20 m-5">
           <Link href="/login"> <FaUser className=" hidden sm:flex sm:text-md md:text-2xl"/></Link>
           <Link href="/cart"> <FaCartShopping className="hidden sm:flex sm:text-md md:text-2xl" /></Link>
        </div>
    </div>
  )
}
