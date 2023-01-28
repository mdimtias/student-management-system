import React, { useEffect, useState } from "react";
import male from "./../../../../assets/Students/male.png";
import female from "./../../../../assets/Students/female.png";
import "./AllStudents.css";
import { useTitle } from "../../../../hooks/useTitle";
import DashboardTopHeader from "../../DashboardTopHeader/DashboardTopHeader";
const AllStudents = () => {
  useTitle("All Students")
  const [students, setStudents] = useState<any[]>([]);
  const [query, setQuery] = useState({
    name: "",
    roll: "",
    class: ""
  })
  // const { isLoading, error, data: students=[] } = useQuery({
  //     queryKey: ['students'],
  //     queryFn: () =>
  //       fetch('http://localhost:8080/students')
  //       .then((res) => res.json()),
  //   })
  //   console.log(students)
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/students`)
      .then((res) => res.json())
      .then((data) => setStudents(data.data));
  }, []);

  return (
    <div className="all-students-section py-5 px-7">
      <DashboardTopHeader name="Students" title="All Students"></DashboardTopHeader>
      <div>
        <div className="bg-white p-5">
          <div className="search-all-student pb-5">
            <h2 className="font-bold text-2xl pb-5">All Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="roll">
                <input type="text" onChange={(e)=>setQuery({...query, roll: e.target.value.toLowerCase()})}  className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Roll Number" />
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
                <th>Roll</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Section</th>
                <th>Parent</th>
                <th>Address</th>
                <th>Date Of Birth</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students?.filter(student=>student?.name?.toLowerCase().includes(query.name))
              .filter(student=>student?.roll?.toLowerCase().includes(query.roll))
              .filter(student=>student?.class?.toLowerCase().includes(query.class))
              .map((student, i) => (
                <tr key={student._id} className={`${i % 2 ? "" : "active"}`}>
                  <td>{student.roll}</td>
                  <td className="">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          src={
                            student?.studentPhoto
                              ? student.studentPhoto
                              : student.gender === "Male"
                              ? male
                              : female
                          }
                          alt={student.name}
                        />
                      </div>
                    </div>
                  </td>
                  <td>{student.name}</td>
                  <td>{student.gender}</td>
                  <td>{student.class}</td>
                  <td>{student.section}</td>
                  <td>{student.fatherName}</td>
                  <td>{student.address}</td>
                  <td>{student.dateOfBirth}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
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

export default AllStudents;
