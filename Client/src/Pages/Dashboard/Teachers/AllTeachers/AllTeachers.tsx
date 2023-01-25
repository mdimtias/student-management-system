import React, { useEffect, useState } from 'react';
import { useTitle } from '../../../../hooks/useTitle';
import male from "./../../../../assets/Students/male.png";
import female from "./../../../../assets/Students/female.png";

const AllTeachers = () => {
    useTitle("All Teachers")
    const [teachers, setTeachers] = useState<any[]>([]);
    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}/teachers`)
        .then((res) => res.json())
        .then((data) => setTeachers(data.data));
    }, []);
    return (
        <div className="all-students-section py-5 px-7">
        <div className="breadcrumb-area flex justify-between pb-6">
          <h2 className="text-left text-bold text-black text-2xl">
            All Teachers
          </h2>
          <div className="flex gap-1">
            <h3 className="text-left text-bold text-black text-2xl">Student</h3>
            <h4 className="text-left text-bold text-[#6C757D] text-2xl">
              / All Teachers
            </h4>
          </div>
        </div>
        <div>
          <div className="bg-white p-5">
            <div className="search-all-student pb-5">
              <h2 className="font-bold text-2xl pb-5">All Teachers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="roll">
                  <input type="text" className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Roll Number" />
                </div>
                <div className="name">
                  <input type="text"  className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Name"/>
                </div>
                <div className="class">
                  <input type="text"  className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Class"/>
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
                {teachers?.map((teacher, i) => (
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
                    <td>{teacher.mobile}</td>
                    <td>{teacher.email}</td>
                    <td>Edit || Delete</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
       
          </div>
        </div>
      </div>
    );
};

export default AllTeachers;