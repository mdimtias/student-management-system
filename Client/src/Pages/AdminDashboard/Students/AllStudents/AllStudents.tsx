import React, { useState } from "react";
import male from "./../../../../assets/Students/male.png";
import female from "./../../../../assets/Students/female.png";
import "./AllStudents.css";
import { useTitle } from "../../../../hooks/useTitle";
import DashboardTopHeader from "../../DashboardTopHeader/DashboardTopHeader";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../SharedPage/Loader/Loader";
import { toast } from "react-hot-toast";
import DeleteModal from "../../../../SharedPage/DeleteModal/DeleteModal";
import EditStudents from "../EditStudents/EditStudents";
const AllStudents = () => {
  useTitle("All Students")
  const [id, setId] = useState("")
  const [editStudentModal, setEditStudentModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [query, setQuery] = useState({
    name: "",
    roll: "",
    class: ""
  })

  const { isLoading, error, refetch, data: students=[] } = useQuery({
      queryKey: ['students'],
      queryFn: async () =>
        await fetch(`${process.env.REACT_APP_API_URL}/students`, {
          headers: {
            'authorization': `${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
          }
        })
        .then((res) => res.json())
        .then((data)=>data.data)
  })

  // Open Edit Modal
  const handleEdit = (id:string)=>{
    setId(id);
    setEditStudentModal(true)
  }
  
  // Delete Parent
const handleDeleteModal= (name:string, id:string )=>{
  setDeleteModal(true);
  setId(id);
  setName(name)
}
  const handleDelete = (id:string)=>{
    setDeleteModal(true);
    setLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}/students/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Delete Student Successful!");
          setLoading(false);
          setDeleteModal(false);
          refetch();
        }
        if (data.success === false) {
          toast.error("Delete Student Fail!");
          setLoading(false);
          setDeleteModal(false);
        }
      })
      .catch((error) => {
        toast.error("Delete Student Fail!");
        setLoading(false);
        setDeleteModal(false);
        console.log(error)
      });
  };
  
  return (
    <>
     {editStudentModal && <EditStudents id={id} setEditParentModal={setEditStudentModal} refetch={refetch}></EditStudents>}
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
              {students?.filter((student: any)=>student?.name?.toLowerCase().includes(query.name))
              .filter((student: any)=>student?.roll?.toLowerCase().includes(query.roll))
              .filter((student: any)=>student?.class?.toLowerCase().includes(query.class))
              .map((student: any, i: any) => (
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
                  <td><label htmlFor="edit-modal" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleEdit(student._id)}>Edit</label>  <label htmlFor="delete-modal" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleDeleteModal(student?.name, student?._id)}>Delete</label></td>
                </tr>
              ))}
            </tbody>
          </table>
          {isLoading && <Loader></Loader>}
          <>{error && <p className="font-bold text-lg pt-5">Something went wrong</p>}</>
          </div>
     </div>
        </div>
        {deleteModal && <DeleteModal name={name} id={id} handleDelete={handleDelete} loading={loading}></DeleteModal>}
      </div>
    </>
  );
};

export default AllStudents;
