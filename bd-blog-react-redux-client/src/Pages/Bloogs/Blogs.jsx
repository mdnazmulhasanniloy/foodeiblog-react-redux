import React, { useEffect, useState } from 'react';  
import PostCard from '../../Components/PostCard';
import Subscribe from '../../Components/Subscribe/Subscribe';
import { useDispatch, useSelector } from 'react-redux';
import loadBlogsData from '../../Redux/Thunk/FetchBlogs';
import { sortByCategory } from '../../Redux/Action/FilterAction';
import loadCategoriesData from './../../Redux/Thunk/FetchCategories';

const Blogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state=>state?.blogs?.blogs);
    const filter = useSelector(state=>state?.filter?.filters);
    const categories = useSelector(state=>state?.categories?.category);
    const [search, setSearch] = useState("")
    const {category}=filter; 

    console.log("categories", categories)
    
    useEffect(()=>{
        dispatch(loadBlogsData())
        dispatch(loadCategoriesData())
    },[dispatch])

    let content;
    if(blogs.length>0){
        content = blogs?.map(blog=> <PostCard key={blog?._id} blog={blog} />);
    }


    if (blogs?.length && (category.length)) {
        content = blogs?.filter(blog =>{
            if(category === "all_blogs"){
                return blog
            }
            else if(category){
                return blog.category === category.toLowerCase()
            }
            return blog
        }).map(blog=> <PostCard key={blog?._id} blog={blog} />)
      }
      
      if(search){
        content = blogs?.filter(blog => 
            blog?.category?.toLowerCase().includes(search?.toLowerCase())
            || blog?.title?.toLowerCase().includes(search?.toLowerCase()) 
            ).map(blog=> <PostCard key={blog?._id} blog={blog} />)
      }
    

    return (
        <div className='min-h-[100vh] w-full mt-3'>
            <div className='mb-10 flex justify-end gap-5'>  
                <div className="search">
                <input type="search" placeholder="Search Here" onChange={(e)=>setSearch(e?.target?.value)} className="input input-bordered input-warning w-full max-w-xs rounded-full" />
                </div>
                <select className="select select-warning rounded-full"  onChange={(e)=>dispatch(sortByCategory(e.target.value))}>
                    <option selected value="all_blogs">All Blogs</option>
                    {
                        categories?.map((category)=><option key={category?._id} value={category?.value} selected={filter?.category===category?.value}>{category?.name}</option>)
                    }
                    
                </select>  
            </div>
                <div className="my-10 w-11/12 mx-auto">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            content
                        }    
                    </div> 

                    {/*Pagination*/}
                    <div className="join flex justify-center mt-10">
                        <button className="join-item btn">1</button>
                        <button className={`join-item btn bg-black text-white hover:bg-black`}>2</button>
                        <button className="join-item btn">3</button>
                        <button className="join-item btn">4</button>
                    </div>
                </div>

            <div className="my-20">
                    <Subscribe />
                </div>
        </div>
    );
};

export default Blogs;