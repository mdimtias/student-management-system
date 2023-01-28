import React, { useEffect, useState } from 'react';
import { useTitle } from '../../../../hooks/useTitle';
import male from "./../../../../assets/Students/male.png";
import female from "./../../../../assets/Students/female.png";

const AllParents = () => {
    useTitle("All parentss")
    const [parents, setParents] = useState<any[]>([]);
    const [query, setQuery] = useState({
      name: "",
      email: "",
      phone: ""
    })
    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}/parents`)
        .then((res) => res.json())
        .then((data) => setParents(data.data));
    }, []);
    return (
        <div className="all-students-section py-5 px-7">
        <div className="breadcrumb-area flex justify-between pb-6">
          <h2 className="text-left text-bold text-black text-2xl">
            All Parents
          </h2>
          <div className="flex gap-1">
            <h3 className="text-left text-bold text-black text-2xl">Parents</h3>
            <h4 className="text-left text-bold text-[#6C757D] text-2xl">
              / All Parents
            </h4>
          </div>
        </div>
        <div>
          <div className="bg-white p-5">
            <div className="search-all-student pb-5">
              <h2 className="font-bold text-2xl pb-5">All Parents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="name">
                  <input type="text" onChange={(e)=>setQuery({...query, name: e.target.value.toLocaleLowerCase()})} className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Name" />
                </div>
                <div className="email">
                  <input type="text" onChange={(e)=>setQuery({...query, email: e.target.value.toLocaleLowerCase()})}  className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Email"/>
                </div>
                <div className="phone">
                  <input type="text"  onChange={(e)=>setQuery({...query, phone: e.target.value.toLocaleLowerCase()})} className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Phone"/>
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
                  <th>Occupation</th>
                  <th>Parent</th>
                  <th>Address</th>
                  <th>Date Of Birth</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {parents?.filter(parents=>parents?.name?.toLowerCase().includes(query.name))
              .filter(parents=>parents?.email?.toLowerCase().includes(query.email))
              .filter(parents=>parents?.phone?.toLowerCase().includes(query.phone))
                
                .map((parents, i) => (
                  <tr key={parents._id} className={`${i % 2 ? "" : "active"}`}>
                    <td className="">
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img
                            src={
                              parents?.parentsPhoto
                                ? parents.parentsPhoto
                                : parents.gender === "Male"
                                ? male
                                : female
                            }
                            alt={parents.name}
                          />
                        </div>
                      </div>
                    </td>
                    <td>{parents.name}</td>
                    <td>{parents.gender}</td>
                    <td>{parents.occupation}</td>
                    <td>{parents.fatherName}</td>
                    <td>{parents.address}</td>
                    <td>{parents.dateOfBirth}</td>
                    <td>{parents.phone}</td>
                    <td>{parents.email}</td>
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

export default AllParents;