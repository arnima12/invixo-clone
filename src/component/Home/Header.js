import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from "../../images/invixo_logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <div className="top-0 fixed inset-x-0">
            <div className="bg-black ">
                <div className="container mx-auto px-4 py-4 flex justify-between">
                    <img className="w-[10rem]" src={logo} alt="" />
                    <div className="lg:flex gap-16 items-center text-white text-2xl hidden">
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Portfolio</a>
                    </div>
                    <div className="lg:flex gap-16 items-center text-white text-2xl hidden">
                        <a href="/">Contact</a>
                        <a href="/" className="bg-orange-600 rounded-full text-black text-[1rem] w-[3.2rem] h-[3.2rem] text-center " ><FontAwesomeIcon className="w-4 h-12" icon={faPen} /></a>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Header;