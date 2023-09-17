import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Card = ({bg_2}) => {
    return (
        <div>
            <div className="w-full md:h-[500px] relative">
                        <img src={bg_2} className="w-full h-full object-cover" alt="" />
                        <div className="w-full h-full bg-[#00000041] absolute top-0 left-0 z-1 "></div>
                        <div className="absolute bottom-32 left-4">
                            <h3 className='text-lg font-bold text-yellow-400'>Food</h3>
                            <h3 className='text-5xl text-white '>ham sandwich on white surface</h3>
                        </div>

                        <div className="absolute right-0 bottom-1">
                            <Link className="text-lg px-4 py-2 bg-white text-black hover:bg-orange-400">
                                Read More <BsArrowRight className="inline ml-2" />
                            </Link>
                        </div>
                    </div>
        </div>
    );
};

export default Card;