import {GOOGLE_SIGN_IN_FAIL, GOOGLE_SIGN_IN_START, GOOGLE_SIGN_IN_SUCCESS, LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_START, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_START, REGISTER_SUCCESS, SET_USER, } from "../ActionTypes/ActionTypes"

//register actions
export const registerStart = ()=>{
    return{
        type: REGISTER_START, 
    }
}
export const registerSuccess = (user)=>{
    return{
        type: REGISTER_SUCCESS, 
        payload: user,
    }
}
export const registerFail = (error)=>{
    return{
        type: REGISTER_FAIL, 
        payload: error,
    }
}

//login actions

export const loginStart = ()=>{
    return{
        type: LOGIN_START 
    }
}
export const loginSuccess = (user)=>{
    return{
        type: LOGIN_SUCCESS, 
        payload: user,
    }
}
export const loginFail = (error)=>{
    return{
        type: LOGIN_FAIL, 
        payload: error,
    }
}


//GOOGLE SIGN IN  ACTIONS

export const googleSignInStart = ()=>{
    return{
        type: GOOGLE_SIGN_IN_START,
    }
}
export const googleSignInSuccess = (user)=>{
    return{
        type: GOOGLE_SIGN_IN_SUCCESS, 
        payload: user,
    }
}
export const googleSignInFail = (error)=>{
    return{
        type: GOOGLE_SIGN_IN_FAIL, 
        payload: error,
    }
}


//SAVE USER ACTION
// export const saveUser = (user)=>{
//     return{
//         type: SAVE_USER,
//         payload: user
//     }
// }

//set user

export const setUser=(user)=>{ 
    return{
        type: SET_USER,
        payload: user,
    }
}

//logout actions

export const logoutStart = ()=>{
    return{
        type: LOGOUT_START
    }
}
export const logoutSuccess = ()=>{
    
    return{
        type: LOGOUT_SUCCESS,
    }
}
export const logoutFail = (error)=>{
    return{
        type: LOGOUT_FAIL, 
        payload: error,
    }
}





