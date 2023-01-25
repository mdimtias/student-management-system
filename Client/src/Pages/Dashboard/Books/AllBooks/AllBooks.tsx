import React, { useEffect, useState } from 'react';
import { useTitle } from '../../../../hooks/useTitle';
import male from "./../../../../assets/Students/male.png";
import female from "./../../../../assets/Students/female.png";

const AllBooks = () => {
    useTitle("All Books")
    const [books, setBooks] = useState<any[]>([]);
    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}/books`)
        .then((res) => res.json())
        .then((data) => setBooks(data.data));
    }, []);
    return (
        <div className="all-students-section py-5 px-7">
        <div className="breadcrumb-area flex justify-between pb-6">
          <h2 className="text-left text-bold text-black text-2xl">
            All Books
          </h2>
          <div className="flex gap-1">
            <h3 className="text-left text-bold text-black text-2xl">Books</h3>
            <h4 className="text-left text-bold text-[#6C757D] text-2xl">
              / All Books
            </h4>
          </div>
        </div>
        <div>
          <div className="bg-white p-5">
            <div className="search-all-student pb-5">
              <h2 className="font-bold text-2xl pb-5">All Books</h2>
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
                {books?.map((book, i) => (
                  <tr key={book._id} className={`${i % 2 ? "" : "active"}`}>
                    <td className="">
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img
                            src={
                              book?.bookPhoto
                                ? book.bookPhoto
                                : book.gender === "Male"
                                ? male
                                : female
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

export default AllBooks;