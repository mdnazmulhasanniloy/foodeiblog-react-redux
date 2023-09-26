import { LOAD_CATEGORIES } from "../ActionTypes/ActionTypes";

const initialState = {
    category:[], 
}



export const categoryReducer = (state = initialState, action) => {


    switch (action.type){
        case LOAD_CATEGORIES : {
            return {
              ...state,
              category: action.payload
            }
        }

        default: {
            return state;
        }
    }

  }