import React, { useState } from 'react';
import { useTitle } from '../../../../hooks/useTitle';
import male from "./../../../../assets/Students/male.png";
import DashboardTopHeader from '../../DashboardTopHeader/DashboardTopHeader';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../../SharedPage/Loader/Loader';
import DeleteModal from '../../../../SharedPage/DeleteModal/DeleteModal';
import EditBooks from '../EditBooks/EditBooks';
import { toast } from 'react-hot-toast';

const AllBooks = () => {
    useTitle("All Books")
    const [editBookModal, setEditBookModal] = useState(false)
    const [id, setId] = useState("")
    const [deleteModal, setDeleteModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [query, setQuery] = useState({
      id: "",
      name: "",
      writer: ""
    })
    const { isLoading, error, refetch, data: books=[] } = useQuery({
      queryKey: ['books'],
      queryFn: async () =>
        await fetch(`${process.env.REACT_APP_API_URL}/books`, {
          headers: {
            'authorization': `${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
          }
        })
        .then((res) => res.json())
        .then((data)=>data.data)
  })

   // Edit Modal Open
   const handleEdit = (id:string)=>{
    setId(id);
    setEditBookModal(true)
  }
  
  // Delete Book
const handleDeleteModal= (name:string, id:string )=>{
  setDeleteModal(true);
  setId(id);
  setName(name)
}
  const handleDelete = (id:string)=>{
    setDeleteModal(true);
    setLoading(true)
    fetch(`${process.env.REACT_APP_API_URL}/books/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Delete Book Successful!");
          setLoading(false);
          setDeleteModal(false);
          refetch();
        }
        if (data.success === false) {
          toast.error("Delete Book Fail!");
          setLoading(false);
          setDeleteModal(false);
        }
      })
      .catch((error) => {
        toast.error("Delete Book Fail!");
        setLoading(false);
        setDeleteModal(false);
        console.log(error)
      });
  };
    return (
        <>
         {editBookModal && <EditBooks id={id} setEditBookModal={setEditBookModal} refetch={refetch}></EditBooks>}
        <div className="all-students-section py-5 px-7">
      <DashboardTopHeader name="Books" title="All Books"></DashboardTopHeader>
        <div>
          <div className="bg-white p-5">
            <div className="search-all-student pb-5">
              <h2 className="font-bold text-2xl pb-5">All Books</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="roll">
                  <input type="text"  onChange={(e)=>setQuery({...query, id: e.target.value.toLocaleLowerCase()})} className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By ID Number" />
                </div>
                <div className="name">
                  <input type="text"  onChange={(e)=>setQuery({...query, name: e.target.value.toLocaleLowerCase()})}  className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Name"/>
                </div>
                <div className="class">
                  <input type="text"  onChange={(e)=>setQuery({...query, writer: e.target.value.toLocaleLowerCase()})}  className="bg-[#F8F8F8] py-2 px-2 w-full focus:outline-none" placeholder="Search By Writer"/>
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
                  <th>Subject</th>
                  <th>Writer</th>
                  <th>Class</th>
                  <th>ID Number</th>
                  <th>Published</th>
                  <th>Upload Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {books?.filter((book:any)=>book?.name?.toLowerCase().includes(query.name))
              .filter((book:any)=>book?.idNumber?.toLowerCase().includes(query.id))
              .filter((book:any)=>book?.writerName?.toLowerCase().includes(query.writer))
                
                .map((book:any, i:any) => (
                  <tr key={book._id} className={`${i % 2 ? "" : "active"}`}>
                    <td className="">
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img
                            src={
                              book?.bookCoverPhoto ? book?.bookCoverPhoto : male
                            }
                            alt={book.name}
                          />
                        </div>
                      </div>
                    </td>
                    <td>{book.name}</td>
                    <td>{book.subject}</td>
                    <td>{book.writerName}</td>
                    <td>{book.class}</td>
                    <td>{book.idNumber}</td>
                    <td>{book.publishedDate}</td>
                    <td>{book.uploadDate}</td>
                    <td><label htmlFor="edit-modal" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleEdit(book._id)}>Edit</label>  <label htmlFor="delete-modal" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={()=>handleDeleteModal(book?.name, book?._id)}>Delete</label></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {isLoading && <Loader></Loader>}
            <>{error && <p className="font-bold text-lg pt-5">Something went wrong</p>}</>
            </div>
       
          </div>
          {deleteModal && <DeleteModal name={name} id={id} handleDelete={handleDelete} loading={loading}></DeleteModal>}
        </div>
      </div>
        </>
    );
};

export default AllBooks;