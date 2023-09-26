import React from 'react';
import PostCard from '../../../Components/PostCard';
import img  from '../../../Assets/Carousel_Image/image_3.jpg';   
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const FeaturedPosts = () => {
    const blogs = useSelector(state=>state.blogs.blogs); 
    return (
        <div className="w-full">
            <div className="flex items-end gap-2">
                <h3 className='text-4xl font-bold '>Featured Posts</h3> 
                <div className="h-2 w-2 bg-yellow-400"></div>
            </div>
            <div className="w-11/12 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {
                        blogs?.slice(0, 6).map((blog) => (
                            <PostCard key={blog?._id} blog={blog} />
                        ))
                    }
            </div>

            <div className="mt-10 flex justify-center">
            <Link to="/blogs" className="text-lg px-4 py-2 text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-500 ">
                        See More <BsArrowRight className="inline ml-2" />
            </Link>
            </div>

            
        </div>
    );
};

export default FeaturedPosts;