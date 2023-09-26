import React, { useEffect } from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; 
import { routes } from './Router/Router';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { setUser } from './Redux/Action/UserAction'; 
import app from './Firebase/Firebase.config';

function App() {
  const dispatch = useDispatch();  
  const auth = getAuth(app)


  useEffect(() => {
    const unsubscribe = onAuthStateChanged( auth, authUser => {
      if(authUser){ 
        dispatch(setUser(authUser));
      }else{
        dispatch(setUser(null));
      }
    });
    return () => {
        return unsubscribe();
    }
}, [dispatch, auth]);
  
  return (
    <div className="max-w-7xl mx-auto">  
        <RouterProvider router={routes} />
        <Toaster /> 
    </div>
  );
}

export default App;
