import { combineReducers } from "redux";
import { blogsReducer } from "./BlogReducer"; 
import { filterReducer } from "./FilterReducer";

const rootReducer = combineReducers({
    blogs: blogsReducer ,
    filter: filterReducer
});


export default rootReducer;