import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(true);
    // const menuItems = <>
    //     {
    //         user?.email ?
    //             <>
    //                 <button onClick={handleLogout} className="py-1 px-5 hover:bg-rose-200 bg-rose-300 rounded-2xl border-2 font-semibold ease-in-out duration-300">SignOut</button>
    //             </>
    //             :
    //             <div className='items-center flex-shrink-0  lg:flex'>
    //                 <Link to='/login'><button className="py-1 px-5 text-black hover:bg-rose-200 bg-rose-300 rounded-2xl border-2 font-semibold ease-in-out duration-300">Sign in</button></Link>
    //                 <Link to='/register'><button className="py-1 px-5 text-black hover:bg-rose-200 bg-rose-300 rounded-2xl border-2 font-semibold ease-in-out duration-300">Join Now</button></Link>
    //             </div>
    //     }
    // </>
    return (
        <div className='w-full'>



            <div className="bg-gray-100 border-b md:px-4 py-2">
                <div className=" ">
                    <div className="flex items-center justify-between w-full ">
                        <div>
                            <Link to='/' className="flex cursor-pointer items-center "  >
                                <img className="object-cover w-12" src="https://img.freepik.com/premium-vector/abstract-em-initials-monogram-logo-design-line-art-icon-business-template-simple-elegant_619996-206.jpg?w=2000" alt="logo" />
                                <span className="text-lg font-black text-gray-900">EduManage</span>
                            </Link>
                        </div>


                        <ul className={`md:flex  md:mr-10 w-full items-center absolute md:static duration-200 ease-in bg-white justify-end gap-x-6  ${open ? 'hidden' : 'top-16 '}`}>
                            <li>
                                <Link to='/' className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Home</Link>
                            </li>
                            <li>
                                <Link to='products' className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Products</Link>
                            </li>
                            <li>
                                <Link to='service' className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Service</Link>
                            </li>
                            <li>
                                <Link to='contracts' className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Contract Us</Link>
                            </li>

                        </ul>


                        <div className="flex ">
                            <form className="relative flex items-center rounded-full bg-white">
                                <label className="w-full">
                                    <input className=" w-full rounded-full border-2 border-gray-900 px-4 py-2 pr-10 text-sm font-medium text-gray-900 outline-0 ring-gray-400 focus:ring-2" type="text" placeholder="I'm searching for..." />
                                </label>
                                <button className="absolute right-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        <button onClick={() => setOpen(!open)} className="block z-20 cursor-pointer p-2 text-sm font-medium hover:border-gray-900/70 hover:text-gray-900/70 md:hidden">
                            <svg x-ref="menu" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg x-ref="close" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="hidden h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                    </div>
                </div>

            </div>



        </div >
    );
};

export default Navbar;