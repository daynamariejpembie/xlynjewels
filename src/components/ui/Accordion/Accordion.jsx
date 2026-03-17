"use client"

import React from 'react';
import { useRef, useState } from 'react';
import data from './AccordionData';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const AccordionItem = (props) => {
 const {question, answer, isOpen, onClick} = props;
 const contentHeight = useRef();
    return(
        <div className='border-b border-[#F0DABD] overflow-hidden'>
          <button aria-expanded="true/false" className={`flex items-center justify-center w-full py-5 px-2.5 font-semibold text-[23px] text-[#35250F] hover:bg-black/ hover:cursor-pointer ${isOpen ? 'text-[#F0DABD] bg-linear-to-r from-transparent via-black/5 to-transparent' : 'text-[#35250F]'}`} onClick={onClick} >
            <h2 className='question-content sm:text-2xl md:text-3xl lg:p-5'>{question}</h2>
            <IoIosArrowForward
              className={`ml-2 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            />
          </button>

          <div ref={contentHeight} className='px-4 transition-all duration-700 ease-in-out' style={
            isOpen 
            ? { height: contentHeight.current.scrollHeight }
            : { height: '0px'}
          }>
            <p className='py-4 text-2xl text-center'>{answer}</p>
          </div>
        </div>
    )
}

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }
  return (
    <div className='max-h-fit max-w-fit mt-12.5 flex flex-col'>
      <h1 className="hidden sm:hidden md:block md:text-center text-center lg:mb-10 text-6xl">Frequently Asked Questions</h1>
      <h1 className=" text-center md:hidden">FAQ</h1>
      {data.map((item, index) => (
        <AccordionItem 
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  )
}

