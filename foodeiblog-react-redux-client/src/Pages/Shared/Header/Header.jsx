import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import MobileNav from './MobileNav';

const Header = () => {

                  const navItem = [
                    {
                      name: "home",
                      link: "/", 
                    },
                    {
                      name: "Blogs",
                      link: "/blogs", 
                    },
                    {
                      name: "Foods",
                      link: "/foods", 
                    },
                    {
                      name: "About",
                      link: "/about", 
                    },
                    {
                      name: "Contact",
                      link: "/contact",  
                    }
                  ] 
 
    return (
      <div className="">
      

      <nav className='navbar  justify-between hidden lg:flex shadow-md'>
        <div className="">
          <Link className="flex items-end gap-2">
                  <h3 className='text-4xl font-bold '>Food Blog</h3> 
                  <div className="h-2 w-2 bg-yellow-400"></div>
          </Link>
        </div>  
        <ul className="">
            {navItem?.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.link} className=" px-4 py-2 uppercase hover:bg-yellow-300 active:bg-yellow-300  "> 
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
        </ul> 
      </nav>

      {
        <MobileNav navItem={navItem} />
      }
      
    </div>
    );
};

export default Header;