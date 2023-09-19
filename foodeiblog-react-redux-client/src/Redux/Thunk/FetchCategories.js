import loadCategories from "../Action/CategoryAction";

const loadCategoriesData = ()=>{
    return async(dispatch, getState)=>{
        const res = await fetch("http://localhost:5000/categories")
        const data = await res.json();
        if(data.data.length > 0){
            // console.log(data)
            dispatch(loadCategories(data.data));
        }
    }
}


export default loadCategoriesData;