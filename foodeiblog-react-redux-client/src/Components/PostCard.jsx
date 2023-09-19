import moment from 'moment/moment';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PostCard = ({blog}) => {
    const newTime = moment()
    const time = blog?.create_at
    console.log("time", time )

    return (
        <div className="max-w-[370px] rounded overflow-hidden shadow-lg group">
                    <img 
                        className="w-full h-40 group-hover:scale-110 transition ease-in-out duration-300"
                        src={blog?.img} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                    <div className="flex justify-between items-center">Dessert 
                        <div className='h-[2px] w-28 bg-black'></div> {}
                    </div>
                    <h2 className="card-title mb-4">{blog?.title}</h2>
                    <p className='mt-3 mb-4 text-md'>{blog?.description?.slice(0, 50)} ...</p>
                    <div className="card-actions justify-start">
                    <Link to={`/details/${blog?._id}`} className="text-lg px-4 py-2 border-2 bg-black text-white hover:border-black hover:bg-white hover:text-black transition-all duration-700">
                        Read More <BsArrowRight className="inline ml-2" />
                    </Link>
                    </div>
                    </div>
                     
                </div>
    );
};

// transform motion-safe:hover:-translate-y-1 
export default PostCard;