import { combineReducers } from "redux";
import { blogsReducer } from "./BlogReducer"; 
import { filterReducer } from "./FilterReducer";
import { categoryReducer } from "./CategoryReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
    user: userReducer,
    blogs: blogsReducer ,
    filter: filterReducer, 
    categories: categoryReducer
});


export default rootReducer;