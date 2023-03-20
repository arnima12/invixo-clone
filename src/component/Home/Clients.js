import React from 'react';
import image1 from "../../images/faizur-rahman.webp"
import image2 from "../../images/labib-muhannad.webp"
const Clients = () => {
    return (
        <div className="bg-gray-300">
            <div className="container mx-auto my-12 px-4 py-12 sm:px-5 md:px-10 lg:px-20 xl:px-25 2xl:px-32 ">
                <h2 className="text-4xl md:text-6xl font-bold text-center">Clients' Tales</h2>
                <p className="text-center font-light text-2xl mt-4">Some words from our wonderful clients lauding our work</p>
                <div className="grid xl:grid-cols-3 gap-8 mt-12">
                    <div className="expertise flex flex-col justify-center py-20 px-8 rounded-2xl">
                        <p className="font-normal text-xl">Their professional approach, understanding of business needs, and flexibility in decision-making led to building a system that precisely matched requirements.
                        </p>
                        <div className="flex justify-center mt-8 gap-4">
                            <img className="rounded-[50%] w-[6rem] border-2 border-red-500 p-1" src={image1} alt="" />
                            <div className="flex flex-col justify-center">
                                <h4 className="text-xl text-red-500 font-semibold">Faizur Rahman</h4>
                                <h5 className="text-xl">Founder,Mentme</h5>
                            </div>
                        </div>
                    </div>
                    <div className="expertise flex flex-col justify-center py-20 px-8 rounded-2xl">
                        <p className="font-normal text-xl">Their professional approach, understanding of business needs, and flexibility in decision-making led to building a system that precisely matched requirements.
                        </p>
                        <div className="flex justify-center mt-8 gap-4">
                            <img className="rounded-[50%] w-[6rem] border-2 border-red-500 p-1" src={image2} alt="" />
                            <div className="flex flex-col justify-center">
                                <h4 className="text-xl text-red-500 font-semibold">Labib Muhannad</h4>
                                <h5 className="text-xl">Founder and CEO, Eventizer</h5>
                            </div>
                        </div>
                    </div>
                    <div className="expertise flex flex-col justify-center py-20 px-8 rounded-2xl">
                        <p className="font-normal text-xl">Their professional approach, understanding of business needs, and flexibility in decision-making led to building a system that precisely matched requirements.
                        </p>
                        <div className="flex justify-center mt-8 gap-4">
                            <img className="rounded-[50%] w-[6rem] border-2 border-red-500 p-1" src={image1} alt="" />
                            <div className="flex flex-col justify-center">
                                <h4 className="text-xl text-red-500 font-semibold">Faizur Rahman</h4>
                                <h5 className="text-xl">Founder,Mentme</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;