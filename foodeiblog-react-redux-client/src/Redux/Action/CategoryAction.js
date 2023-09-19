import { LOAD_CATEGORIES } from "../ActionTypes/ActionTypes";

const loadCategories = data =>{
    return({
        type: LOAD_CATEGORIES,
        payload: data
    });
}

export default loadCategories;