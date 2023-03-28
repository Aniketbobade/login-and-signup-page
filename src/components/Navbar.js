import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

export const Navbar = (props) => {
    let isLoggedIn =props.isLoggedIn;
    let setIsLoggedIn= props.setIsLoggedIn;
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={Logo} alt="Logo" width={132} height={16} loading="lazy" />
      </Link>
      <nav>
        <ul className='text-richblack-100 flex gap-x-6'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* buttons - singin logut dashboard sigup */}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn &&
            <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                <Link to="/login">
                    Login
                </Link>
            </button>
        }
        {!isLoggedIn &&
            <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                <Link to="/signup">
                    Sign Up
                </Link>
            </button>
        }
        {isLoggedIn &&
            <button onClick={()=>{
                setIsLoggedIn(false);
                toast.success("logout successfully")
            }} className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                <Link to="/">
                    Logout
                </Link>
            </button>
        }
        {isLoggedIn &&
            <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                <Link to="/dashboard">
                    Dashboard
                </Link>
            </button>
        }
       
      </div>
    </div>
  );
};

export default Navbar;
