import React from 'react';
import { FiGrid } from 'react-icons/fi';
import { RiFilePaper2Line } from 'react-icons/ri';
import { BsFillCalendarEventFill,BsFillGearFill, BsShieldCheck } from 'react-icons/bs';
import { HiAcademicCap } from 'react-icons/hi';
import { MdAccountBalanceWallet, MdOutlineEvent, MdSportsBasketball } from 'react-icons/md';
import { FaChalkboardTeacher,FaBusAlt,FaBlogger,FaRegMoneyBillAlt, FaRegBuilding, FaBookReader } from 'react-icons/fa';
import dimg from './../../assets/a.png';


const AdminDashboard = () => {
    const btnclass = `hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg  ease-in-out duration-300 w-full`;
    return (
        <div className=' w-full  flex'>
            <div className='w-1/5 bg-blue-100 px-5 pt-3 max-h-screen  rounded-lg scrollbar overflow-y-scroll '>
                <h1 className='text-start ml-4 font-semibold text-sm mb-2'>Main Menu</h1>


                <div className="collapse w-full collapse-arrow  text-black  bg-base-100  rounded-lg mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold ">
                        <FiGrid className='text-lg mr-3' />
                        Dashboard
                    </div>
                    <div className="collapse-content">
                        <button className={btnclass}>

                            Admin Dashboard
                        </button>
                        <button className={btnclass}>Teacher Dashboard</button>
                        <button className={btnclass}>Student Dashboard</button>
                    </div>
                </div>

                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <HiAcademicCap className='text-lg mr-3' />
                        Students
                    </div>
                    <div className="collapse-content">
                        <button className={btnclass}>Student List</button>
                        <button className={btnclass}>Student View</button>
                        <button className={btnclass}>Student Add</button>
                        <button className={btnclass}>Student Edit</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <FaChalkboardTeacher className='text-lg mr-3' />
                        Teacher
                    </div>
                    <div className="collapse-content">
                        <button className={btnclass}>Teacher List</button>
                        <button className={btnclass}>Teacher View</button>
                        <button className={btnclass}>Teacher Add</button>
                        <button className={btnclass}>Teacher Edit</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <FaRegBuilding className='text-lg mr-3' />
                        Department
                    </div>
                    <div className="collapse-content">
                        <button className={btnclass}>Department List</button>
                        <button className={btnclass}>Department View</button>
                        <button className={btnclass}>Department Add</button>
                        <button className={btnclass}>Department Edit</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <FaBookReader className='text-lg mr-3' />
                        Subject
                    </div>
                    <div className="collapse-content">
                        <button className={btnclass}>Subject List</button>
                        <button className={btnclass}>Subject View</button>
                        <button className={btnclass}>Subject Add</button>
                        <button className={btnclass}>Subject Edit</button>
                    </div>
                </div>

                {/* management section start  */}

                <h1 className='text-start ml-4 font-semibold text-sm mb-2'>Management</h1>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <MdAccountBalanceWallet className='text-lg mr-3' />
                        Accounts
                    </div>
                    <div className="collapse-content">
                        <button className={btnclass}>Accounts List</button>
                        <button className={btnclass}>Accounts View</button>
                        <button className={btnclass}>Accounts Add</button>
                        <button className={btnclass}>Accounts Edit</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <MdOutlineEvent className='text-lg mr-3' />
                        Holiday
                    </div>
                    <div className="collapse-content">
                        <button className={btnclass}>Holiday List</button>
                        <button className={btnclass}>Holiday Add</button>
                        <button className={btnclass}>Holiday Edit</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <FaRegMoneyBillAlt className='text-lg mr-3' />
                        Fees
                    </div>
                    <div className="collapse-content">
                        <button className={btnclass}>Fees List</button>
                        <button className={btnclass}>Fees Add</button>
                        <button className={btnclass}>Fees Edit</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <RiFilePaper2Line className='text-lg mr-3' />
                        Exams
                    </div>
                    <div className="collapse-content">
                        <button className={btnclass}>Exams List</button>
                        <button className={btnclass}> Add Exams</button>
                        <button className={btnclass}> Edit Exams</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <BsFillCalendarEventFill className='text-lg mr-3' />
                        Events
                    </div>
                    <div className="collapse-content">
                        <button className={btnclass}>Events List</button>
                        <button className={btnclass}> Add Events</button>
                        <button className={btnclass}> Edit Events</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <FaBlogger className='text-lg mr-3' />
                        Blogs
                    </div>
                    <div className="collapse-content">
                        <button className={btnclass}>Blogs List</button>
                        <button className={btnclass}> Add Blogs</button>
                        <button className={btnclass}> Edit Blogs</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <BsFillGearFill className='text-lg mr-3' />
                        Settings
                    </div>

                </div>
                {/* pages section start  */}

                <h1 className='text-start ml-4 font-semibold text-sm mb-2'>Pages</h1>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <BsShieldCheck className='text-lg mr-3' />
                        Authentication
                    </div>
                    <div className="collapse-content">
                        
                        
                    </div>
                </div>
                {/* others section start  */}

                <h1 className='text-start ml-4 font-semibold text-sm mb-2'>Others</h1>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <MdSportsBasketball className='text-lg mr-3' />
                        Sports
                    </div>
                    
                    <div className="collapse-content">
                        <button className={btnclass}>Sports List</button>
                        <button className={btnclass}> Add Sports</button>
                        <button className={btnclass}> Edit Sports</button>
                    </div>
                        
                    
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <FaBusAlt className='text-lg mr-3' />
                        Transport
                    </div>
                    
                    <div className="collapse-content">
                        <button className={btnclass}>Transport List</button>
                        <button className={btnclass}> Add Transport</button>
                        <button className={btnclass}> Edit Transport</button>
                    </div>
                        
                    
                </div>

            </div>
            <div className='w-4/5'>
                <img src={dimg} alt="" />
            </div>
        </div>
    );
};

export default AdminDashboard;