"use client"

import React, { useState, useRef, useEffect }from 'react';
import { TfiMenu  } from "react-icons/tfi";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Link from 'next/link';


export const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    }

    const menuRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenuOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <div className="min-w-fit mx-5 sm:my-5" ref={menuRef}>
       <div className=" hidden sm:flex sm:justify-center sm:space-x-20">
        <ul className="sm:flex sm:space-x-5 md:space-x-16">
        <li>
            <Link className="sm:text-xl sm:font-semibold md:text-2xl lg:text-3xl" href="/home">Home</Link>
        </li>
        <li>
            <Link className="sm:text-xl sm:font-semibold md:text-2xl lg:text-3xl" href="/shop">Shop</Link>
        </li>
        <li>
            <Link className="sm:text-xl sm:font-semibold md:text-2xl lg:text-3xl" href="">Contact Us</Link>
        </li>
        </ul>
       </div>
       <div className="flex flex-row justify-between w-full py-5 sm:hidden">
        <Link href="/home"><h2 className="text-2xl font-semibold">X-Lyn Jewels</h2></Link>
        <button 
       onClick = {toggleMenu}
       className="flex"
       >
        <TfiMenu className="flex text-3xl sm:hidden"/>
       </button> 
       </div>
      
       {
        menuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/10 backdrop-blur-xs z-40"
              onClick={() => setMenuOpen(false)}
            />

            <div className="flex flex-col font-semibold absolute right-5 top-15 text-lg items-center text-center space-y-3 bg-[#f4d4ad] border-6 border-[#C2A27A] p-5 z-50 rounded-xl sm:hidden">
              <ul>
                <li >
                  <Link href="/home">Home</Link>
                </li>
                <li>
                   <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="">Contact Us</Link>
                </li>
              </ul>
              <ul className='bg-[#C2A27A] w-full rounded-md'>
                <li className="flex justify-between w-full p-4 sm:hidden">
                  <Link href="/login"> <FaUser className=""/></Link>
                  <Link href="/cart"> <FaCartShopping className="" /></Link>
                </li>
              </ul>
            </div>
          </>
        )
       }
    </div>
  )
}
