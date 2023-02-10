import React, { useState } from 'react';
import { useTitle } from '../../../../hooks/useTitle';
import male from "./../../../../assets/Students/male.png";
import female from "./../../../../assets/Students/female.png";
import DashboardTopHeader from '../../DashboardTopHeader/DashboardTopHeader';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../../SharedPage/Loader/Loader';
import EditParents from '../EditParents/EditParents';
import { toast } from 'react-hot-toast';
import DeleteModal from '../../../../SharedPage/DeleteModal/DeleteModal';

const AllParents = () => {
    useTitle("All parents")
    const [id, setId] = useState("")
    const [editParentModal, setEditParentModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [query, setQuery] = useState({
      name: "",
      email: "",
      phone: ""
    })
    const { isLoading, error, refetch, data: parents = [] } = useQuery({
      queryKey: ['parents'],
      queryFn: async () =>
        await fetch(`${process.env.REACT_APP_API_URL}/parents`, {
          headers: {
            'authorization': `${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
          }
        })
        .then((res) => res.json())
        .then((data)=>data.data)
  })
console.log(parents)
  // Open Edit Modal
  const handleEdit = (id:string)=>{
    setId(id);
    setEditParentModal(true)
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
    fetch(`${process.env.REACT_APP_API_URL}/parents/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Delete Parent Successful!");
          setLoading(false);
          setDeleteModal(false);
          refetch();
        }
        if (data.success === false) {
          toast.error("Delete Parent Fail!");
          setLoading(false);
          setDeleteModal(false);
        }
      })
      .catch((error) => {
        toast.error("Delete Parent Fail!");
        setLoading(false);
        setDeleteModal(false);
        console.log(error)
      });
  };
  
    return (
      <>
      {editParentModal && <EditParents id={id} setEditParentModal={setEditParentModal} refetch={refetch}></EditParents>}
        <div className="all-students-section py-5 px-7">
       <DashboardTopHeader name="Parents" title="All Parents"></DashboardTopHeader>
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
                {parents?.filter((parent:any)=>parent?.name?.toLowerCase().includes(query.name))
              .filter((parent:any)=>parent?.email?.toLowerCase().includes(query.email))
              .filter((parent:any)=>parent?.phone?.toLowerCase().includes(query.phone))
                
                .map((parents:any, i:any) => (
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
                    <td><label htmlFor="edit-modal" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleEdit(parents._id)}>Edit</label>  <label htmlFor="delete-modal" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleDeleteModal(parents?.name, parents?._id)}>Delete</label></td>
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

export default AllParents;