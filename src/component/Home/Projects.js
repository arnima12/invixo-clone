import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import image1 from "../../images/project-mentme.webp"
import image2 from "../../images/project-molbiolab (1).webp";
const Projects = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto my-16 text-center text-3xl font-semibold py-16">
                <h1 className="text-4xl md:text-6xl font-bold text-center">What We've Done</h1>
                <h3 className="text-black text-xl mt-4 font-light">Byproduct of our time and efforts</h3>
                <div className="container mx-auto">
                <div className="flex flex-col-reverse xl:flex-row my-8 gap-12">
                    <div className="flex flex-col items-start gap-8 text-black">
                        <h3 className="text-red-500">01.</h3>
                        <h2 className="font-bold">Mentme</h2>
                        <p className="text-start text-[1.5rem] text-black font-[350]">Mentme is a platform that connects hard-to-reach mentors with the mentees who need their valuable advice. On this site, mentees can book sessions with the mentor based on their category and expertise. Experienced people can register as a mentor and earn money from giving sessions to the mentees.</p>
                        <div className="flex flex-wrap justify-center gap-16">
                            <button className="bg-black px-8 py-4 rounded-2xl text-white text-[1.5rem] flex gap-4">
                                <p>Live Preview</p>
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                            </button>
                            <button className="bg-red-500 px-8 py-4 rounded-2xl text-white  text-[1.5rem] flex gap-4"><p>Case Study</p>
                                <div><FontAwesomeIcon icon={faArrowRight} /></div></button>
                        </div>
                    </div>
                    <div>
                        <img className="w-[5000px]" src={image1} alt="" />
                    </div>
                </div>
                <div className="flex flex-col-reverse xl:flex-row-reverse my-12 gap-12">
                    <div className="flex flex-col items-start gap-8 text-black">
                        <h3 className="text-red-500">02.</h3>
                        <h2 className="font-bold">Molecular Biology Lab (Dhaka University)</h2>
                        <p className="text-start text-[1.5rem] text-black font-[350]">An intuitive and dynamic university lab website with a modern look and feel where users can avail all sorts of data. On this website, users can access information about supervisors, lab members, publications, news, and events. Admins hold the privilege to modify data from the dashboard to keep the site up to date.</p>
                        <div className="flex flex-wrap justify-center gap-16">
                            <button className="bg-black px-8 py-4 rounded-2xl text-white text-[1.5rem] flex gap-4"><p>Live Preview</p>
                                <div><FontAwesomeIcon icon={faArrowRight} /></div></button>
                            <button className="bg-red-500 px-8 py-4 rounded-2xl text-white text-[1.5rem] flex gap-4"><p>Case Study</p>
                                <div><FontAwesomeIcon icon={faArrowRight} /></div></button>
                        </div>
                    </div>
                    <div>
                        <img className="w-[5000px]" src={image2} alt="" />
                    </div>
                </div>
                </div>
                <div className="flex justify-center"><button className="bg-black text-white px-12 py-4 rounded-2xl text-[1.5rem] flex gap-4"><p>View More</p>
                    <div><FontAwesomeIcon icon={faArrowRight} /></div></button></div>
            </div>
        </div>
    );
};

export default Projects;