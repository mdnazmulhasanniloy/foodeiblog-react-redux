import React from 'react';
import about_stories_img from "../../Assets/Home_Page_Images/aboutStories.jpg"

const AboutStories = () => {
    return (
        <section className='my-20 flex flex-col md:flex-row items-center gap-5'>
            <div className="left w-full md:w-[40%]">
            <img 
                className="w-full group-hover:scale-110 transition ease-in-out duration-300"
                src={about_stories_img} alt="Sunset in the mountains" />
            </div>
            <div className="right w-full md:w-[60%]">
                <div className="w-11/12 mx-auto">
                    <h3 className='sm:text-5xl md:text-5xl font-extrabold mb-5'>About Stories</h3>
                    <p className='text-lg text-gray-500 mb-10'>
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                    </p>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-28">
                        <div className="text-center">
                            <h1 className='text-4xl font-extrabold text-black'>10</h1>
                            <p className="text-xl text-gray-500">Years of Experienced</p>
                        </div>
                        <div className="text-center">
                            <h1 className='text-4xl font-extrabold text-black'>200</h1>
                            <p className="text-xl text-gray-500">Foods</p>
                        </div>
                        <div className="text-center">
                            <h1 className='text-4xl font-extrabold text-black'>300</h1>
                            <p className="text-xl text-gray-500">Lifestyle</p>
                        </div>
                        <div className="text-center">
                            <h1 className='text-4xl font-extrabold text-black'>40</h1>
                            <p className="text-xl text-gray-500">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStories;