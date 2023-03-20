import React from 'react';
import logo from "../../images/invixo_logo.svg";
import facebook from "../../images/Facebook-logo.png";
import instagram from "../../images/insta.png";
import linkedin from "../../images/link.png";
const Footer = () => {
    return (
        <div className="bg-black text-white">
            <div className="container mx-auto px-4 sm:px-5 md:px-10 lg:px-20 xl:px-25 2xl:px-32 py-32 flex flex-col xl:flex-row gap-16">
                <div className="flex flex-col gap-4">
                    <img className="w-[10rem]" src={logo} alt="" />
                    <p className="text-start text-white font-normal text-[1.5rem]">Building advanced web-based solutions for your brand.</p>
                    <div className="flex gap-2">
                        <img className="w-[6rem]" src={facebook} alt="" />
                        <img className="w-[6rem] pr-2" src={instagram} alt="" />
                        <img className="w-[4rem]" src={linkedin} alt="" />
                    </div>
                </div>
                <div className="flex flex-col text-start gap-4 text-white mt-12">
                    <h3 className="text-[1.5rem] font-normal">GET IN TOUCH</h3>
                    <a href="/" className="text-[1.5rem] font-normal text-red-600 underline">hello@invixobd.com</a>
                    <a href="/" className="text-[1.5rem] font-normal text-red-600 underline">+880 1638 677920</a>
                </div>
                <div className="flex flex-col items-start  gap-4 mt-8">
                    <h3 className="text-[1.5rem] font-normal text-white">Navigate</h3>
                    <div className="flex gap-4">
                        <h3 className="text-[1.5rem] ">About</h3>
                        <h3 className="text-[1.5rem]">Portfolio</h3>
                        <h3 className="text-[1.5rem]">Contact</h3>

                    </div>
                    <p className="text-[1rem]">House 66, TIC Colony Road, Faidabad, Uttara, Dhaka-1230, Bangladesh.</p>
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-5 md:px-10 lg:px-20 xl:px-25 2xl:px-32 py-8 flex gap-8 ">
                <p>
                    © 2022 INVIXO - ALL RIGHTS RESERVED.
                </p>
                <a href="/">PRIVACY POLICY</a>
                <a href="/">TERMS AND CONDITION</a>
            </div>
        </div>
    );
};

export default Footer;