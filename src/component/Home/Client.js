import React from 'react';
import image1 from "../../images/mentme_logo.png";
import image2 from "../../images/dulogo.png";
import image3 from "../../images/mobileLogo.png";
const Client = () => {
    return (
        <div className="container mx-auto  px-4 sm:px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-52 my-12">
            <h2 className="text-4xl md:text-6xl font-bold text-center">Our Trusted Clients</h2>
            <p className="text-center font-light text-2xl mt-4 ">People who have constantly trusted us, making every effort worthwhile</p>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-20 place-items-center gap-10">
                <img className="w-32 md:w-[20rem] h-[4rem]" src={image1} alt="" />
                <img className="w-48 md:w-[20rem] h-[10rem]" src={image2} alt="" />
                <img className="w-32 md:w-[20rem] h-[4rem]" src={image3} alt="" />
            </div>
        </div>
    );
};

export default Client;