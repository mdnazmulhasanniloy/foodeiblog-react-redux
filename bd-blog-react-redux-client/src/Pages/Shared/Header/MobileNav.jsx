import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';
import { logoutInitiate } from '../../../Redux/Thunk/FetchUsers';
import { useDispatch, useSelector } from 'react-redux';

const MobileNav = ({navItem}) => {
    const [isOpen, setIsOpen] = useState(false); 
    const {currentUser}= useSelector(state=>state?.user)
  const dispatch = useDispatch()
    return (
        <div className=" ">
        <nav className='flex justify-between navbar  px-5 bg-black lg:hidden'>
        
        <div className="">
          <Link className="flex items-end gap-2">
                  <h3 className='text-4xl font-bold text-white '>Food Blog</h3> 
                  <div className="h-2 w-2 bg-yellow-400"></div>
          </Link>
        </div>  
         
        
        <label onClick={()=>setIsOpen(!isOpen)} className={`${isOpen?"rotate-90":"rotate-0"} hover:cursor-pointer transition-all duration-500`}>
          { isOpen?      
                    <IoMdClose className='text-white' />
                   : 
                   <FiMenu className='text-white' />
          }
        </label>
      </nav>
      <div className={`${isOpen? "h-auto block" : "h-0 hidden"}  bg-black text-white left-0 w-full p-3 flex justify-center transition-[height] ease-in-out duration-1000`}>
        <ul className="flex flex-col items-center gap-4">
                {navItem?.map((item, index) => {
                return (
                    <li key={index}>
                    <NavLink to={item.link} className="py-2 px-5 uppercase hover:bg-yellow-300 hover:text-black active:bg-yellow-300 active:text-black  "> 
                        {item.name}
                    </NavLink>
                    </li>
                );
                })}
                <li>
              {
                currentUser? 
                <Link onClick={()=> dispatch(logoutInitiate())} 
                  className=" px-4 py-2 uppercase hover:bg-yellow-300 hover:text-black"
                 >Sign Out</Link> 
                :<NavLink to="/login" className=" px-4 py-2 uppercase hover:bg-yellow-300 hover:text-black">Login</NavLink>
              }
            </li>
            </ul> 
      </div>
            
        </div>
    );
};

export default MobileNav;