import { ChevronRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Hero = () => {
    return (
        <div className="container min-h-screen mx-auto px-4 sm:px-5 md:px-10 lg:px-20 xl:px-25 2xl:px-32 flex items-center">
            <div className="grid grid-cols- sm:grid-cols-[18.4rem_1fr] md:grid-cols-[19.6rem_1fr] lg:grid-cols-[21.4rem_1fr] xl:grid-cols-[23.6rem_1fr] 2xl:grid-cols-[26rem_1fr] lg:grid-rows-[5.2rem_5.2rem_6.3rem_1fr] xl:grid-rows-[5.6rem_5.6rem_6.5rem_1fr] 2xl:grid-rows-4 max-h-[100vh] gap-8">
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold col-span-full lg:mt-12">A Digital Agency</h1>
            <h3 className="text-4xl md:text-5xl lg:text-7xl text-gray-500 font-bold col-span-full sm:col-span-1 ">Fights For</h3>
            <h2 className="text-orange-700 text-7xl md:text-9xl lg:text-[14rem] font-bold col-span-full sm:col-span-1 sm:row-span-2 leading-[1] lg:leading-[0.88]">Web</h2>
            <p className="text-white font-light text-xl col-start-1 col-end-3 sm:col-start-1 sm:col-end-1 mt-8">We are a creative team of designers and developers building advanced web-based solutions for your brand.</p>
            <button className="text-white text-left text-xl col-span-full relative mt-4 before:absolute before:bg-gray-400 before:top-0 before:left-0 before:w-12 before:h-12 before:p-8 before:rounded-full before:opacity-30 before:z-1 md:before:w-14 flex gap-4"><p>GET IN TOUCH</p>
            <div className="text-white"><ChevronRightIcon></ChevronRightIcon></div></button>
            </div>
        </div>
    );
};

export default Hero;