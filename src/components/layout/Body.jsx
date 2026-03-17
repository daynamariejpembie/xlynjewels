"use client"

import React from 'react';
import Carousel from '../ui/Carousel/Carousel';
import { Accordion } from '../ui/Accordion/Accordion';

export const Body = () => {
  return (
    <div> 
        <div>
            <h2 className="text-3xl text-center mt-10 sm:text-2xl md:text-3xl lg:text-4xl">Who Are We?</h2>
            <p className="text-2xl text-center m-16 md:text-3xl lg:text-3xl">
        X-Lyn Jewels is a small jewelry business that is operated and ran 
        by a first time mom born and raised in Jamaica whom felt called to 
        create and sell custom jewelry in an attempt to create a legacy for
        the women in her family and as a means of provision for her children.
    
        It is named after her first daughter with hopes of passing 
        down the business to her. Each person that purchases an item from us 
        will become a part of the Jewel family forever. Without you, our legacy 
        is nothing. Thank you.
            </p>
        
        </div>
        <Carousel />
        <Accordion />
    </div>
  )
}
