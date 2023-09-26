import {LOAD_BLOGS } from "../ActionTypes/ActionTypes";

const initialState = {
    blogs: [],
  };

  export const blogsReducer = (state = initialState, action) => {


    switch (action.type){
        case LOAD_BLOGS : {
            return {
              ...state,
              blogs: action.payload
            }
        }

        default: {
            return state;
        }
    }

  }