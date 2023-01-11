import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
        <div>


            <nav x-data aria-label="Site Navbar" className="overflow-x-hidden">
                <div className="bg-gray-100 border-b">
                    <div className="mx-auto max-w-screen-xl px-4 py-4">
                        <div className="flex items-center justify-between gap-x-8">
                            <Link to='/' className="flex cursor-pointer items-center gap-x-1"  >
                                <img className="object-cover w-12" src="https://img.freepik.com/premium-vector/abstract-em-initials-monogram-logo-design-line-art-icon-business-template-simple-elegant_619996-206.jpg?w=2000" alt="logo" />
                                <span className="text-lg font-black text-gray-900">EduManage</span>
                            </Link>
                            <ul className="flex items-center gap-x-6">
                                <li className="hidden md:block">
                                    <Link to='/' className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Home</Link>
                                </li>
                                <li className="hidden md:block">
                                    <Link to='products' className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Products</Link>
                                </li>
                                <li className="hidden md:block">
                                    <Link to='service' className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Service</Link>
                                </li>
                                <li className="hidden md:block">
                                    <Link to='contracts' className="cursor-pointer text-sm font-medium text-gray-900 hover:text-gray-900/70">Contract Us</Link>
                                </li>
                                <li className="flex items-center gap-x-4 sm:w-56">
                                    <form className="relative flex items-center gap-x-1 rounded-full bg-white">
                                        <label className="w-full">
                                            <input className="mr-12 w-full rounded-full border-2 border-gray-900 px-4 py-2 pr-10 text-sm font-medium text-gray-900 outline-0 ring-gray-400 focus:ring-2" type="text" placeholder="I'm searching for..." />
                                        </label>
                                        <button className="absolute right-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                            </svg>
                                        </button>
                                    </form>

                                    <button


                                        className="block cursor-pointer p-2 text-sm font-medium hover:border-gray-900/70 hover:text-gray-900/70 md:hidden"
                                    >
                                        <svg x-ref="menu" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                        <svg x-ref="close" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="hidden h-6 w-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav >
        </div >
    );
};

export default Navbar;