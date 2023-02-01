import React, { useState } from 'react';
import { useTitle } from '../../../../hooks/useTitle';
import male from "./../../../../assets/Students/male.png";
import female from "./../../../../assets/Students/female.png";
import DashboardTopHeader from '../../DashboardTopHeader/DashboardTopHeader';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../../SharedPage/Loader/Loader';

const AllTeachers = () => {
    useTitle("All Teachers")
    const [query, setQuery] = useState({
      name: "",
      email: "",
      parentName: ""
    })
    const { isLoading, error, data: teachers=[] } = useQuery({
      queryKey: ['teachers'],
      queryFn: async () =>
        await fetch(`${process.env.REACT_APP_API_URL}/teachers`, {
          headers: {
            'authorization': `${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
          }
        })
        .then((res) => res.json())
        .then((data)=>data.data)
  })
  console.log(teachers)
    return (
        <div className="all-students-section py-5 px-7">
       <DashboardTopHeader name="Teachers" title="All Teachers"></DashboardTopHeader>
        <div>
          <div className="bg-white p-5">
            <div className="search-all-student pb-5">
              <h2 className="font-bold text-2xl pb-5">All Teachers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">               
                <div className="name">
                  <input type="text" onChange={(e)=>setQuery({...query, name: e.target.value.toLocaleLowerCase()})} className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Name"/>
                </div>
                <div className="email">
                  <input type="text" onChange={(e)=>setQuery({...query, email: e.target.value.toLocaleLowerCase()})} className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Email"/>
                </div>
                <div className="parent">
                  <input type="text" onChange={(e)=>setQuery({...query, parentName: e.target.value.toLocaleLowerCase()})} className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Parent Name" />
                </div>
                <div className="search-btn">
                  <button className="bg-[#042954] py-2 px-10 rounded lg font-bold text-white w-full hover:bg-[#3D5EE1]">Search</button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
            <table className="table w-full table-compact">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Parent</th>
                  <th>Address</th>
                  <th>Date Of Birth</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {teachers?.filter((teacher:any)=>teacher?.name?.toLowerCase().includes(query.name))
              .filter((teacher:any)=>teacher?.email?.toLowerCase().includes(query.email))
              .filter((teacher:any)=>teacher?.fatherName?.toLowerCase().includes(query.parentName))
                .map((teacher:any, i:any) => (
                  <tr key={teacher._id} className={`${i % 2 ? "" : "active"}`}>
                    <td className="">
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img
                            src={
                              teacher?.teacherPhoto
                                ? teacher.teacherPhoto
                                : teacher.gender === "Male"
                                ? male
                                : female
                            }
                            alt={teacher.name}
                          />
                        </div>
                      </div>
                    </td>
                    <td>{teacher.name}</td>
                    <td>{teacher.gender}</td>
                    <td>{teacher.fatherName}</td>
                    <td>{teacher.address}</td>
                    <td>{teacher.dateOfBirth}</td>
                    <td>{teacher.phone}</td>
                    <td>{teacher.email}</td>
                    <td>Edit || Delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {isLoading && <Loader></Loader>}
            <>{error && <p className="font-bold text-lg pt-5">Something went wrong</p>}</>
            </div>
       
          </div>
        </div>
      </div>
    );
};

export default AllTeachers;