
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup } from "firebase/auth";
import { googleSignInFail, googleSignInSuccess, loginFail, loginStart, loginSuccess, logoutFail, logoutStart, logoutSuccess, registerFail, registerStart, registerSuccess } from "../Action/UserAction"  
import app, { googleAuthProvider } from "../../Firebase/Firebase.config";
import { googleSignInStart } from './../Action/UserAction';
import toast from "react-hot-toast";



const auth = getAuth(app);




//register fetch
export const registerInitiate =(email, password, name)=>{ 
    const userInfo = {
        displayName: name, 

    }
    return (dispatch, getState)=>{
        dispatch(registerStart());
            createUserWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            if(user){
                updateProfile(auth.currentUser, userInfo)
                .then(() => { 
                    saveUser(user, registerSuccess, registerFail, dispatch) 

                })
                .catch(error => { 
                    dispatch(registerFail(error.message));
                });
               
                
            }
            
        })
        .catch((error)=>{
            dispatch(registerFail(error.message));
        })
        
    }
}



// login fetch 

export const loginInitiate = (email, password) =>{
    return (dispatch, getState) =>{
        dispatch(loginStart());
            signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{ 
            dispatch(loginSuccess(user));
        })
        .catch((error)=>{
            dispatch(loginFail(error.message));
        })
    }
}


//google sing in fetch

export const googleSignInInitiate =()=>{
    return(dispatch, getState)=>{
        dispatch(googleSignInStart());
            signInWithPopup(auth, googleAuthProvider)
        .then(({user})=>{ 
            saveUser(user, googleSignInSuccess, googleSignInFail, dispatch) 
        })
        .catch((error)=>{
            dispatch(googleSignInFail(error.message));
        })
    }
}

// logout fetch 

export const logoutInitiate = () =>{
    return (dispatch, getState) =>{
        dispatch(logoutStart());
            signOut(auth)
        .then((res)=>{ 
            dispatch(logoutSuccess());
        })
        .catch((error)=>{
            dispatch(logoutFail(error.message));
        })
    }
}



//save user 

const saveUser = async(user, registerSuccess, registerFail, dispatch) => {
    const userData = {
        displayName: user?.displayName,
        email: user?.email,
        img: user?.photoURL,
        role: "buyer",
        address:{
            country: "",
            state: "",
            city: "",
        }
    }
    console.log(userData)
    const res = await fetch(`http://localhost:5000/users`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(userData)
        
    })
    const data = await res.json();
    console.log(data)
    if(data?.success){
        return (dispatch(registerSuccess(user)), toast.success(data.message));
    }else{
        return dispatch(registerFail(data?.message));
    }
        
}