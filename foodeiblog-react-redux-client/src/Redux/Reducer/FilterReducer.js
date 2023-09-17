import { CLEAR_FILTER, SORT_BY_CATEGORY, SORT_BY_TIME } from "../ActionTypes/ActionTypes"

export const initialState={
    filters:{
        category: "",
        create_at: "",
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