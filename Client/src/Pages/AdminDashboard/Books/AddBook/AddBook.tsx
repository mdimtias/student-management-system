import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { imgUpload } from '../../../../hooks/imageUpload';
import { useTitle } from '../../../../hooks/useTitle';
import "./../../Students/AllStudents/AllStudents.css";
import { Input } from '../../../StyleComponent/Input.styled';
import { Label } from '../../../StyleComponent/Label.styled';
import DashboardTopHeader from '../../DashboardTopHeader/DashboardTopHeader';
const AddBook = () => {
    useTitle("Add Books")
     const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
     const onSubmit =async (data:any) =>{
        if(data.bookCoverPhoto[0]){
            const image = data.bookCoverPhoto[0];
            const formData = new FormData();
            formData.append("image", image);
            const imageUploadServer = await imgUpload(formData);
            data.bookCoverPhoto = imageUploadServer;
        }else{
            data.bookCoverPhoto = "";
        }

        fetch(`${process.env.REACT_APP_API_URL}/books`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.data.acknowledged){
            toast.success("Add Book Successful")
            reset();
            console.log(data)
           }
        })
        .catch(error=>{
            console.log(error)
            toast.error("Book Add Fail")
        })
     }
    return (
        <div className='add-student-section px-5 py-6'>
           <DashboardTopHeader name="Book" title="Add Book"></DashboardTopHeader>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='px-5 py-10 bg-white'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="form-input-container">
                        <Label htmlFor="">Book Name <span className='text-red-500'>*</span></Label>
                        <Input type="text" placeholder="Enter Book Name" {...register("name", { required: true })} className="input form-input-style w-full" />
                        {errors.name && <span className="text-red-500 text-left block text-bold">Book Name is required</span>}
                    </div>
                    <div className="form-input-container">
                        <Label htmlFor="">Subjects <span className='text-red-500'>*</span></Label>
                        <Input type="text" placeholder="Enter Subjects" {...register("subject", { required: true })} className="input form-input-style w-full" />
                        {errors.subject && <span className="text-red-500 text-left block text-bold">Subject Name is required</span>}
                    </div>
                    <div className="form-input-container">
                        <Label htmlFor="">Writer Name <span className='text-red-500'>*</span></Label>
                        <Input type="text" placeholder="Enter Writer Name" {...register("writerName", { required: true })} className="input form-input-style w-full" />
                        {errors.writerName && <span className="text-red-500 text-left block text-bold">Writer Name is required</span>}
                    </div>
                    <div className="form-input-container">
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
                    
                    <div className="form-input-container">
                        <Label htmlFor="">ID Number<span className='text-red-500'>*</span></Label>
                        <Input type="number" placeholder="Enter ID Number" {...register("idNumber", { required: true })} className="input form-input-style w-full" />
                        {errors.idNumber && <span className="text-red-500 text-left block text-bold">ID Number is required</span>}
                    </div>
                    <div className="form-input-container">
                        <Label htmlFor="">Published Date<span className='text-red-500'>*</span></Label>
                        <Input type="date" placeholder="Enter Published Date" {...register("publishedDate", { required: true })} className="input form-input-style w-full" />
                        {errors.publishedDate && <span className="text-red-500 text-left block text-bold">Published Date is required</span>}
                    </div>
                    <div className="form-input-container">
                        <Label htmlFor="">Upload Date<span className='text-red-500'>*</span></Label>
                        <Input type="date" placeholder="Upload Date" {...register("uploadDate", { required: true })} className="input form-input-style w-full" />
                        {errors.uploadDate && <span className="text-red-500 text-left block text-bold">Upload Date is required</span>}
                    </div>
                   
                </div>
              <div className="flex">
                    <div className="text-left">
                        <label htmlFor="" className='font-bold text-black text-lg'>Upload Book Photo <span className='text-red-500 mt-5'>*</span></label>
                        <Input type="file" {...register("bookCoverPhoto")}  accept="image/*" className="mt-3 file-input w-full" />
                    </div>
              </div>
               <div className="form-button">
                <button className='save-btn pr-3'>Save</button>
                <button className='reset-btn' onClick={() =>reset()}>Reset</button>
               </div>
            </form>
        </div>
    );
};

export default AddBook;