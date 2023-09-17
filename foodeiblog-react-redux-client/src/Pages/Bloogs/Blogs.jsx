import React, { useEffect } from 'react';  
import PostCard from '../../Components/PostCard';
import Subscribe from '../../Components/Subscribe/Subscribe';
import { useDispatch, useSelector } from 'react-redux';
import loadBlogsData from '../../Redux/Thunk/FetchBlogs';
import { clearFilter, sortByCategory, sortByTime } from '../../Redux/Action/FilterAction';

const Blogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector(state=>state.blogs.blogs);
    const filter = useSelector(state=>state.filter.filters);
    const {category}=filter; 
    
    useEffect(()=>{
        dispatch(loadBlogsData())
    },[dispatch])

    let content;
    if(blogs.length>0){
        content = blogs?.map(blog=> <PostCard key={blog?._id} blog={blog} />);
    }


    if (blogs?.length && category.length) {
        content = blogs?.filter(blog =>{
            if(category === "All Blogs"){
                return blog
            }
            else if(category){
                return blog.category === category.toLowerCase()
            }
            return blog
        }).map(blog=> <PostCard key={blog?._id} blog={blog} />)
      }
      
    

    return (
        <div className='min-h-[100vh] w-full mt-3'>
            <div className='mb-10 flex justify-end gap-5'>  
                <select className="select select-warning rounded-full"  onChange={(e)=>dispatch(sortByCategory(e.target.value))}>
                    <option disabled selected>Sort by category</option>
                    <option>All Blogs</option>
                    <option>Foods</option>
                    <option>Life Style</option> 
                    <option>Other</option> 
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