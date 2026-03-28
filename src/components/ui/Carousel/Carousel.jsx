"use client"

import React, {useState} from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';

const slides = [
    {
        src: "/dark-logo.JPG",
        alt: 'Sza Anklet'

    },
    {
        src: "/sza-anklet.png",
        alt: "Pearl Bracelet"

    },
    {
        src: "/pn-heart.PNG",
        alt: "Birthstone Bracelet"

    }
]
export default function Carousel() {
    const [slide, setSlide] = useState(0);
    
    const nextSlide = () => {
        setSlide(slide === slides.length - 1 ? 0: slide + 1);
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? slides.length - 1 : slide - 1);
    }
    return (
        <div className="mx-auto relative flex justify-center items-center w-60 h-auto sm:w-72 ">
                <BsArrowLeftCircleFill className="absolute w-8 h-8 text-white hover:cursor-pointer hover:drop-shadow-[0_0_5px_#555] left-4" onClick={prevSlide}/>
            {slides.map((item, idx) => {
                return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "rounded-lg shadow-[0_0_7px_#667] w-full h-full" : "hidden"}/>
            })}
            <BsArrowRightCircleFill className="absolute w-8 h-8 text-white hover:cursor-pointer hover:drop-shadow-[0_0_5px_#555] right-4" onClick={nextSlide}/>
            <span className="flex absolute bottom-4">
                {slides.map((_, idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={`h-2 w-2 rounded-full shadow-[0_0_5px_#555] mx-[0.2rem] cursor-pointer border-none outline-none" ${slide === idx ? "bg-white" : "bg-gray-500"}`}></button>
                })}
            </span>
        </div>
    )
}