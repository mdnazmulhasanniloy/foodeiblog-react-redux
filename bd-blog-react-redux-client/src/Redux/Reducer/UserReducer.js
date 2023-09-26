import { GOOGLE_SIGN_IN_FAIL, GOOGLE_SIGN_IN_START, GOOGLE_SIGN_IN_SUCCESS, LOGIN_FAIL, 
         LOGIN_START, 
         LOGIN_SUCCESS, 
         LOGOUT_FAIL, 
         LOGOUT_START, 
         LOGOUT_SUCCESS, 
         REGISTER_FAIL, 
         REGISTER_START, 
         REGISTER_SUCCESS,  } from './../ActionTypes/ActionTypes';

const initialState ={
    loading: false,
    currentUser: null,
    error: null,
}

const userReducer =(state= initialState, action) => {
    switch(action.type) {
        //register case
        case REGISTER_START:
            return {
                ...state,
                loading: true,
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                loading: false,
                currentUser: action.payload,
            }
        case REGISTER_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        
            //login case
            case LOGIN_START:
                return {
                    ...state,
                    loading: true,
                }
            case LOGIN_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    currentUser: action.payload,
                }
            case LOGIN_FAIL:
                return{
                    ...state,
                    loading: false,
                    error: action.payload
                }

            //google sign in cases 
            case GOOGLE_SIGN_IN_START:
                return {
                    ...state,
                    loading: true,
                }
            case GOOGLE_SIGN_IN_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    currentUser: action.payload,
                }
            case GOOGLE_SIGN_IN_FAIL:
                return{
                    ...state,
                    loading: false,
                    error: action.payload
                }
                
            // logout case 
            case LOGOUT_START:
                return {
                    ...state,
                    loading: true,
                }
            case LOGOUT_SUCCESS:
                localStorage?.removeItem("accessToken")
                return{
                    ...state,
                    loading: false,
                    currentUser: null,
                }
            case LOGOUT_FAIL:
                return{
                    ...state,
                    loading: false,
                    error: action.payload
                }
            
            

        default: 
        return state
    }
}

export default userReducer;