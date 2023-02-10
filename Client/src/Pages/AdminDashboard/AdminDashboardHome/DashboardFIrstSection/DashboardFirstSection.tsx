import React from 'react';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { ImManWoman } from 'react-icons/im';
import { RiParentFill, RiTeamFill } from 'react-icons/ri';

const DashboardFirstSection = () => {
    return (
        <div className="dashboard-first-section">
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5">
                    <div className="all-students flex justify-evenly items-center bg-white py-5 rounded-md">
                        <div className="student-icon w-[85px] h-[85px] leading-[85px] rounded-full text-[#3cb878] bg-[#d1f3e0] flex items-center justify-center">
                            <RiTeamFill className="w-12 h-12"></RiTeamFill>
                        </div>
                        <div className="students-total">
                            <h3 className="text-[#a8a8a8] mb-1">Students</h3>
                            <p className="text-[#111111] font-medium text-xl">15000</p>
                        </div>
                    </div>
                    <div className="all-students flex justify-evenly items-center bg-white py-5 rounded-md">
                        <div className="student-icon w-[85px] h-[85px] leading-[85px] rounded-full text-[#3f7afc] bg-[#e1f1ff] flex items-center justify-center">
                            <ImManWoman className="w-12 h-12"></ImManWoman>
                        </div>
                        <div className="students-total">
                            <h3 className="text-[#a8a8a8] mb-1">Teachers</h3>
                            <p className="text-[#111111] font-medium text-xl">25</p>
                        </div>
                    </div>
                    <div className="all-students flex justify-evenly items-center bg-white py-5 rounded-md">
                        <div className="student-icon w-[85px] h-[85px] leading-[85px] rounded-full text-[#ffa001] bg-[#fff2d8] flex items-center justify-center">
                            <RiParentFill className="w-12 h-12"></RiParentFill>
                        </div>
                        <div className="students-total">
                            <h3 className="text-[#a8a8a8] mb-1">Parents</h3>
                            <p className="text-[#111111] font-medium text-xl">850</p>
                        </div>
                    </div>
                    <div className="all-students flex justify-evenly items-center bg-white py-5 rounded-md">
                        <div className="student-icon w-[85px] h-[85px] leading-[85px] rounded-full text-[#ff0000] bg-[#ffeaea] flex items-center justify-center">
                            <FaMoneyBillAlt className="w-12 h-12"></FaMoneyBillAlt>
                        </div>
                        <div className="students-total">
                            <h3 className="text-[#a8a8a8] mb-1">Earning</h3>
                            <p className="text-[#111111] font-medium text-xl">$5455</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default DashboardFirstSection;