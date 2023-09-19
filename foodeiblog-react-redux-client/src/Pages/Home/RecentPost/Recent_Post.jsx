import React from 'react';
import img  from '../../../Assets/Carousel_Image/image_3.jpg';      
import bg_2  from '../../../Assets/Carousel_Image/bg_2.jpg';       
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PostCard from './../../../Components/PostCard';
import { useSelector } from 'react-redux';

const RecentPost = () => {
    const blogs = useSelector(state=>state.blogs.blogs); 
    console.log(blogs)
    

    
    return (
        <section className="mt-10">
                <div className="flex my-10 items-end gap-2">
                    <h3 className='text-4xl font-bold '>Recent Stories</h3> 
                    <div className="h-2 w-2 bg-yellow-400"></div>
                </div>

            <div className="w-full h-[128vh] flex flex-col md:flex-row-reverse gap-5">
            <div className="md:w-[50%] sm:w-full md:h-[111vh] relative">
            <img src={blogs[0]?.img} className="w-full h-full object-cover" alt="" />
            <div className="w-full h-full bg-[#00000041] absolute top-0 left-0 z-1 "></div>
            <div className="absolute bottom-32 left-4">
                <h3 className='text-lg font-bold text-yellow-400'>Food</h3>
                <h3 className='text-5xl text-white '>{blogs[0]?.title}</h3>
            </div>

            <div className="absolute right-0 bottom-2">
                    <Link className="text-lg px-4 py-2 bg-white text-black hover:bg-orange-400">
                        Read More <BsArrowRight className="inline ml-2" />
                    </Link>
                    </div>
            </div>
            <div className="w-full md:w-50% md:h-full">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 w-11/12 mx-auto">
                    {
                       blogs?.length>0 && blogs.map((blog) => (
                            <PostCard key={blog?._id} blog={blog} />
                        ))
                    }
                </div>
            </div>
            
            </div>
            </section>
    );
};

export default RecentPost;