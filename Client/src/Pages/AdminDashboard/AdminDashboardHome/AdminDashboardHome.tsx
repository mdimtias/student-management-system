import React from 'react';
import DashboardTopHeader from '../DashboardTopHeader/DashboardTopHeader';
import DashboardFirstSection from './DashboardFIrstSection/DashboardFirstSection';
import EarningSection from './EarningSection/EarningSection';
import NoticeBoard from './NoticeBoard/NoticeBoard';
import TopStudents from './TopStudents/TopStudents';
import TotalStudents from './TotalStudents/TotalStudents';
const AdminDashboardHome = () => {
    return (
        <div className="dashboard-home-section py-5 px-7">
           <DashboardTopHeader name="Dashboard" title="Admin Dashboard"></DashboardTopHeader>
            <DashboardFirstSection></DashboardFirstSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5">
                <EarningSection></EarningSection>
                <TotalStudents></TotalStudents>
                <TopStudents></TopStudents>
                <NoticeBoard></NoticeBoard>
            </div>
        </div>
    );
};

export default AdminDashboardHome;