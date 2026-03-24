"use client"

import React, { useState }from 'react';
import { TfiMenu  } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Link from 'next/link';


export const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    }

  return (
    <div className="max-w-fit">
       <ul className=" hidden sm:flex sm:justify-center sm:space-x-20 sm:mt-5">
        <div className="sm:flex sm:space-x-5 md:space-x-16">
        <li>
            <Link className="sm:text-xl sm:font-semibold md:text-2xl lg:text-3xl" href="/about">About</Link>
        </li>
        <li>
            <Link className="sm:text-xl sm:font-semibold md:text-2xl lg:text-3xl" href="/shop">Shop</Link>
        </li>
        <li>
            <Link className="sm:text-xl sm:font-semibold md:text-2xl lg:text-3xl" href="">Contact Us</Link>
        </li>
        </div>
       </ul>
       <div className="flex items-center space-x-52">
        <img className="w-16 sm:hidden" src="https://png.pngtree.com/png-vector/20240205/ourmid/pngtree-white-pearl-necklace-png-png-image_11624730.png"/>

        <button 
       onClick = {toggleMenu}
       className="flex sm:hidden"
       >
        <TfiMenu className="flex text-3xl sm:hidden"/>
       </button> 
       </div>
      
       {
        menuOpen && (
            <ul className="flex flex-col font-semibold absolute right-10 top-20 text-lg items-center text-center space-y-3 bg-orange-200 p-5 sm:hidden">
                <li >
                  <a href="">About</a>
                </li>
                <li>
                   <a href="">Products</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li className="flex space-x-5 sm:hidden">
                  <a href=""> <FaUser className=""/></a>
                  <a href=""> <FaCartShopping className="" /></a>
                </li>
            </ul>
        )
       }
    </div>
  )
}
