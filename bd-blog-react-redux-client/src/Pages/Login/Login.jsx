import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form'; 
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { googleSignInInitiate, loginInitiate } from '../../Redux/Thunk/FetchUsers';
import useToken from '../../Hooks/useToken';

const Login = () => {  
    const [passwordToggle, setPasswordToggle] = useState(false); 
    const { register, formState: { errors }, handleSubmit } = useForm(); 
    const {currentUser, error, loading}= useSelector(state=>state?.user)
    const [token] = useToken(currentUser?.email)
    const location = useLocation()
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const from = location?.state?.from || '/';

    useEffect(()=>{
        if (token) {
            navigate(from, { replace: true }) 
            toast.success('Register success full');
    
        }
    },[token, from, navigate])

    if(error){
        toast.error(error);
    }

    
    const onSubmit = (data) => { 
        const email = data?.email;
        const password = data?.password; 

        dispatch(loginInitiate(email, password))
    }
    const handelToGoogleLogin = () => {
        dispatch(googleSignInInitiate());
    }

    return (
        <div className="hero mt-20">
            <div className="card flex-shrink-0 w-full max-w-[600px] shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="flex items-end justify-center my-5  gap-2">
                        <h1 className='text-5xl font-bold text-center '>Login</h1>
                        <div className="h-2 w-2 bg-yellow-400"></div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" {...register("email", {
                                required: "Please enter a valid email address (the data you entered is not in the right format) ",
                              

                            })} className={errors.email ? "input input-bordered input-error" : "input input-bordered input-warning"} />
                            {
                                errors.email && <p className=' text-red-600 mt-3'>{errors.email.message}</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={passwordToggle ? 'text' : 'password'} placeholder="password" {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "At last provide 6 characters" },
                                pattern: {
                                    value: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/,
                                    message: "must include lower, upper, number, and special chars"
                                }
                            })} className={errors.password ? "input input-bordered input-error" : "input input-bordered input-warning "} />
                        </div>
                        <div className=' flex justify-end mr-5 -mt-10 z-0'>
                            {
                                passwordToggle ? <AiFillEyeInvisible onClick={() => setPasswordToggle(!passwordToggle)} className='text-3xl cursor-pointer' />
                                    : <AiFillEye onClick={() => setPasswordToggle(!passwordToggle)} className='text-3xl cursor-pointer' />
                            }
                        </div>
                        {
                            errors.password && <p className=' text-red-600 mt-3'>{errors.password.message}</p>
                        }
                        <label className="label mt-2">
                            <Link href="#" className="label-text-alt text-sm link link-hover">Forgot password?</Link>
                        </label>
                        <div className="form-control mt-6">
                            <button type='submit' 
                            className={`btn bg-yellow-500 border-2 hover:bg-white hover:text-yellow-500 hover:border-yellow-500 transition-all duration-700`}>
                                {loading && <span className="loading loading-spinner"></span>}
                                {loading ? 'Loading' : 'Login'}
                            </button>
                        </div>
                    </form>
                    <label className="label ">
                        <p href="#" className="text-center text-sm">

                            Don't have account?
                            <Link to='/register' className="label-text-alt link link-hover text-yellow-500 text-sm ml-1">Create new account</Link>
                        </p>

                    </label>
                    <div className="flex my-5">
                        <div className="w-32 h-[2px] bg-yellow-500 flex-2"></div>
                        <p className='text-lg mt-[-15px] flex-1 text-center text-neutral'>OR</p>
                        <div className="w-32 h-[2px] flex-2 bg-yellow-500"></div>
                    </div>

                    <div className="form-control">
                        <button 
                            className={`btn hover:text-black hover:bg-yellow-500 border-2 bg-white text-yellow-500 border-yellow-500 transition-all duration-700`} 
                            onClick={handelToGoogleLogin} >
                                {loading && <span className="loading loading-spinner"></span>}
                                CONTINUE WITH GOOGLE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;