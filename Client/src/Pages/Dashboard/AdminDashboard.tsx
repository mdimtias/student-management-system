import React from 'react';
import { FiGrid } from 'react-icons/fi';
import { RiFilePaper2Line } from 'react-icons/ri';
import { BsFillCalendarEventFill,BsFillGearFill, BsShieldCheck } from 'react-icons/bs';
import { HiAcademicCap } from 'react-icons/hi';
import { MdAccountBalanceWallet, MdOutlineEvent, MdSportsBasketball } from 'react-icons/md';
import { FaChalkboardTeacher,FaBusAlt,FaBlogger,FaRegMoneyBillAlt, FaRegBuilding, FaBookReader } from 'react-icons/fa';
import AddStudent from './AddStudent/AddStudent';
import { useTitle } from '../../hooks/useTitle';


const AdminDashboard = () => {
    useTitle("Admin Dashboard")
    const btnClass = `hover:bg-blue-500 py-2 px-3 hover:text-white rounded-lg  ease-in-out duration-300 w-full`;
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
                        <button className={btnClass}>

                            Admin Dashboard
                        </button>
                        <button className={btnClass}>Teacher Dashboard</button>
                        <button className={btnClass}>Student Dashboard</button>
                    </div>
                </div>

                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <HiAcademicCap className='text-lg mr-3' />
                        Students
                    </div>
                    <div className="collapse-content">
                        <button className={btnClass}>Student List</button>
                        <button className={btnClass}>Student View</button>
                        <button className={btnClass}>Student Add</button>
                        <button className={btnClass}>Student Edit</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <FaChalkboardTeacher className='text-lg mr-3' />
                        Teacher
                    </div>
                    <div className="collapse-content">
                        <button className={btnClass}>Teacher List</button>
                        <button className={btnClass}>Teacher View</button>
                        <button className={btnClass}>Teacher Add</button>
                        <button className={btnClass}>Teacher Edit</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <FaRegBuilding className='text-lg mr-3' />
                        Department
                    </div>
                    <div className="collapse-content">
                        <button className={btnClass}>Department List</button>
                        <button className={btnClass}>Department View</button>
                        <button className={btnClass}>Department Add</button>
                        <button className={btnClass}>Department Edit</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <FaBookReader className='text-lg mr-3' />
                        Subject
                    </div>
                    <div className="collapse-content">
                        <button className={btnClass}>Subject List</button>
                        <button className={btnClass}>Subject View</button>
                        <button className={btnClass}>Subject Add</button>
                        <button className={btnClass}>Subject Edit</button>
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
                        <button className={btnClass}>Accounts List</button>
                        <button className={btnClass}>Accounts View</button>
                        <button className={btnClass}>Accounts Add</button>
                        <button className={btnClass}>Accounts Edit</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <MdOutlineEvent className='text-lg mr-3' />
                        Holiday
                    </div>
                    <div className="collapse-content">
                        <button className={btnClass}>Holiday List</button>
                        <button className={btnClass}>Holiday Add</button>
                        <button className={btnClass}>Holiday Edit</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <FaRegMoneyBillAlt className='text-lg mr-3' />
                        Fees
                    </div>
                    <div className="collapse-content">
                        <button className={btnClass}>Fees List</button>
                        <button className={btnClass}>Fees Add</button>
                        <button className={btnClass}>Fees Edit</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <RiFilePaper2Line className='text-lg mr-3' />
                        Exams
                    </div>
                    <div className="collapse-content">
                        <button className={btnClass}>Exams List</button>
                        <button className={btnClass}> Add Exams</button>
                        <button className={btnClass}> Edit Exams</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <BsFillCalendarEventFill className='text-lg mr-3' />
                        Events
                    </div>
                    <div className="collapse-content">
                        <button className={btnClass}>Events List</button>
                        <button className={btnClass}> Add Events</button>
                        <button className={btnClass}> Edit Events</button>
                    </div>
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <FaBlogger className='text-lg mr-3' />
                        Blogs
                    </div>
                    <div className="collapse-content">
                        <button className={btnClass}>Blogs List</button>
                        <button className={btnClass}> Add Blogs</button>
                        <button className={btnClass}> Edit Blogs</button>
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
                        <button className={btnClass}>Sports List</button>
                        <button className={btnClass}> Add Sports</button>
                        <button className={btnClass}> Edit Sports</button>
                    </div>
                        
                    
                </div>
                <div tabIndex={0} className="collapse w-full collapse-arrow  text-black  bg-base-100   rounded-lg  mb-1">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-start items-center rounded-lg font-semibold">
                        <FaBusAlt className='text-lg mr-3' />
                        Transport
                    </div>
                    
                    <div className="collapse-content">
                        <button className={btnClass}>Transport List</button>
                        <button className={btnClass}> Add Transport</button>
                        <button className={btnClass}> Edit Transport</button>
                    </div>
                        
                    
                </div>

            </div>
            <div className='w-4/5 bg-[#F0F1F3]'>
                <AddStudent></AddStudent>
            </div>
        </div>
    );
};

export default AdminDashboard;