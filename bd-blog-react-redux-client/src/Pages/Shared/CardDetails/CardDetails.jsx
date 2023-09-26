import React, { useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import {FaRegCalendarAlt} from "react-icons/fa";
import {BiCommentDetail} from "react-icons/bi";
import moment from 'moment';
import Subscribe from './../../../Components/Subscribe/Subscribe';
import { useDispatch, useSelector } from 'react-redux';
import loadCategoriesData from '../../../Redux/Thunk/FetchCategories';
import loadBlogsData from '../../../Redux/Thunk/FetchBlogs';

const CardDetails = () => {
    const dispatch = useDispatch();
    const {pathname} = useLocation();

    const blogs = useSelector(state=>state?.blogs?.blogs); 
    const categories = useSelector(state=>state?.categories?.category);

    const blog = blogs.filter(blog => blog?._id === pathname.split('/')[2])[0] 

 
    console.log("first", blog)



    useEffect(()=>{
        dispatch(loadBlogsData())
        dispatch(loadCategoriesData())
    },[dispatch])

// return(<div></div>)

    return (
        <section className='w-[90%] mx-auto my-10'>
            <div className="flex flex-col md:flex-row gap-10">
                {/* left site */}
                <div className="w-full md:w-[70%]">
                    <div className="w-full">
                        <h1 className="text-xl font-bold">{blog?.title}</h1>
                        <img className='w-100 my-5 max-h-[90vh] w-full' src={blog?.img} alt="" />
                        <p className='text-lg text-gray-700'>{blog?.description}</p> 
                    </div>

                    {/* Comments  */}

                    <div className="mt-10">
                        <div className="text-2xl font-extrabold text-black my-5">{blog?.comments?.length} Comments</div>
                        <div className="mt-5 grid grid-cols-1 gap-10">
                            {
                                blog?.comments?.slice(0, 2).map((comment, index) =><div className="flex items-start gap-5" key={index}>
                                <img src={comment?.author?.img} alt="" className="rounded-full h-14 w-14" />
                                <div className="">
                                    <h1 className='text-xl font-extrabold uppercase'>{comment?.author?.name}</h1>
                                    <h3 className="text-md font-medium text-gray-400">{comment?.create_at}</h3>
                                    <p className="text-lg font-medium text-gray-400 mt-3">{comment?.comment}</p>
                                </div>
                            </div>)
                            }
                            
                        </div>
                    </div>

                    {/* add a comment  */}
                    <div className="mt-10">
                    <div className="text-2xl font-extrabold text-black my-10">Add Comment</div>
                    <div className="">
                        <form action="" className='flex flex-col gap-5'>
                            <div className="form-control">
                                <span className="label-text">Name *</span>
                                <input type="text" placeholder="Enter Your Name" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <span className="label-text">Email *</span>
                                <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <span className="label-text">Comment *</span>
                                <textarea className="textarea textarea-bordered h-24 " placeholder="Message"></textarea>
                            </div>
                            <div className="flex justify-start">
                                <button type="submit" className='px-4 py-3 bg-black text-white border-2 border-white hover:bg-white hover:text-black hover:border-black rounded-lg transition-all duration-700'>Submit</button> 
                            </div>
                        
                        
                        </form>
                    </div>
                    </div>

                </div>


                {/* right site  */}
                <div className="w-full md:w-[30%] mt-10">
                {/* blog categories */}
                    <div className="">
                        <h1 className='text-2xl font-extrabold text-black'>Categories</h1>
                        <div className="mt-3">

                            {
                                categories?.map(category =><div className="flex justify-between p-2 border-b-2">
                                    <h3 className='text-lg font-bold text-black'>{category?.name}</h3>
                                    <h3 className='text-lg font-bold text-gray-400'>
                                        {
                                            blogs.filter(blog=> blog?.category === category?.value)?.length
                                        }
                                    </h3>
                                </div>)
                            }
                            
                        </div>
                    </div>

                    {/* recent blogs  */}
                    <div className="">
                    <h1 className='text-2xl font-extrabold text-black my-5'>Recent Blogs</h1>
                    <div className="flex flex-col gap-5">
                    {
                        blogs?.sort((a,b)=>{
                            return new Date(b?.create_at) - new Date(a?.create_at)
                        }).slice(0, 3).map(blog =>{return(
                        <div key={blog?._id} className="flex rounded-lg items-center bg-green-200 shadow-xl">
                        <figure><img className="h-[100px] w-[100px] rounded-l-lg" src={blog?.img} alt="img"/></figure>
                        <div className="ml-5">
                            <h2 className="text-md font-semibold hover:text-yellow-500 hover:cursor-pointer">{blog?.title}</h2> 
                            <div className="flex mt-3 gap-3">
                                <div className="flex items-center gap-1">
                                    <FaRegCalendarAlt className='text-sm'/>
                                    <h3 className='text-sm'>{blog?.create_at.slice(0, 12)}</h3>
                                </div>
                                <div className="flex items-center gap-1">
                                    <BiCommentDetail className='text-sm'/>
                                    <h3 className='text-sm'>{blog?.comments?.length}</h3>
                                </div>
                            </div>
                            
                        </div>
                        </div>)})
                    }
                    </div>
                    
                    </div>

                    {/*Paragraph*/}
                    <div className="">
                        <h1 className='text-2xl font-extrabold text-black mt-5'>Paragraph</h1>
                        <div className="mt-3"> 
                                <p className='text-md text-gray-400'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!    
                                </p>  
                        </div>
                    </div>
                </div>

            
            
            </div>
            <div className="my-20">
                    <Subscribe />
                </div>
        </section>
    );
};

export default CardDetails;