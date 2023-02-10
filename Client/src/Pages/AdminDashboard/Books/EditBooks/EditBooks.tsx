import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Input } from "../../../StyleComponent/Input.styled";
import { Label } from "../../../StyleComponent/Label.styled";
import { Textarea } from "../../../StyleComponent/Textarea.styled";
import { ImCross } from "react-icons/im";
import useImageUpload from "../../../../hooks/useImageUpload";
import Loader from "../../../../SharedPage/Loader/Loader";

type EditProps = {
  id: string;
  setEditBookModal: any;
  refetch: any;
};
const EditBooks = ({
  id,
  setEditBookModal,
  refetch: booksRefetch,
}: EditProps) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    error: imageError,
    loading: imageLoading,
    uploadImage,
  } = useImageUpload("profilePhoto");

  const {
    isLoading,
    error,
    data: book = [],
  } = useQuery({
    queryKey: ["book", id],
    queryFn: async () =>
      await fetch(`${process.env.REACT_APP_API_URL}/books/${id}`, {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const removeId = data.data[0];
          delete removeId._id;
          reset(removeId);
          return data.data[0];
        }),
  });

  const onSubmit = async (data: any) => {
    setLoading(true)
    if (file && file.name) {
      const imageUploadServer = await uploadImage(file);
      data.bookCoverPhoto = imageUploadServer;
    } else {
      data.bookCoverPhoto = book.bookCoverPhoto;
    }

    fetch(`${process.env.REACT_APP_API_URL}/books/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Update Book Successful!");
          reset();
          setLoading(false);
          setEditBookModal(false);
          booksRefetch();
        }
        if (data.success === false) {
          toast.error("Update Book Fail!");
          setLoading(false);
          setEditBookModal(false);
        }
      })
      .catch((error) => {
        toast.error("Update Book Fail");
        setLoading(false);
        setEditBookModal(false);
      });
  };

  return (
    <div>
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal px-5 md:px-24 lg:px-64 overflow-y-auto max-h-full">
        <div className="modal-box w-11/12 max-w-5xl">
        <div className="absolute top-2 right-2 z-10">
              <label htmlFor="edit-modal" className="btn rounded-full">
                <ImCross></ImCross>
              </label>
            </div>
            <>{error && <p>Something Went Wrong</p>}</>
{isLoading ? <Loader></Loader> : <form action="" onSubmit={handleSubmit(onSubmit)} className='px-5 py-10 bg-white'>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative px-4">
              <Label htmlFor="">Book Name <span className='text-red-500'>*</span></Label>
              <Input type="text" placeholder="Enter Book Name" {...register("name", { required: true })} />
              {errors.name && <span className="text-red-500 text-left block text-bold">Book Name is required</span>}
          </div>
          <div className="relative px-4">
              <Label htmlFor="">Subjects <span className='text-red-500'>*</span></Label>
              <Input type="text" placeholder="Enter Subjects" {...register("subject", { required: true })} />
              {errors.subject && <span className="text-red-500 text-left block text-bold">Subject Name is required</span>}
          </div>
          <div className="relative px-4">
              <Label htmlFor="">Writer Name <span className='text-red-500'>*</span></Label>
              <Input type="text" placeholder="Enter Writer Name" {...register("writerName", { required: true })} />
              {errors.writerName && <span className="text-red-500 text-left block text-bold">Writer Name is required</span>}
          </div>
          <div className="relative px-4 mb-7">
              <Label htmlFor="">Class <span className='text-red-500'>*</span></Label>
              <select className="form-input-style select w-full" {...register("class", { required: true })} defaultValue="">
                  <option value="" disabled >Please Select Class *</option>
                  <option value="Play">Play</option>
                  <option value="Nursery">Nursery</option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                  <option value="Four">Four</option>
                  <option value="Five">Five</option>
                  <option value="Six">Six</option>
                  <option value="Seven">Seven</option>
                  <option value="Eight">Eight</option>
                  <option value="Nine">Nine</option>
                  <option value="Ten">Ten</option>
                  <option value="Eleven">Eleven</option>
                  <option value="Twelve">Twelve</option>
              </select>
              {errors.class && <span className="text-red-500 text-left block text-bold">Class name is required</span>}
          </div>
          
          <div className="relative px-4">
              <Label htmlFor="">ID Number<span className='text-red-500'>*</span></Label>
              <Input type="number" placeholder="Enter ID Number" {...register("idNumber", { required: true })}  />
              {errors.idNumber && <span className="text-red-500 text-left block text-bold">ID Number is required</span>}
          </div>
          <div className="relative px-4">
              <Label htmlFor="">Published Date<span className='text-red-500'>*</span></Label>
              <Input type="date" placeholder="Enter Published Date" {...register("publishedDate", { required: true })}  />
              {errors.publishedDate && <span className="text-red-500 text-left block text-bold">Published Date is required</span>}
          </div>
          <div className="relative px-4">
              <Label htmlFor="">Upload Date<span className='text-red-500'>*</span></Label>
              <Input type="date" placeholder="Upload Date" {...register("uploadDate", { required: true })}  />
              {errors.uploadDate && <span className="text-red-500 text-left block text-bold">Upload Date is required</span>}
          </div>
         
      </div>
   <div>
      
   <div className="relative w-full px-4">
              <Textarea {...register("book_description")}  placeholder="Book Description"></Textarea>
          </div>
   <div className="text-left pb-5 flex flex-col justify-center md:flex-row gap-5">
          <div className="text-left w-full mb-7 px-4">
              <label htmlFor="" className='font-bold text-black text-lg'>Upload Book Photo <span className='text-red-500 mt-5'>*</span></label>
              <input type="file" {...register("bookCoverPhoto")}  accept="image/*" className="mt-3 file-input w-full" onChange={(e: any) => setFile(e.target.files[0])} />
          </div>
          <div className="avatar justify-center w-full px-4">
        <div className="w-24 rounded-full">
          <img src={book?.bookCoverPhoto} alt="" />
      </div>
      </div>
      <div className="px-4">
      {imageError && (
          <p className="text-red-500">
            Image Upload Fail. Please try again
          </p>
        )}
      </div>
    </div>
   </div>
     <div className="form-button">
      <button className='save-btn pr-3' disabled={loading || imageLoading}>{loading? "Saving..." : "Save"}</button>
     </div>
  </form>}
        
        </div>
      </div>
      {/* <>{error && <p>Something Went Wrong</p>}</> */}
    </div>
  );
};

export default EditBooks;
