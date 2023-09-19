import { SORT_BY_CATEGORY } from "../ActionTypes/ActionTypes"

export const initialState={
    filters:{
        category: "", 
    }, 
}


export const filterReducer = (state=initialState, action)=>{
    switch(action.type){
        case SORT_BY_CATEGORY:
            return{
                ...state,
                filters:{...state.filters, category:action.payload}
            }

        default: return state
    }

}