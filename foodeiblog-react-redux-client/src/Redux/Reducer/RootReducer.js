import { combineReducers } from "redux";
import { blogsReducer } from "./BlogReducer"; 
import { filterReducer } from "./FilterReducer";
import { categoryReducer } from "./CategoryReducer";

const rootReducer = combineReducers({
    blogs: blogsReducer ,
    filter: filterReducer, 
    categories: categoryReducer
});


export default rootReducer;