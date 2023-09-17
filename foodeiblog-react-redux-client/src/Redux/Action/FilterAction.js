import {  SORT_BY_CATEGORY } from "../ActionTypes/ActionTypes"


export const sortByCategory = (category)=>{
    return{
        type: SORT_BY_CATEGORY,
        payload: category
    }
}
