import React from "react";
import { AiFillDashboard, AiOutlineClose, AiTwotoneNotification } from "react-icons/ai";
import { HiMenu, HiUserGroup } from "react-icons/hi";
import { ImManWoman } from "react-icons/im"; 
import { CgNotes } from "react-icons/cg"; 
import { FaBed, FaBook, FaHotTub, FaReadme } from "react-icons/fa"; 
import { MdAccountBalance, MdGroup, MdHotelClass } from "react-icons/md";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { RiHealthBookFill, RiMapPin2Fill, RiMessage2Fill } from "react-icons/ri";
import { BsChevronDown, BsChevronRight, BsFillCheckCircleFill } from "react-icons/bs";
import "./AdminDashboard.css";
import { Link, Outlet } from "react-router-dom";
const AdminDashboard = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  if(collapsed){
    
  }
  return (
    <div className="section-admin-dashboard flex">
      <Sidebar backgroundColor="#042954">
      <div className={`flex gap-5 ${collapsed ? "justify-center" : "justify-between"} items-center bg-[#FFA701] p-5`}>
        {collapsed === false && <h2 className="font-bold text-2xl text-white">Admin</h2>}
        
        {collapsed ? <AiOutlineClose className="text-white text-2xl"  onClick={() => collapseSidebar()}></AiOutlineClose>:<HiMenu className="text-3xl text-white" onClick={() => collapseSidebar()}></HiMenu>}
      </div>
        <Menu 
         transitionDuration={700}
         renderExpandIcon={({ open }) => <span>{open ? <BsChevronDown className={`forward-arrow ${collapsed === true && 'hidden'}`} /> : <BsChevronRight className={`backward-arrow ${collapsed === true && 'hidden'}`} />}</span>}
         menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? '#f5d9ff' : '#9EA8A8',
                backgroundColor: active ? '#051F3E' : undefined,
                transition: 'all 0.3s ease-in-out',
                borderBottom: '1px solid #021933',
                textAlign: 'left',
                fontWeight: 500,
                fontFamily: 'Oswald',
                "&:hover": {
                  backgroundColor: "#051F3E !important",
                  color: "#ffffff !important",
                },
              };
             if(level === 1)
             return {
              color: disabled ? '#f5d9ff' : '#9EA8A8',
              backgroundColor: active ? '#051F3E' : '#051F3E',
              transition: 'all 0.3s ease-in-out',
              borderBottom: '1px solid #021933',
              textAlign: 'left',
              fontWeight: 500,
              fontFamily: 'Oswald',
              "&:hover": {
                backgroundColor: "#042954 !important",
                color: "#ffffff !important",
              },
             } 
          },
        }}
        >
          <SubMenu 
          label="Dashboard" 
          icon={<AiFillDashboard />}
          >
           <MenuItem component={<Link to="/courses" />}>Admin</MenuItem>
           <MenuItem component={<Link to="./"/>}>Students</MenuItem>
           <MenuItem component={<Link to="./"/>}>Parents</MenuItem>
           <MenuItem component={<Link to="./"/>}>Teachers</MenuItem>
          </SubMenu>
          <SubMenu
                label="Students"
                icon={<ImManWoman />}
              >
                <MenuItem className="active" active={window.location.pathname === "./all-students"} component={<Link to="./all-students"/>}>All Students</MenuItem>
                <MenuItem component={<Link to="./students-details" />}>Students Details</MenuItem>
                <MenuItem component={<Link to="./admission-form" />}>Admission Form</MenuItem>
                <MenuItem component={<Link to="./add-students" />}>Add Students</MenuItem>
          </SubMenu>
          
          <SubMenu
                label="Teachers"
                icon={<HiUserGroup />}
              >
               <MenuItem component={<Link to="./"/>}>All Teachers</MenuItem>
               <MenuItem component={<Link to="./"/>}>Teachers Details</MenuItem>
               <MenuItem component={<Link to="./"/>}>Add Teacher</MenuItem>
               <MenuItem component={<Link to="./"/>}>Payments</MenuItem>
          </SubMenu>
          <SubMenu
                label="Parents"
                icon={<MdGroup />}
              >
               <MenuItem component={<Link to="./"/>}>All Parents</MenuItem>
               <MenuItem component={<Link to="./"/>}>Parents Details</MenuItem>
               <MenuItem component={<Link to="./"/>}>Add Parent</MenuItem>
          </SubMenu>
          <SubMenu
                label="Library"
                icon={<FaReadme />}
              >
               <MenuItem component={<Link to="./"/>}>All Book</MenuItem>
               <MenuItem component={<Link to="./"/>}>Add New Book</MenuItem>
          </SubMenu>
          <SubMenu
                label="Account"
                icon={<MdAccountBalance />}
              >
               <MenuItem component={<Link to="./"/>}>All Fees Collection</MenuItem>
               <MenuItem component={<Link to="./"/>}>Expenses</MenuItem>
               <MenuItem component={<Link to="./"/>}>Add Expenses</MenuItem>
          </SubMenu>
          <SubMenu
                label="Class"
                icon={<MdHotelClass />}
              >
               <MenuItem component={<Link to="./"/>}>All Class</MenuItem>
               <MenuItem component={<Link to="./"/>}>Add New Class</MenuItem>
          </SubMenu>
          <MenuItem icon={<FaBook />}>Subject</MenuItem>
          <MenuItem icon={<RiHealthBookFill />}>Class Routing</MenuItem>
          <MenuItem icon={<BsFillCheckCircleFill />}>Attendance</MenuItem>
          <SubMenu
                label="Exam"
                icon={<CgNotes />}
              >
               <MenuItem component={<Link to="./"/>}>Exam Schedules</MenuItem>
               <MenuItem component={<Link to="./"/>}>Exam Grades</MenuItem>
          </SubMenu>
          <MenuItem icon={<FaHotTub />}>Transport</MenuItem>
          <MenuItem icon={<FaBed />}>Hostel</MenuItem>
          <MenuItem icon={<AiTwotoneNotification />}>Notice</MenuItem>
          <MenuItem icon={<RiMessage2Fill />}>Message</MenuItem>
          <MenuItem icon={<RiMapPin2Fill />}> Map</MenuItem>
        </Menu>
      </Sidebar>
      <main className="bg-[#F0F1F3] w-full overflow-hidden">
          <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AdminDashboard;
