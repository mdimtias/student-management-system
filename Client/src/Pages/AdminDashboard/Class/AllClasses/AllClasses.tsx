import React, { useState } from "react";
import { useTitle } from "../../../../hooks/useTitle";
import DashboardTopHeader from "../../DashboardTopHeader/DashboardTopHeader";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../SharedPage/Loader/Loader";
const AllClasses = () => {
  useTitle("All classes")
  const [query, setQuery] = useState({
    name: "",
    email: "",
    class: ""
  })

  const { isLoading, error, data: classes=[] } = useQuery({
      queryKey: ['classes'],
      queryFn: async () =>
        await fetch(`${process.env.REACT_APP_API_URL}/classes`, {
          headers: {
            'authorization': `${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
          }
        })
        .then((res) => res.json())
        .then((data)=>data.data)
  })

  return (
    <div className="all-classes-section py-5 px-7">
      <DashboardTopHeader name="Classes" title="All Classes"></DashboardTopHeader>
      <div>
        <div className="bg-white p-5">
          <div className="search-all-class pb-5">
            <h2 className="font-bold text-2xl pb-5">All Class</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="roll">
                <input type="text" onChange={(e)=>setQuery({...query, email: e.target.value.toLowerCase()})}  className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Email" />
              </div>
              <div className="name">
                <input type="text" onChange={(e)=>setQuery({...query, name: e.target.value.toLowerCase()})}  className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Name"/>
              </div>
              <div className="class">
                <input type="text" onChange={(e)=>setQuery({...query, class: e.target.value.toLowerCase()})}   className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Class"/>
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
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Section</th>
                <th>Subject</th>
                <th>Date</th>
                <th>Time</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classes?.filter((classItem: any)=>classItem?.name?.toLowerCase().includes(query.name))
              .filter((classItem: any)=>classItem?.email?.toLowerCase().includes(query.email))
              .filter((classItem: any)=>classItem?.class?.toLowerCase().includes(query.class))
              .map((classItem: any, i: any) => (
                <tr key={classItem._id} className={`${i % 2 ? "" : "active"}`}>
                  <td>{classItem.id}</td>
                  <td>{classItem.name}</td>
                  <td>{classItem.gender}</td>
                  <td>{classItem.class}</td>
                  <td>{classItem.section}</td>
                  <td>{classItem.subject}</td>
                  <td>{classItem.date}</td>
                  <td>{classItem.time}</td>
                  <td>{classItem.phone}</td>
                  <td>{classItem.email}</td>
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

export default AllClasses;
