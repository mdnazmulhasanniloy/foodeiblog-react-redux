import { loadBlogs } from "../Action/BlogAction";

const loadBlogsData = ()=>{
    return async(dispatch, getState)=>{
        const res = await fetch("http://localhost:5000/blogs")
        const data = await res.json();
        if(data.data.length > 0){
            // console.log(data)
            dispatch(loadBlogs(data.data.sort((a,b)=>b-a)));
        }
    }
}


export default loadBlogsData;