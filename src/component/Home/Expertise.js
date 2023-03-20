import React from 'react';
import "./Expertise.css";
import {
    GlobeAltIcon, LightBulbIcon,
    WrenchScrewdriverIcon, PresentationChartLineIcon
} from '@heroicons/react/24/solid';
const Expertise = () => {
    return (
        <div className="container mx-auto my-8 px-4 sm:px-5 md:px-10 lg:px-20 xl:px-25 2xl:px-32 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-center">Our Expertise</h2>
            <p className="font-light text-2xl text-center mt-4">Attaining growth goals with a medley of vision and knowledge</p>
            <div className="grid xl:grid-cols-2 gap-12 mt-12">
                <div className="text-left flex flex-col gap-10 expertise p-8 rounded-2xl">
                    <GlobeAltIcon className="w-[8rem] text-red-500"></GlobeAltIcon>
                    <h3 className="text-3xl text-red-500">01.</h3>
                    <h2 className="font-bold text-4xl">Websites and platforms</h2>
                    <p className="text-xl font-light">We develop high-performance, engaging, and visually appealing websites and platforms that are tailored to your target customer’s expectations.</p>
                </div>
                <div className="text-left flex flex-col gap-10 expertise p-8 rounded-2xl">
                    <LightBulbIcon className="w-[8rem] text-red-500"></LightBulbIcon>
                    <h3 className="text-3xl text-red-500">02.</h3>
                    <h2 className="font-bold text-4xl">Software Solutions</h2>
                    <p className="text-xl font-light">Our team implements a sound architectural basement to build secure, scalable, and highly performant engineering solutions using the latest techs and trends.</p>
                </div>
                <div className="text-left flex flex-col gap-10 expertise p-8 rounded-2xl">
                    <WrenchScrewdriverIcon className="w-[8rem] text-red-500"></WrenchScrewdriverIcon>
                    <h3 className="text-3xl text-red-500">03.</h3>
                    <h2 className="font-bold text-4xl">Web Consulting</h2>
                    <p className="text-xl font-light">We develop high-performance, engaging, and visually appealing websites and platforms that are tailored to your target customer’s expectations.</p>
                </div>
                <div className="text-left flex flex-col gap-10 expertise p-8 rounded-2xl">
                    <PresentationChartLineIcon className="w-[8rem] text-red-500"></PresentationChartLineIcon>
                    <h3 className="text-3xl text-red-500">04.</h3>
                    <h2 className="font-bold text-4xl">SEO</h2>
                    <p className="text-xl font-light">We develop high-performance, engaging, and visually appealing websites and platforms that are tailored to your target customer’s expectations.</p>
                </div>
            </div>
        </div>
    );
};

export default Expertise;