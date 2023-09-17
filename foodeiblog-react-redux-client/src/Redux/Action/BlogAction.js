import { LOAD_BLOGS } from "../ActionTypes/ActionTypes"

export const loadBlogs = data =>{
    return({
        type: LOAD_BLOGS,
        payload: data
    });
};