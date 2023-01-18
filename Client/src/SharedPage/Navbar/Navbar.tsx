import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(true);
    // const menuItems = <>
    //     {
    //         user?.email ?
    //             <>
    //                 <button onClick={handleLogout} className="py-1 px-5 hover:bg-blue-200 bg-rose-300 rounded-2xl border-2 font-semibold ease-in-out duration-300">SignOut</button>
    //             </>
    //             :
    //             <div className='items-center flex-shrink-0  lg:flex'>
    //                 <Link to='/login'><button className="py-1 px-5 text-black hover:bg-rose-200 bg-rose-300 rounded-2xl border-2 font-semibold ease-in-out duration-300">Sign in</button></Link>
    //                 <Link to='/register'><button className="py-1 px-5 text-black hover:bg-rose-200 bg-rose-300 rounded-2xl border-2 font-semibold ease-in-out duration-300">Join Now</button></Link>
    //             </div>
    //     }
    // </>
    return (
        <div className='w-full border-b md:px-4 py-2 bg-white shadow-md'>
            <div className="flex items-center justify-center w-full ">

                {/* burger menu button start */}
                <button onClick={() => setOpen(!open)} className="w-full  z-20 cursor-pointer p-2 text-sm font-medium hover:border-gray-900/70 hover:text-gray-900/70 md:hidden">
                    <svg x-ref="menu" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg x-ref="close" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="hidden h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {/* burger menu button end */}

                <div className='w-full flex justify-center md:w-1/5'>
                    <Link to='/' className="flex cursor-pointer items-center "  >
                        <img className="object-cover w-12" src="https://img.freepik.com/premium-vector/abstract-em-initials-monogram-logo-design-line-art-icon-business-template-simple-elegant_619996-206.jpg?w=2000" alt="logo" />
                        <span className="text-lg font-black text-gray-900 z-20">EduManage</span>
                    </Link>
                </div>


                <ul className={`md:flex w-full md:w-3/5  md:mr-10 items-center absolute md:static duration-200 ease-in pb-5 md:pb-0 text-center bg-white justify-center gap-x-0  ${open ? 'top-[-200px]' : 'top-16 '}`}>
                    <li className=' py-2 px-5 text-black hover:bg-blue-100  rounded-2xl  font-semibold ease-in-out duration-300'>
                        <Link to='/' className="cursor-pointer text-sm font-medium  text-gray-900">Home</Link>
                    </li>
                    <li className=' py-2 px-5 text-black hover:bg-blue-100  rounded-2xl  font-semibold ease-in-out duration-300'>
                        <Link to='/student-profile' className="cursor-pointer text-sm font-medium text-gray-900">Student</Link>
                    </li>
                    <li className=' py-2 px-5 text-black hover:bg-blue-100  rounded-2xl  font-semibold ease-in-out duration-300'>
                        <Link to='/courses' className="cursor-pointer text-sm font-medium text-gray-900">Course</Link>
                    </li >
                    <li className=' py-2 px-5 text-black hover:bg-blue-100  rounded-2xl  font-semibold ease-in-out duration-300'>
                        <Link to='/contact' className="cursor-pointer text-sm font-medium text-gray-900">Contract Us</Link>
                    </li>

                </ul>






                <div className='items-center flex-shrink-0 hidden   md:flex justify-center md:w-1/5 '>
                    <Link to='/login'><button className="py-2 px-5 text-black hover:bg-blue-200 bg-blue-300 rounded-2xl border-2 font-semibold ease-in-out duration-300">Sign in</button></Link>
                    <Link to='/register'><button className="py-2 px-5 text-black hover:bg-blue-200 bg-blue-300 rounded-2xl border-2 font-semibold ease-in-out duration-300">Join Now</button></Link>
                </div>

            </div>


        </div>




    );
};

export default Navbar;