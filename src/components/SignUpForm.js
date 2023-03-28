import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isViewPassowrd, setIsViewPassword] = useState(false);
  const [isViewConfirmPassword, setIsViewConfirmPassword] = useState(false);
  const [accountType, setAccountType]=useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandle(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        toast.error("password not matched");
    }
    setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        console.log("printing account data ");
        console.log(accountData);

        navigate("/dashboard");
  }

  return (
    <div className="w-full">
      {/* buttons */}
      <div className="flex bg-richblack-100 p-1 gap-x-1 rounded-full max-w-max">
        <button 
        className={`${accountType==="student" ?"bg-richblack-900 text-richblack-5" :"bg-transparent text-richblack-700" } 
        py-2 px-5 rounded-full transition-all duration-200
        `}
        onClick={()=> setAccountType("student")}>
        Student
        </button>
        <button 
        className={`${accountType==="Instructor" ?"bg-richblack-900 text-richblack-5" :"bg-transparent text-richblack-700" }
        py-2 px-5 rounded-full transition-all duration-200 `}
        onClick={()=> setAccountType("Instructor")}>
        Instructor
        </button>
      </div>
      <form onSubmit={submitHandle} className="w-full">
        {/* first And last name */}
        <div className='flex gap-x-4 mt-[20px]'>
          <label className='w-full'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>

            <input
              required
              name="firstname"
              type="text"
              placeholder="Enter first Name"
              onChange={changeHandler}
              value={formData.firstname}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>
          <label className="w-full">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Last Name<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              name="lastname"
              type="text"
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastname}
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>
        </div>
        {/* Email box */}
        <div className='mt-[20px]'>
          <label className="w-full">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Email id<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter email id"
              name="email"
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
          </label>
        </div>
        {/* password and confirm password */}
        <div className='w-full flex gap-x-4 mt-[20px]'>
          <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Create Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type={isViewPassowrd ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter password"
              name="password"
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span onClick={() => setIsViewPassword((prev) => !prev)} className='absolute right-3 top-[38px] cursor-pointer'>
              {isViewPassowrd ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>
          {/* confirm password */}
          <label className="w-full relative">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Confirm Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type={isViewConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Enter password"
              name="confirmPassword"
              className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span onClick={() => setIsViewConfirmPassword((prev) => !prev)} className='absolute right-3 top-[38px] cursor-pointer'>
              {isViewConfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>
        </div>
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full' 
        >Creat an Account</button>
      </form>
    </div>
  );
};

export default SignUpForm;
